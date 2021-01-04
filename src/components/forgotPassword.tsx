import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { authenticate } from '../components/utils';
import { useRouter } from 'next/router';

interface Props {
    open: boolean,
    onClose: () => void
}

const FormDialog: React.FC<Props> = ({ open, onClose }) => {
    // const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({ email: ''});
    const router = useRouter();

        const initialValues = {
        email: '',
        };
      
     const handleSubmit = (values:typeof initialValues) => {
       setFormData({ ...formData });

       axios
         .put(`${process.env.NEXT_PUBLIC_BACKEND}/api/forgotpassword`, { ...values })
         .then((response) => {
           authenticate(response, () => {
             console.log('working');
           });
         })
         .catch((error) => {
           return error;
         });
     }
    const handleClickOpen = () => {
        onClose()
    };

    const handleClose = () => {
        onClose()
    };

    

    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"> Forgot Password ?</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter your email id , a reset link will be sent to your registered email id which will
              redirect you to update pass word page.
            </DialogContentText>

             <Formik
                onSubmit={(values) => handleSubmit(values)}
                initialValues={initialValues}
            >
              <Form id="myform">
                <Field name="email">
            {({ field, meta }: FieldProps<typeof initialValues['email']>) => 
            ( <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />)}
                </Field>
             

        
          
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
         
             </Form>
            </Formik>
         
            </DialogContent>
        </Dialog>
      </div>
    );
}

export default FormDialog