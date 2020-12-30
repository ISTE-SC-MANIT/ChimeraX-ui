import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
    open: boolean,
    onClose: () => void
}

const FormDialog: React.FC<Props> = ({ open, onClose }) => {
    // const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        onClose()
    };

    const handleClose = () => {
        onClose()
    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"> Forgot Password ?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your email id , a reset link will be sent to your registered email id which will redirect you to update pass word page.
          </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} color="primary">
                        Submit
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog