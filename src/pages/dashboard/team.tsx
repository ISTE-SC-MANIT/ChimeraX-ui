import React, { Component } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Paper, Tabs, Tab, Box, Divider, Radio, ListItemText, TextField, Avatar, List, ListItem, ListItemAvatar, ListItemSecondaryAction, Badge } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from 'relay-hooks';
import query from "../../components/relay/queries/GetUserQuery"
import teamQuery from "../../components/relay/queries/GetTeamDetailsQuery"
import { GetUserQuery } from '../../__generated__/GetUserQuery.graphql';
import ReceivedInvitation from '../../components/recivedInvitations';
import SendInvitation from '../../components/sentInvitation';
import { InvitationInput } from '../../__generated__/SendInvitationMutation.graphql';
import SendInvitationMutation from "../../components/relay/mutations/SendInvitationMutation"
import { ComponentProps } from "../_app"
import CustomDrawer from '../../components/customDrawer';
import VerticalStepper from '../../components/VerticalStepper';
import { themeContext } from '../../components/theme';
import PlayAsIndividualMutation from "../../components/relay/mutations/PlayAsIndividualMutation"
import { useRouter } from 'next/dist/client/router';
import cookie from 'js-cookie';
import Navbar from '../../components/Navbar'
import LoadingScreen from '../../components/loadingScreen';
import DialogBox from '../../components/dialog';




class Amount extends Component {
   render() {
      return (
        <>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" align="center">
              <b>AMOUNT</b>&nbsp;
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="h6" align="center">
              <b> ₹ 100 </b>
            </Typography>
          </Grid>
        </>
      );
  }
}





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      height: '100vh',
    },
    leftGrid: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(8),
      },
    },
    header: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
      },
    },
    radioBtn: {
      margin: 10,
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      height: '100%',
    },
    container: {
      height: window.outerHeight + 60,
      // height: window.outerHeight,
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
        paddingBottom: theme.spacing(2),
      },
    },
    dashboardImg: {
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        width: '40%',
      },
    },

    Head_title: {
      fontSize: '2.4rem',
      // textAlign: 'center',
      // margin: 'auto',
    },
    invitation_button: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      marginBottom: '6px',
      marginTop: '6px',
    },
    proceed_button: {
      width: 'fit-content',
      margin: 'auto',
      marginTop: theme.spacing(4),
      // marginLeft: '50%',
      marginBottom: theme.spacing(2),
    },
    tab: {
      overflow: 'scroll',
    },
    note: {
      padding: theme.spacing(8),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(5),
      },
    },
  })
);

