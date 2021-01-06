import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CreateOrder from "../../components/relay/mutations/CreateOrderMutation"
import PayOrder from "../../components/relay/mutations/PayOrderMutation"
import Typography from '@material-ui/core/Typography';
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

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
  image: {
    backgroundImage: `url('/Vector3.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '60vh',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
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
}));
const VectorImg = (classes) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box className={classes.vector}>
        <Image
          src='/payment.png'
          alt="logo"
          className={classes.imageV}
          width={window.innerWidth}
          height={window.innerWidth / 1.46}
        />
      </Box>
    );
  }
  return (
    <Box className={classes.vector}>
      <Image src="/payment.png" alt="logo" className={classes.imageV} width={500} height={394} />
    </Box>
  );
};
const Payment: React.FC<ComponentProps> = ({
  viewer,
  environment,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const classes = useStyles();

  const handleSuccess = (res: CreateOrderMutationResponse) => {
    const { name, email, phone } = viewer;

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: res.createOrder.currency,
      amount: res.createOrder.amount,
      order_id: res.createOrder.id,
      name: 'ISTE SC MANIT',
      description: 'Payment for chimera x',

      handler: function (response) {
        PayOrder(
          environment,
          { paymentId: response.razorpay_payment_id },
          { onCompleted: () => setSuccessMessage('Payment Successful'), onError: () => setErrorMessage('Payment Failed')}
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
      { teamName: '' },
      {
        onCompleted: (res) => handleSuccess(res),
        onError: () => setErrorMessage('Payment Failed'),
      }
    );

    // const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/razorpay`, {
    //     method: 'POST', headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         amount: getTotal(values).value

    //     })
    // }).then((t) =>
    //     t.json()
    // )
  };

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Chimera-X
          </Typography>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
      <Grid container component="main">
        <Grid item xs={12} sm={8} md={6} className={classes.leftGrid}>
          <Box className={classes.heading}>
            <Typography variant="h4">
              <b>Payment for Chimera-X 2021</b>
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
                      {'You / your team will be recognized with Team name '}
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
              className={classes.input}
              size="small"
              id="password-input"
              label="Enter Team Name"
              required
              variant="outlined"
              margin="normal"
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
              <b>Team Status :</b> &nbsp;
            </Typography>
            <Typography> Team </Typography>
          </Box>
          <Box display="flex" className={classes.box}>
            <Typography>
              <b> Team Leader :</b> &nbsp;
            </Typography>
            <Typography> Devansh Kumar Sharma (kdevanshsharma23@gmail.com) </Typography>
          </Box>
          <Box display="flex" className={classes.box}>
            <Typography>
              <b> Team Helper :</b> &nbsp;
            </Typography>
            <Typography> Devansh Kumar Sharma (kdevanshsharma23@gmail.com) </Typography>
          </Box>

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
            <img src="/razorpay.png" width="180px" className={classes.box} />
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
                      <Checkbox color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <>
                          I agree to the <Link>Terms & Conditions</Link> of ISTE-SC-MANIT{' '}
                        </>
                      }
                    />
                  </ListItem>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={classes.box}>
                  <Button color="primary" variant="contained" onClick={handleRazorpay}>
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
          <VectorImg classes={classes} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Payment