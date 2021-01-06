import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Paper, Tabs, Tab, Box, Divider, Radio, ListItemText, TextField, Avatar, List, ListItem, ListItemAvatar, ListItemSecondaryAction } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from 'relay-hooks';
import query from "../../components/relay/queries/GetUserQuery"
import { GetUserQuery } from '../../__generated__/GetUserQuery.graphql';
import ReceivedInvitation from '../../components/recivedInvitations';
import SendInvitation from '../../components/sentInvitation';
import { InvitationInput } from '../../__generated__/SendInvitationMutation.graphql';
import SendInvitationMutation from "../../components/relay/mutations/SendInvitationMutation"
import {ComponentProps} from "../_app"
import CustomDrawer from '../../components/customDrawer';
import VerticalStepper from '../../components/VerticalStepper';
import { themeContext } from '../../components/theme';
import { useRouter } from 'next/dist/client/router';
import cookie from 'js-cookie';
import Navbar from '../../components/Navbar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
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
      height: window.outerHeight + 150,
      [theme.breakpoints.down('sm')]: {
        height: 'auto',
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
      marginTop: theme.spacing(4),
      marginLeft: '50%',
      marginBottom: theme.spacing(2),
    },
    tab: {
      overflow: 'scroll',
    },
  })
);

const Team: React.FC<ComponentProps> = ({
  environment,
  viewer,
  setSuccessMessage,
  setErrorMessage,
}) => {
  const classes = useStyles();
  const [tab, setTab] = React.useState(0);
  const [receiver, setReceiver] = React.useState<any>(null);
  const [send, setSend] = React.useState(false);
  const [rendered, setRendered] = React.useState(false);
  const refetchRef = React.useRef<any>(null);
  const [radio, setRadio] = React.useState<'A' | 'B'>('A');
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { data, error, retry, isLoading } = useQuery<GetUserQuery>(query);

  if (isLoading && !rendered) {
    return <h1>Loading</h1>;
  }

  let dummyUsers = data?.getSingleUsers;

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
        console.log(refetchRef.current);
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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  const router = useRouter();
  const logoutHandle = () => {
    cookie.remove('authorization');
    router.push('/');
  };

  return (
    <div className={classes.root}>
      <CustomDrawer
        name={'Devansh'}
        username={'Devansh'}
        open={open}
        setOpen={setOpen}
        setSuccessMessage={setSuccessMessage}
        setErrorMessage={setErrorMessage}
      />
      <Navbar setOpen={setOpen} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage} />
      <Grid container component="main">
        <Grid item xs={12} md={8} className={classes.leftGrid}>
          <Box mt={5} mb={5} className={classes.header}>
            <Grid container justify="flex-start" alignItems="center">
              <Grid item sm={4} alignItems="center">
                <img src="/dashboard.png" className={classes.dashboardImg}></img>
              </Grid>
              <Grid item sm={8}>
                <Typography variant="h4" className={classes.Head_title}>
                  <b>Hello, {viewer.name}</b>
                </Typography>
                <Typography>Welcome to your ChimeraX dashboard</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Box display="flex">
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
                getOptionLabel={(option) => `${option.name} ${option.email}`}
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
          </Box>
          <Button variant="contained" color="primary" disabled className={classes.proceed_button}>
            PROCEED{' '}
          </Button>
          <Box>
            <VerticalStepper />
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
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

 export default Team