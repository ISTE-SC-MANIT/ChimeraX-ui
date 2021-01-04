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
import queryString from 'query-string';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  form: {
    width: '50%', // Fix IE11 issue.
    marginTop: theme.spacing(1),
    marginLeft:'25%',
  },
  title:{
    
      textAlign:'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:'100px'
  },
}));

export default function reset_pass (){
const classes = useStyles();
const [formData,setFormData]=React.useState({newPassword:"",confirmPassword:"",})
 const router = useRouter();
<script>
  console.log(window.location);
</script>




















  const handleChange = (field: string) => (e: any) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
      const handleSubmit = (values: typeof initialValues) => {
       verify(values);
          
         axios
           .put(`${process.env.NEXT_PUBLIC_BACKEND}/api/resetpassword`, { ...values })
           .then((response) => {
             authenticate(response, () => {
               router.push('/login');
             });
           })
           .catch((error) => {
             return error;
           });
   

      };

      const initialValues = {
        newPassword: '',
        confirmPassword: '',
      };

       const validationSchema = yup.object({
        
         newPassword: yup
           .string()
           .min(6, 'Password must be minimum of 6 characters')
           
       });
      function verify (values:typeof initialValues){
         
          if(values.newPassword!=values.confirmPassword)
            alert("password doesnt match");
                
            else
             setFormData({ ...formData});
        }














return (
  <Grid container component="main" className={classes.root}>
    <Grid item xs={12} sm={8}>
      <Box mt={5} className={classes.title}>
        <Typography align="center" component="span" variant="h3" color="inherit">
          Reset Your Password
        </Typography>
      </Box>

      <Box className={classes.title}>
        <Typography align="center" component="span" variant="h4" color="inherit">
          User Name/User ID
        </Typography>
      </Box>
    </Grid>
    <Grid item xs={12} sm={8} component={Paper} elevation={0} square>
      <Formik
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form aria-label="reset_password_form" id="reset_password_form" className={classes.form}>
          <Field name="newPassword">
            {({ field, meta }: FieldProps<typeof initialValues['newPassword']>) => (
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
                type="password"
              />
            )}
          </Field>
          <Field name="confirmPassword">
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
          </Field>

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
);}