const Team: React.FC<ComponentProps> = ({
  environment,
  viewer,
  setSuccessMessage,
  setErrorMessage,
  refetch
}) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const [receiver, setReceiver] = React.useState<any>(null);
  const [send, setSend] = React.useState(false);
  const [rendered, setRendered] = React.useState(false);
  const refetchRef = React.useRef<any>(null);
  const [radio, setRadio] = React.useState<'A' | 'B'>('A');
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    if (viewer.step === "REGISTER") {
      router.push("/dashboard/register")
    }
    if (viewer.step === "PAYMENT") {
      router.push("/dashboard/payment")
    }
    if (viewer.step === "TEST") {
      router.push("/dashboard/test")
    }
    if (viewer.step === "CHOOSE_TEAM") {

    }

  }, [])

  const { data, error, retry, isLoading } = useQuery<GetUserQuery>(query);

  if (isLoading && !rendered) {
    return <LoadingScreen loading />;
  }

  let dummyUsers = data?.getSingleUsers.filter((user) => user.city === viewer.city);

  const handleSendInvitation = () => {
    console.log(receiver);
    const receiverInput: InvitationInput = {
      receiverId: receiver._id,
      receiverEmail: receiver.email,
      receiverName: receiver.name,
    };
    SendInvitationMutation(environment, receiverInput, {
      onCompleted: (res) => {
        setSuccessMessage('Invitation Sent');

        setReceiver(null);
        setRendered(true);
        setSend(!send);
        retry();

        refetchRef.current && refetchRef.current.retry();
      },
      onError: (err) => {
        setErrorMessage('Something went wrong Please try again later!');
      },
    });
  };
  const handlePlayAsIndividual = () => {
    PlayAsIndividualMutation(environment, {
      onCompleted: () => {

        setSuccessMessage('Redirecting ....');
        router.push("/dashboard/payment")
        refetch()

      }, onError: () => {
        setErrorMessage('Something went wrong Please try again later!');
      }
    })
  }




  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  const logoutHandle = () => {
    cookie.remove('token');
    router.push('/');
  };
  const handleClose = () => setOpenDialog(false);

  return (
    <>
      <DialogBox
        environment={environment}
        openDialog={openDialog}
        handleClose={handleClose}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
        refetch={refetch}
      />
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
          <Grid item xs={12} md={8} className={classes.leftGrid}>
            <Box mt={5} mb={5} className={classes.header}>
              <Grid container justify="flex-start" alignItems="center">
                <Grid item sm={4} alignItems="center">
                  <img src="/dashboard.png" className={classes.dashboardImg}></img>
                </Grid>
                <Grid item sm={8}>
                  <Typography variant="h4" className={classes.Head_title}>
                    <b>Hello, {viewer.name[0].toUpperCase() + viewer.name.substring(1)}</b>
                  </Typography>
                  <Typography>Welcome to your ChimeraX dashboard</Typography>
                </Grid>
              </Grid>
            </Box>
            <Box ml={2} mb={2}>
              <Typography variant="h5">
                Step-2, Select whether you want to play as an individual or as a team?
              </Typography>
            </Box>
            <Box>
              <Box display="flex" mb={2}>
                <Radio
                  className={classes.radioBtn}
                  checked={radio === 'A'}
                  value="A"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                  onClick={() => setRadio('A')}
                />
                <div>
                  <Typography variant="h6">Play as an Individual</Typography>
                  <Typography>Be a lone ranger</Typography>
                </div>
              </Box>
              {radio === 'A' && (
                <Box>
                  <Grid container alignItems="center">
                    <Amount />
                    <Grid item xs={12} sm={4}>
                      <Box className={classes.proceed_button}>
                        <Button
                          variant="contained"
                          color="primary"
                          // onClick={handlePlayAsIndividual}
                          onClick={() => {
                            setOpenDialog(true);
                          }}
                        >
                          PROCEED TO PAY{' '}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <Box display="flex">
                <Radio
                  className={classes.radioBtn}
                  checked={radio === 'B'}
                  value="B"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                  onClick={() => setRadio('B')}
                />
                <div>
                  <Typography variant="h6">Play as a Team</Typography>
                  <Typography>Be a dynamic duo</Typography>
                </div>
              </Box>
            </Box>
            {radio === 'B' && (
              <Box ml={8}>
                <Box display="flex">
                  <Typography variant="body1">Send Invitation to your teammate</Typography>
                </Box>
                <Box display="flex">
                  <Autocomplete
                    id="combo-box-demo"
                    //@ts-ignore
                    options={dummyUsers}
                    value={receiver}
                    onChange={(event: any, newValue: any) => {
                      setReceiver(newValue);
                    }}
                    getOptionLabel={(option) => `${option.name} (${option.email})`}
                    renderOption={(option) => (
                      <React.Fragment>
                        <span>
                          <Avatar alt="Remy Sharp" src="/dummy.png" />
                        </span>
                        &nbsp; {option.name} ({option.email})
                      </React.Fragment>
                    )}
                    style={{ width: 400 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search Team Member"
                        variant="outlined"
                        size="small"
                      />
                    )}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={receiver === null}
                    onClick={handleSendInvitation}
                    className={classes.invitation_button}
                  >
                    Send{' '}
                  </Button>
                </Box>
                <Box mt={2} mb={1}>
                  <Grid container>
                    <Amount />
                  </Grid>
                </Box>
              </Box>
            )}
            <Box className={classes.note}>
              <Typography variant="h6" align="justify">
                <b>Note:</b>
                <br />
                The amount is same for each team whether you play as an individual or as a team. If
                you play as a team, the one who sends the invitation becomes the Team Leader and the
                other becomes the Team Helper. The payment can only be done by the team leader. The
                team leader and team helper both will be able to see the questions but only the team
                leader can answer.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            //   component={Paper} elevation={6} square
          >
            <Paper elevation={6} className={classes.container}>
              <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                // textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Sent Invitations" />
                <Tab label="Received Invitations" />
                classsName={classes.tab}
              </Tabs>
              <Divider />
              {tab === 0 ? (
                <SendInvitation
                  refetchRef={refetchRef}
                  send={send}
                  environment={environment}
                  setSuccessMessage={setSuccessMessage}
                  setErrorMessage={setErrorMessage}
                />
              ) : (
                <ReceivedInvitation
                  refetchRef={refetchRef}
                  environment={environment}
                  setSuccessMessage={setSuccessMessage}
                  setErrorMessage={setErrorMessage}
                  refetch={refetch}
                />
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Team