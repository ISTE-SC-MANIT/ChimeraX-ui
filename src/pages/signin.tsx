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
import * as yup from "yup"
import axios from "axios"
import { authenticate } from '../components/utils';
import { useRouter } from 'next/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { InputAdornment, IconButton } from '@material-ui/core';
import { Formik, Form, Field, FieldProps } from 'formik';
import { ComponentProps } from './_app';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';

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
      theme.palette.type === 'light' ? 'white' : theme.palette.grey[800],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('md')]: {
      backgroundColor: `#3997F5`,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundColor:
        theme.palette.type === 'light' ? 'white' : theme.palette.grey[800],
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
  loginBtn: {
    marginBottom: '10px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '100px',
    },
  },
}));
const VectorImg = (classes) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box className={classes.vector}>
        <Image src="/signin.png" alt="logo" className={classes.imageV} width={window.innerWidth} height={window.innerWidth / 1.25} />
      </Box>
    );
  }
  return (
    <Box className={classes.vector}>
      <Image src="/signin.png" alt="logo" className={classes.imageV} width={460} height={367} />
    </Box>
  );
};
const SignIn: React.FC<ComponentProps> = ({ setErrorMessage, setSuccessMessage }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({ email: "", password: "", text: "Sign Up" })

  const [visible, setVisible] = React.useState(false)
  const router = useRouter()

  const handleShowPassword = () => {
    setVisible(!visible);
  }
  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  }
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
          router.push(getStep(response.data.user.step));
        });
      })
      .catch((error) => {
        setErrorMessage(error);
        return error;
      });
  };

  const responseGoogle = (response: GoogleLoginResponse) => {
    console.log(response);
    sendGoogleToken(response.tokenId);
  };

  const handleSubmit = (values: typeof initialValues) => {

    setFormData({ ...formData, text: "Submitting ....." })

    axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/api/register`, { ...values }).then((response) => {
      authenticate(response, () => {
        router.push("/dashboard/register")
      })
      setSuccessMessage("Successfully signed in")

    }).catch((error) => {
      setFormData({ ...formData, text: 'Sign Up' });
      setErrorMessage(error.response.data.errors)
      return error;
    })

  }


  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={6} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Sign Up
          </Typography>
          <Formik
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form aria-label="login up form" id="log-in-form">
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
                    disabled
                  />
                )}
              </Field>
              <Field name="password">
                {({ field, meta }: FieldProps<typeof initialValues['password']>) => (
                  <TextField
                    fullWidth
                    id="password-input"
                    label="Password"
                    required
                    disabled
                    {...field}
                    error={!!(meta.touched && meta.error)}
                    helperText={meta.touched ? meta.error : ''}
                    variant="outlined"
                    // className={classes.field}
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
                disabled
              >
                {formData.text}
              </Button>
              <Box mt={5}>
                {' '}
                <Typography align="center" variant="h6">
                  Registrations are closed now.
                </Typography>
              </Box>
              {/* 
              <Box mt={5}>
                {' '}
                <Typography align="center" variant="subtitle1">
                  Or Sign up with other social platforms
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
                </Grid>
              </Box> */}
            </Form>
          </Formik>
          {/* </form> */}
        </div>
      </Grid>

      <Grid item xs={false} sm={6} className={classes.image}>
        <Box className={classes.logo}>
          <Typography component="span" variant="h3" color="inherit" className={classes.imageTitle2}>
            One of us?
          </Typography>
        </Box>
        <Box className={classes.loginBtn}>
          <Grid container justify="center" alignItems="center">
            <LoginButton onClick={() => router.push('/login')}>Log In</LoginButton>
          </Grid>
        </Box>
        <VectorImg classes={classes} />
      </Grid>
    </Grid>
  );
}

export default SignIn