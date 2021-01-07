import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Box,
 ListItem,
  ListItemText,
 Paper,
 
  Button,
  ListItemIcon,
 
  List,
 
  Grid,
} from '@material-ui/core';

import { useRouter } from 'next/dist/client/router';
import Navbar from '../components/Navbar';
import CustomDrawer from '../components/customDrawer';
// import { ComponentProps } from '../_app';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: '',
      minHeight: '80vh',
      margin: 'auto',
      padding: 'auto',
     paddingBottom: '6px',
     [theme.breakpoints.up('md')]: {
        width: '100%',}
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 320,
    },
    fullList: {
      width: 'auto',
    },
    sublist: {
      marginLeft: theme.spacing(3),
    },
    paper: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: theme.spacing(4),
      padding: theme.spacing(2),
      borderRadius: '25px',
      [theme.breakpoints.down('md')]: {
        width: '96%',
      },
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },

    button: {
      margin: 'auto',
    },

    heading: {
      color: 'white',
      marginBottom: theme.spacing(4),
      paddingTop: '40px',
    },
    subHeading: {
      color: '#001831',
      fontSize: '1.2rem',
    },
    details: {
      textAlign: 'center',
    },
    center: {
      width: 'fit-content',
      margin: 'auto',
    },

    text: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        marginTop: '165px',
        marginLeft: theme.spacing(2),
      },
    },
  })
);

interface PageProps{
    setSuccessMessage:(mssg:string)=>void
    setErrorMessage:(mssg:string)=>void
}

const Instructions: React.FC<PageProps> = ({
 
  setSuccessMessage,
  setErrorMessage,
}) => {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const quizHandle = () => { router.push('/dashboard/test') };

  
  return (
    <div className={classes.root}>
      <CustomDrawer
        name={''}
        username={''}
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
      <Grid container>
        {/* <CustomDrawer name={'Devansh'} username={'Devansh'} open={open} setOpen={setOpen} /> */}
        <Grid container alignItems="center" justify="center">
          <Box>
            <ListItem className={classes.heading}>
              <ListItemText
                primary={'Instructions'}
                primaryTypographyProps={{ variant: 'h2', align: 'center' }}
                secondary={`Here are some Instructions for ISTE's multi city quiz competition: ChimeraX`}
                secondaryTypographyProps={{ className: `${classes.subHeading}`, align: 'center' }}
              />
            </ListItem>
          </Box>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <Box>
            <Paper className="classes.paper" elevation={8}>
              <List component="nav" aria-label="Instructions for Test">
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>1) The test will begin at __, and end at __</ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>2) There can be a maximum of 2 members in a team.</ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    3) The quiz will automatically submit once the timer runs out
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    4) Replacement of any participant of a team is not allowed after registration.
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    5) Make sure to save your answers whenever a question is attempted
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    6) Each correct question gets __ marks and no marks are deducted for a wrong
                    answer
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>7) There are 30 questions, all are compulsory</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    8) Questions marked for review are marked in blue, questions whose answers are
                    saved are marked in green and unsaved answers to questions are marked in red to
                    help u keep track
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Instructions;
