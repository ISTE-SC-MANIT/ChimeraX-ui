import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import teamQuery from "../../components/relay/queries/GetTeamDetailsQuery"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateOrder from "../../components/relay/mutations/CreateOrderMutation"
import PayOrder from "../../components/relay/mutations/PayOrderMutation"
import Typography from '@material-ui/core/Typography';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  Checkbox,
  Link,
  ListItemText,
  Divider,
  List,
  TextField,
} from '@material-ui/core';
import Image from 'next/image';
import { ComponentProps } from '../_app';
import { loadScript } from '../../components/utils';
import { CreateOrderMutationResponse } from '../../__generated__/CreateOrderMutation.graphql';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CustomDrawer from '../../components/customDrawer';
import Navbar from '../../components/Navbar';
import { useQuery } from 'relay-hooks';
import query from "../../components/relay/queries/GetTeamDetailsQuery"
import { GetTeamDetailsQuery } from '../../__generated__/GetTeamDetailsQuery.graphql';
import LoadingScreen from '../../components/loadingScreen';
import { useRouter } from 'next/router';
import ScrollDialog from '../../components/t&c';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  image: {
    backgroundImage: `url('/Vector3.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[750],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[750],
    },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heading: {
    textAlign: 'center',
    width: 'fit-content',
    margin: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  input: {
    width: '50%',
    marginLeft: 20,
  },
  box: {
    paddingLeft: 20,
    marginBottom: theme.spacing(2),
  },
  button: {
    width: 'fit-content',
    margin: 'auto',
  },
  listItem: {
    marginBottom: 0,
  },
  leftGrid: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(8),
    },
  },
  link: {
    cursor: 'pointer',
  },
}));
const VectorImg = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box>
        <Image
          src='/payment.png'
          alt="logo"
          width={window.innerWidth}
          height={window.innerWidth / 1.46}
        />
      </Box>
    );
  }
  return (
    <Box>
      <Image src="/payment.png" alt="logo" width={500} height={394} />
    </Box>
  );
};
const RazorpayImg = () => {
  const classes = useStyles();
  const theme = useTheme();
  const source = theme.palette.type === 'light' ? '/razorpay.png' : '/razorpay-dark.png';
  return (
    <img src={source} width="180px" className={classes.box} />
  );
};
const Payment: React.FC<ComponentProps> = ({
  viewer,
  environment,
  setSuccessMessage,
  setErrorMessage,
  refetch
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [teamName, setTeamName] = React.useState("")
  const [referralCode, setReferralCode] = React.useState("")
  const [checked, setChecked] = React.useState(false)
  const router = useRouter()


  React.useEffect(() => {
    if (viewer.step === "REGISTER") {

    }
    if (viewer.step === "PAYMENT") {
      router.push("/dashboard/payment")
    }
    if (viewer.step === "TEST") {
      router.push("/dashboard/test")
    }
    if (viewer.step === "CHOOSE_TEAM") {
      router.push("/dashboard/team")
    }

  }, [])

  const { data, error, retry, isLoading } = useQuery<GetTeamDetailsQuery>(query);
  if (isLoading) {
    return <LoadingScreen loading />
  }



  const handleSuccess = (res: CreateOrderMutationResponse) => {
    const { name, email, phone } = viewer;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: res.createOrder.currency,
      amount: res.createOrder.amount,
      order_id: res.createOrder.id,
      name: 'ISTE SC MANIT',
      description: 'Payment for chimera x',

      handler: async (response) =>{
        await PayOrder(
          environment,
          { paymentId: response.razorpay_payment_id },
          {
            onCompleted: () => {
              setSuccessMessage('Payment Successful'),
                refetch()
              router.push("/dashboard/test")
            },
            onError: () => setErrorMessage('Payment Failed')
          }
        );
      },
      prefill: {
        name,
        email,
        mobile: phone,
      },
    };
    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  };

  const handleRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setErrorMessage('Payment Failed');
      return;
    }

    CreateOrder(
      environment,
      { teamName: teamName, referralCode: referralCode },
      {
        onCompleted: (res) => handleSuccess(res),
        onError: () => {
       
          setErrorMessage("Payment failed! You might be entering wrong referral code.")},
      }
    );


  };

  const disable = !Boolean(teamName) || Boolean(viewer.role === "TEAM_HELPER") || !Boolean(checked)
  const teamHelperDisable = Boolean(viewer.role === 'TEAM_HELPER');

  return (
    <>
      <ScrollDialog openDialog={openDialog} onClose={() => setOpenDialog(false)} />
      <div className={classes.root}>
        <CustomDrawer
          name={viewer.name}
          username={viewer.email}
          open={open}
          setOpen={setOpen}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
        <Navbar
          setOpen={setOpen}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
        <Grid container component="main" onClick={() => setOpen(false)}>
          <Grid item xs={12} sm={8} md={6} className={classes.leftGrid}>
            <Box className={classes.heading}>
              <Typography variant="h4">
                <b>Step-3 , Payment for Chimera-X 2021</b>
              </Typography>
            </Box>

            <Box>
              <List>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    className={classes.listItem}
                    primary="Enter your team name"
                    secondary={
                      <React.Fragment>
                        {'You / your team will be recognized by your Team name '}
                      </React.Fragment>
                    }
                    primaryTypographyProps={{ variant: 'h6' }}
                  />
                </ListItem>
              </List>
              {/* <Divider variant="inset" component="li" /> */}
            </Box>
            <Box>
              <TextField
                // fullWidth
                value={teamName}
                onChange={(e) => {
                  setTeamName(e.target.value);
                }}
                className={classes.input}
                size="small"
                id="password-input"
                label="Enter Team Name"
                required
                variant="outlined"
                margin="normal"
                disabled={teamHelperDisable}
              />
              <TextField
                // fullWidth
                value={referralCode}
                onChange={(e) => {
                  setReferralCode(e.target.value);
                }}
                className={classes.input}
                size="small"
                id="password-input"
                label="Enter Referral Code"
                required
                variant="outlined"
                margin="normal"
                disabled={teamHelperDisable}
                helperText={teamHelperDisable ? "" : "If you don't have any referral code , Please leave this field blank"}
              />
            </Box>
            <Divider></Divider>
            <Box>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Verify your team details"
                  secondary={
                    <React.Fragment>
                      {'Check your team details, if anything looks wrong contact us'}
                    </React.Fragment>
                  }
                  primaryTypographyProps={{ variant: 'h6' }}
                />
              </ListItem>
            </Box>
            <Box display="flex" className={classes.box}>
              <Typography>
                {' '}
                <b>Team Status:</b> &nbsp;
              </Typography>
              <Typography> {data.getTeamDetails.status} </Typography>
            </Box>
            <Box display="flex" className={classes.box}>
              <Typography>
                {' '}
                <b>Team Leader:</b> &nbsp;
              </Typography>
              <Typography>
                {' '}
                {data.getTeamDetails.teamLeader.name} ({data.getTeamDetails.teamLeader.email}){' '}
              </Typography>
            </Box>
            {data.getTeamDetails.status === 'TEAM' && (
              <Box display="flex" className={classes.box}>
                <Typography>
                  <b> Paired With:</b> &nbsp;
                </Typography>
                <Typography>
                  {' '}
                  {data.getTeamDetails.teamHelper.name} ({data.getTeamDetails.teamHelper.email})
                </Typography>
              </Box>
            )}

            <Divider></Divider>
            <Box>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Complete your payment"
                  primaryTypographyProps={{ variant: 'h6' }}
                />
              </ListItem>
            </Box>
            <Box>
              <RazorpayImg />
            </Box>
            <Box>
              <Grid container className={classes.box} alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <b>AMOUNT</b>&nbsp;
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    <b> ₹ 100 </b>
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  <Box>
                    <ListItem>
                      <ListItemIcon>
                        <Checkbox
                          color="primary"
                          onChange={() => setChecked(!checked)}
                          disabled={teamHelperDisable}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <>
                            I agree to the{' '}
                            <Link className={classes.link} onClick={() => setOpenDialog(true)}>
                              Terms and Condition
                            </Link>{' '}
                            of ISTE-SC-MANIT{' '}
                          </>
                        }
                      />
                    </ListItem>
                    {viewer.role === 'TEAM_HELPER' && (
                      <Box className={classes.box}>
                        <Typography>Please ask your team leader to complete payment</Typography>
                      </Box>
                    )}
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.box}>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={handleRazorpay}
                      disabled={true}
                    >
                      Proceed for payment
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={4}
            md={6}
            className={classes.image}
            justify="center"
            alignItems="flex-end"
          >
            <VectorImg />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Payment