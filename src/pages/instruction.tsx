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
import Autocomplete from '@material-ui/lab/Autocomplete';







const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      backgroundColor: '#3997F5',
      minHeight: '100vh',
      margin: 'auto',
      padding: 'auto',
     paddingBottom: '6px',
     [theme.breakpoints.up('md')]: {
        width: '75%',}
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

const instructions=()=>{
     const classes = useStyles();
     const router = useRouter();

  return (
    <div className={classes.root}>
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
                  <ListItemText>
                    "There is no one who loves pain itself, who seeks after it and wants to have it,
                    simply because it is pain..."
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    "There is no one who loves pain itself, who seeks after it and wants to have it,
                    simply because it is pain..."
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    "There is no one who loves pain itself, who seeks after it and wants to have it,
                    simply because it is pain..."
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    "There is no one who loves pain itself, who seeks after it and wants to have it,
                    simply because it is pain..."
                  </ListItemText>
                </ListItem>{' '}
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText>
                    "There is no one who loves pain itself, who seeks after it and wants to have it,
                    simply because it is pain..."
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Grid>
        <Grid container spacing={0} alignItems="center" justify="center">
          <Box mt={4} mb={4} className="classes.button">
            <Button variant="outlined" >Start Quiz</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default instructions;
