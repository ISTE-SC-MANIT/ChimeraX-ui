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
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';
import FormDialog from '../components/forgotPassword';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url('/vector.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
         [theme.breakpoints.down('md')]: {
      backgroundImage: `url('')`,
      backgroundColor: '#3997F5',
      paddingBottom:'25px'
         }
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
        width: "80%",
        height: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(5)
    },
    imageTitle: {

        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px `,
        border: '2px solid currentColor',
        borderRadius:"20px",
        textAlign:'center',
        margin:'auto',
    
    },
    imageButton: {
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
        textAlign:'center',
        
    },
    vector:{
        width:"100%",
        marginTop:theme.spacing(4)
    },
    imageV:{
      width:"100% !important" ,
 
    },
    customButton:{
        marginLeft:"auto",
        marginRight:"auto",
        textAlign:'center',
    },
    base:{
       width:"auto",
       marginTop:theme.spacing(2),
       
    }

}));

export default function SignInSide() {
    const classes = useStyles();
    const [openPass,setOpenPass]=React.useState(false)


    return (
      <>
        {openPass && <FormDialog open={openPass} onClose={() => setOpenPass(false)} />}
        <Grid container component="main" className={classes.root}>
          <Grid item xs={false} sm={4} md={6} className={classes.image}>
            <Box className={classes.logo}>
              <Image src="/chimerax.png" alt="logo" width={600} height={150} />
            </Box>
            <Box width="80%" className={classes.customButton}>
              <ButtonBase focusRipple className={classes.base}>
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="h4"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    Sign In
                  </Typography>
                </span>
              </ButtonBase>
            </Box>
            <Box className={classes.vector} display={{ xs: 'none', sm: 'none', md: 'block' }}>
              <Image
                src="/login.png"
                alt="logo"
                width={700}
                height={550}
                className={classes.imageV}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6} component={Paper} elevation={0} square>
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
                    Or Log in with other social platforms.
                  </Typography>
                </Box>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </>
    );
}