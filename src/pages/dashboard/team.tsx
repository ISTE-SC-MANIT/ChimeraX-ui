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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    //   flexGrow: 1,
      height:"100vh"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
height:"100%"
      },
      container:{
          height:"93vh"
      },
      dashboardImg:{
          width:"60%",
          height:"20%",
          marginLeft:theme.spacing(16)
      }
  }),
);

const Team:React.FC<ComponentProps>=({environment})=> {
  const classes = useStyles();
  const [tab,setTab] =React.useState(0)
  const [receiver,setReceiver]=React.useState<any>(null)

  const handleSendInvitation=()=>{
    console.log(receiver)
    const receiverInput:InvitationInput ={
      receiverId:receiver._id,
      receiverEmail:receiver.email,
      receiverName:receiver.name
    }
    SendInvitationMutation(environment,receiverInput,{onCompleted:()=>{
      console.log("registered")
      
              },onError:(err)=>{console.log(err)}})
  }

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  const {data,error,retry,isLoading}=useQuery<GetUserQuery>(query)

  if(isLoading){
   return <h1>Loading</h1>
  }

  const dummyUsers= data.getSingleUsers

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
     
      <Grid item xs={false} sm={4} md={7}  lg={8} >
      <Box mt={6} ml={2}>
          <Grid container>
              <Grid item md={6} lg={6}>
                  <Box>
                      <img src="/dashboard.png" className={classes.dashboardImg}></img>
                  </Box>
              </Grid>
              <Grid item md={6} lg={6}><Box mt={6}><Typography variant="h4"> Hello CoderBite</Typography></Box>
              <Box><Typography >Welcome to your Chimera dashboard</Typography>
                  </Box>
                  </Grid>
          </Grid>
      </Box>
      <Box>
        <Box display="flex">
      <Radio
        checked={true}
      value="a"
      name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <div>
      <Typography variant="h6">Play as an Individual</Typography>
      <Typography >You will be the one man army of your team</Typography>
      </div>
      </Box>
      <Box display="flex">
      <Radio
        checked={true}
      value="a"
      name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
     
      <ListItemText primary={"Play as a Team"} primaryTypographyProps={{ variant: "h6" }}
                                        secondary={"Choose your team mate and play together"}
                                    />
      
      </Box>
      </Box>

      <Box display="flex">
        <Typography variant="body1">Send Invitation to your team mate</Typography> 
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
      <span><Avatar alt="Remy Sharp" src="/dummy.png" /></span>
     &nbsp; {option.name} {option.email}
    </React.Fragment>
  )}
  style={{ width: 400 }}
  renderInput={(params) => <TextField {...params} label="Search Team Member" variant="outlined" size="small" />}
/>
      </Box>
<Button variant="outlined" color="primary" disabled={receiver===null} onClick={handleSendInvitation}>
  Send Invitation
  </Button>

<Button variant="contained" color="primary">PROCEED </Button>
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={4} 
    //   component={Paper} elevation={6} square
      >
      <Paper elevation={6}  className={classes.container}>
      <Tabs
        value={tab}
        onChange={handleChange}
        indicatorColor="primary"
        // textColor="primary"
        variant="fullWidth"
      >
        <Tab label="Sent Invitations" />
        <Tab label="Received Invitations" />
       
      </Tabs>
      <Divider/>
      {tab===0?<ReceivedInvitation/>:<SendInvitation/>}
      </Paper>
      </Grid>
    </Grid>
    </div>
  );
}

 export default Team