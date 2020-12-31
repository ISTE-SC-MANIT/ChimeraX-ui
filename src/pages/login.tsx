import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Image from 'next/image'
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import FormDialog from '../components/forgotPassword';
import { blue } from '@material-ui/core/colors';
import Autocomplete from '@material-ui/lab/Autocomplete';


// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//       </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const SigninButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    border: '2px solid white',
    borderRadius: '50px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url('/vector.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
     [theme.breakpoints.down('sm')]: {
       backgroundImage: `url('')`,
       backgroundColor: `#3997F5`,}

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
  logo: {
    // backgroundImage: `url('/chimerax.png')`,
    width: '80%',
    height: '200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(5),
  },
  imageTitle: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px `,
    border: '2px solid currentColor',
    borderRadius: '50px',
  },
  imageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  vector: {
    width: '100%',
    marginTop: theme.spacing(4),
  },
  imageV: {
    width: '100% !important',
  },
  customButton: {
    marginLeft: '25%',
    marginBottom:theme.spacing(3),
    padding: 'auto',
    textAlign: 'center',
     [theme.breakpoints.down('sm')]: {
       marginLeft:'20%',}
  },
  base: {
    width: '80%',
    marginTop: theme.spacing(2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  control: {
    padding: theme.spacing(1),
  },
  background:{
     [theme.breakpoints.down('sm')]: {
       backgroundImage: `url('/login.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'fit',
    backgroundPosition: 'center',}
  }
}));

export default function SignInSide() {
    const classes = useStyles();
    const [openPass,setOpenPass]=React.useState(false)


    return (
      <>
        {openPass && <FormDialog open={openPass} onClose={() => setOpenPass(false)} />}
        <Grid container component="main" className={classes.root}>
          <Grid item xs={12} sm={4} md={6} className={classes.image}>
            <Box className={classes.logo}>
              <Image src="/chimerax.png" alt="logo" width={400} height={104} />
            </Box>
            {/* <Box className={classes.customButton}>
              <ButtonBase focusRipple className={classes.base}>
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="h6"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    Sign In
                  </Typography>
                </span>
              </ButtonBase>
            </Box> */}
            <Box component="span" className={classes.customButton}>
              <SigninButton className={classes.customButton}>Sign In</SigninButton>
            </Box>
            <Box
              className={classes.vector}
              marginLeft={10}
              display={{ xs: 'none', sm: 'none', md: 'block' }}
            >
              <Image
                src="/login.png"
                alt="logo"
                width={400}
                height={300}
                className={classes.imageV}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square className={classes.background}>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h2">
                Log In
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
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={() => setOpenPass(true)} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  {' '}
                  <Typography align="center" variant="h6">
                    Or Log in with other social platforms
                  </Typography>
                </Box>
                <Box>
                  <Grid container justify="center" alignItems="center">
                    <Grid item className={classes.control}>
                      <Link href="#">
                        <Avatar alt="google" src="/google.png" className={classes.large} />
                      </Link>
                    </Grid>
                    <Grid item className={classes.control}>
                      <Link href="#">
                        <Avatar alt="fb" src="/fb.png" className={classes.large} />
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </>
    );
}