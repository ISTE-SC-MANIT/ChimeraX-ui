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
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, ListItem, ListItemAvatar, ListItemText, Divider, List, TextField } from '@material-ui/core';
import Image from 'next/image';
import { ComponentProps } from '../_app';
import { loadScript } from '../../components/utils';
import { CreateOrderMutationResponse } from '../../__generated__/CreateOrderMutation.graphql';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  heading:{
      width:"fit-content",
      marginLeft:"auto",
      marginRight:"auto",
      marginTop:theme.spacing(2)
  }
}));

const Payment: React.FC<ComponentProps>=({viewer,environment})=> {
  const classes = useStyles();

  const handleSuccess = (res:CreateOrderMutationResponse)=>{
    const { name, email, phone } = viewer


    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: res.createOrder.currency,
      amount: res.createOrder.amount,
      order_id:  res.createOrder.id,
      name: 'ISTE SC MANIT',
      description: 'Payment for chimera x',
    
      handler: function (response) {
        PayOrder(environment,
          {paymentId:response.razorpay_payment_id},
          {onCompleted:()=>console.log("COmpleted"),
          onError:()=>console.log("Error")})
          

      },
      prefill: {
          name,
          email,
          mobile: phone
      }
  }
  const _window = window as any
  const paymentObject = new _window.Razorpay(options)
  paymentObject.open()
  }


  const handleRazorpay = async () => {



    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    CreateOrder(environment,{teamName:""},{onCompleted:(res)=>handleSuccess(res),onError:()=>console.log("Error")})

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



}

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
       <Grid container component="main" >
      
      <Grid item xs={12} sm={8} md={5} >
          <Box className={classes.heading}>
      <Typography variant="h3"> Payment for Chimera-X 2021</Typography>
      </Box>

      <Box>
          <List>
      <ListItem alignItems="flex-start">
 
        <ListItemText
          primary="1. Enter your team name"
          secondary={
            <React.Fragment>
                {"You / your team will be recognized with team name "}
            </React.Fragment>
          }
        
        primaryTypographyProps={{variant:"h6"}}
        />
      </ListItem>
      </List>
      {/* <Divider variant="inset" component="li" /> */}
      </Box>
      <Box>
      <TextField
                                                    fullWidth
                                                    id="password-input"
                                                    label="Enter Team Name"
                                                    required
 
                                                    variant="outlined"
                                                    // className={classes.field}
                                                    margin="normal"
                                                 
                                                    
                                                />
      </Box>
      <Divider></Divider>

      <ListItem alignItems="flex-start">
 
 <ListItemText
   primary="2. Verify your team details"
   secondary={
     <React.Fragment>
         {"Check your team details, if anything looks wrong contact us"}
     </React.Fragment>
   }
 
 primaryTypographyProps={{variant:"h6"}}
 />
</ListItem>
<Box display="flex">
<Typography> <b>Team Status :-</b> &nbsp;</Typography>
<Typography> Team </Typography>
</Box>
<Box display="flex">
<Typography><b> Team Leader :-</b> &nbsp;</Typography>
<Typography> Devansh Kumar Sharma (kdevanshsharma23@gmail.com) </Typography>
</Box>
<Box display="flex">
<Typography><b> Team Helper :- </b>&nbsp;</Typography>
<Typography> Devansh Kumar Sharma (kdevanshsharma23@gmail.com) </Typography>
</Box>
<Box display="flex">
<Typography><b> Registration fess :- </b>&nbsp;</Typography>
<Typography> ₹ 100 /- only </Typography>
</Box>

<Divider></Divider>

<ListItem alignItems="flex-start">

<ListItemText
primary="3. Complete your payment"
secondary={
<React.Fragment>
   {"Check your team details, if anything looks wrong contact us"}
</React.Fragment>
}

primaryTypographyProps={{variant:"h6"}}
/>
</ListItem>


<Button color="primary" variant="contained" onClick ={handleRazorpay}>Proceed for payment</Button>
      </Grid>
      <Grid item xs={false} sm={4} md={7}  />
      
    </Grid></div >
  );
}

export default Payment