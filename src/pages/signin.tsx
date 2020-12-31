import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Image from 'next/image'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton } from '@material-ui/core';

const LoginButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#3997F5'),
    backgroundColor: '#3997F5',
    border: '2px solid white',
    borderRadius: '50px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url('/Vector2.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('xs')]: {
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
    backgroundColor: '#3997F5',
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    // backgroundImage: `url('/chimerax.png')`,
    width: 'fit-content',
    height: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(5),
  },
  imageTitle: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px `,
    border: '2px solid currentColor',
    borderRadius: '20px',
  },
  imageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageTitle2: {
    color: theme.palette.common.white,
  },
  vector: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  imageV: {
    width: '100% !important',
    marginLeft: `${theme.spacing(8)} !important`,
    height: '600px',
  },
  customButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  base: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  logoIcon: {
    border: '2px solid black',
    borderRadius: '50px',
  },
}));
const VectorImg = (classes) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box className={classes.vector}>
        <Image src="/signin.png" alt="logo" className={classes.imageV} width={window.innerWidth} height={window.innerWidth/1.25} />
      </Box>
    );
  }
  return (
      <Box className={classes.vector}>
        <Image src="/signin.png" alt="logo" className={classes.imageV} width={460} height={367} />
      </Box>
  );
};
export default function SignInSide() {
    const classes = useStyles();

    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={6} component={Paper} elevation={0} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h2">
              Sign In
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                color="primary"
              >
                Sign In
              </Button>

              <Box mt={5}>
                {' '}
                <Typography align="center" variant="h6">
                  Or Sign in with other social platforms
                </Typography>
              </Box>
              <Box>
                <Grid container justify="center" alignItems="center">
                  <Grid item>
                    <IconButton>
                      <img
                        src="/google-logo.png"
                        alt="google"
                        height={70}
                        className={classes.logoIcon}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <img src="/fb-logo.png" alt="fb" height={70} className={classes.logoIcon} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </form>
          </div>
        </Grid>

        <Grid item xs={false} sm={6} className={classes.image}>
          <Box className={classes.logo}>
            <Typography
              component="span"
              variant="h3"
              color="inherit"
              className={classes.imageTitle2}
            >
              One of us?
            </Typography>
          </Box>
          <Box component="span">
            <Grid container justify="center" alignItems="center">
              <LoginButton>Log In</LoginButton>
            </Grid>
          </Box>
          <VectorImg classes={classes} />
        </Grid>
      </Grid>
    );
}