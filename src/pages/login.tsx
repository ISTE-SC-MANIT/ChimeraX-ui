import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Image from 'next/image'
import * as yup from "yup"
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import axios from "axios"
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import FormDialog from '../components/forgotPassword';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useRouter } from 'next/router';
import { authenticate } from '../components/utils';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Formik, Form, Field, FieldProps } from 'formik';
import { ComponentProps } from './_app';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const SigninButton = withStyles((theme) => ({
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
    backgroundImage: `url('/vector.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? 'white' : theme.palette.grey[800],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh',
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
  field: {
    marginTop: theme.spacing(4),
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  base: {
    width: '80%',
    marginTop: theme.spacing(2),
  },
  logoIcon: {
    border: '2px solid black',
    borderRadius: '50px',
  },
  signinBtn: {
    marginBottom: '10px',
    [theme.breakpoints.down('md')]: {
      marginBottom: '100px',
    },
  },
  link: {
    cursor: 'pointer',
  },
}));
const VectorImg = (classes) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box className={classes.vector}>
        <Image
          src="/login.png"
          alt="logo"
          className={classes.imageV}
          width={window.innerWidth}
          height={window.innerWidth / 1.45}
        />
      </Box>
    );
  }
  return (
    <Box className={classes.vector}>
      <Image src="/login.png" alt="logo" className={classes.imageV} width={500} height={345} />
    </Box>
  );
};

const Login: React.FC<ComponentProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const classes = useStyles();
  const [openPass, setOpenPass] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [visible, setVisible] = React.useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setVisible(!visible);
  };
  const initialValues = {
    password: "",
    email: "",
  }

  const validationSchema = yup.object({

    email: yup
      .string()
      .email("Provide a valid Email ID")
      .required("Email cannot be empty"),
    password: yup.string().min(6, "Password must be minimum of 6 characters").required("Password cannot be empty")


  });

  const getStep = (step: 'REGISTER' | 'CHOOSE_TEAM' | 'PAYMENT' | 'TEST') => {
    switch (step) {
      case 'REGISTER':
        return '/dashboard/register';
        break;
      case 'CHOOSE_TEAM':
        return '/dashboard/team';
        break;
      case 'PAYMENT':
        return '/dashboard/payment';
        break;
      case 'TEST':
        return '/dashboard/test';
        break;
    }
  };

  const sendGoogleToken = (tokenId) => {
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND}/api/googlelogin`, {
        idToken: tokenId,
      })
      .then((response) => {
        authenticate(response, () => {
          router.push(getStep(response.data.user.step))
        })

      })
      .catch((error) => {
        // console.log(error)
        setErrorMessage("You might have been singed up from email and password")
        // return error;
      });
  };

  const responseGoogle = (response: GoogleLoginResponse) => {
  
    if (Boolean(response.tokenId)){
      sendGoogleToken(response.tokenId);
    }
    
  }


  const handleLocalLogin = (values: typeof initialValues) => {
    setPending(true)
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/login`, { ...values }).then((response) => {
      console.log(response)

      authenticate(response, () => {
        router.push(getStep(response.data.user.step))
      })
      setSuccessMessage("Successfully logged in")
      setPending(false)
    }).catch((error) => {
      // console.log(error.response.data)
      setErrorMessage(error.response.data.errors)
      setPending(false)
      return error;
    })
  };


  return (
    <>
      {openPass && (
        <FormDialog
          open={openPass}
          onClose={() => setOpenPass(false)}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={6} className={classes.image}>
          <Box className={classes.logo}>
            <Image
              className={classes.link}
              src="/ChimeraX-logo-white.svg"
              alt="logo"
              width={400}
              height={104}
              onClick={() => router.push('/')}
            />
          </Box>
          <Box className={classes.signinBtn}>
            <Grid container justify="center" alignItems="center">
              <SigninButton
                onClick={() => {
                  router.push('/signin');
                }}
              >
                Sign Up
              </SigninButton>
            </Grid>
          </Box>
          <VectorImg classes={classes} />
        </Grid>
        <Grid item xs={12} sm={6} component={Paper} elevation={0} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h2">
              Log In
            </Typography>
            {/* <form className={classes.form} noValidate> */}
            <Formik
              onSubmit={(values) => handleLocalLogin(values)}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              <Form aria-label="Sign up form" id="sign-up-form">
                <Field name="email">
                  {({ field, meta }: FieldProps<typeof initialValues['email']>) => (
                    <TextField
                      fullWidth
                      id="name-input"
                      label="Email Address"
                      required
                      {...field}
                      error={!!(meta.touched && meta.error)}
                      helperText={meta.touched ? meta.error : ''}
                      variant="outlined"
                      // className={classes.field}
                      margin="normal"
                    />
                  )}
                </Field>
                <Field name="password" className={classes.field}>
                  {({ field, meta }: FieldProps<typeof initialValues['password']>) => (
                    <TextField
                      fullWidth
                      id="password-input"
                      label="Password"
                      required
                      {...field}
                      error={!!(meta.touched && meta.error)}
                      helperText={meta.touched ? meta.error : ''}
                      variant="outlined"
                      margin="normal"
                      type={visible ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleShowPassword}
                              edge="end"
                            >
                              {visible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>

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
                    <Link
                      onClick={() => setOpenPass(true)}
                      variant="body2"
                      className={classes.link}
                    >
                      Forget password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      onClick={() => router.push('/signin')}
                      variant="body2"
                      className={classes.link}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  {' '}
                  <Typography align="center" variant="subtitle1">
                    Or Log in with other social platforms
                  </Typography>
                </Box>
                <Box>
                  <Grid container justify="center" alignItems="center">
                    <GoogleLogin
                      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      render={(renderProps) => (
                        <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                          <img
                            src="/google-logo.png"
                            alt="google"
                            height={60}
                            className={classes.logoIcon}
                          />
                        </IconButton>
                      )}
                    ></GoogleLogin>

                    {/* <Grid item>
                      
                    </Grid> */}
                    {/* <Grid item>
                      <IconButton>
                        <img src="/fb-logo.png" alt="fb" height={60} className={classes.logoIcon} />
                      </IconButton>
                    </Grid> */}
                  </Grid>
                </Box>
              </Form>
            </Formik>
            {/* </form> */}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Login