import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { authenticate } from '../components/utils';
import { useRouter } from 'next/router';
import queryString from 'querystring';
import { ComponentProps } from './_app';
import { IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


// import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

let resetPasswordLink;
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  form: {
    width: '50%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
    marginLeft: '25%',
  },
  title: {
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '100px',
  },
}));

const ResetPassword: React.FC<ComponentProps> = ({ setSuccessMessage, setErrorMessage }) => {
  const classes = useStyles();
  const [formData, setFormData] = React.useState({ newpassword: '', confirmPassword: '' });
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);

  const handleShowPassword = () => {
    setVisible(!visible);
  };
  if (typeof window !== 'undefined') {
    const url = window.location.search;
    //console.log(url);
    resetPasswordLink = url.slice(7);
    console.log(resetPasswordLink);
  }

  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleSubmit = (values: typeof initialValues) => {
    verify(values);
    const newPassword = values.newpassword;
    axios
      .put(`${process.env.NEXT_PUBLIC_BACKEND}/api/resetpassword`, {
        resetPasswordLink,
        newPassword,
      })
      .then((response) => {
        authenticate(response, () => {
          setSuccessMessage('Password changed successfully');
          router.push('/');
        });
      })
      .catch((error) => {
        setErrorMessage('Something went wrong Please try again later!');
        return error;
      });
  };

  const initialValues = {
    newpassword: '',
    //confirmPassword: '',
  };

  const validationSchema = yup.object({
    newpassword: yup.string().min(6, 'Password must be minimum of 6 characters'),
  });
  function verify(values: typeof initialValues) {
    // if(values.newpassword!=values.confirmPassword)
    //   alert("password doesnt match");

    //   else
    setFormData({ ...formData });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8}>
        <Box mt={5} className={classes.title}>
          <Typography align="center" component="span" variant="h3" color="inherit">
            Reset Your Password
          </Typography>
        </Box>

        <Box className={classes.title}></Box>
      </Grid>
      <Grid item xs={12} sm={8} component={Paper} elevation={0} square>
        <Formik
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form aria-label="reset_password_form" id="reset_password_form" className={classes.form}>
            <Field name="newpassword">
              {({ field, meta }: FieldProps<typeof initialValues['newpassword']>) => (
                <TextField
                  fullWidth
                  id="newPassword-input"
                  label="New Password"
                  required
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
            {/* <Field name="confirmPassword">
            {({ field, meta }: FieldProps<typeof initialValues['confirmPassword']>) => (
              <TextField
                fullWidth
                id="confirmPassword-input"
                label="Confirm Password"
                required
                {...field}
                error={!!(meta.touched && meta.error)}
                helperText={meta.touched ? meta.error : ''}
                variant="outlined"
                // className={classes.field}
                margin="normal"
                type="password"
              />
            )}
          </Field> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              color="primary"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Grid>
    </Grid>
  );
};

export default ResetPassword
