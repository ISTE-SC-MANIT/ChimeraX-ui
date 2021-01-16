import React from "react"
import { Box, Grid, Typography } from "@material-ui/core"
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/dist/client/router';
import { ComponentProps } from "../pages/_app";
import CustomDrawer from "./customDrawer"
import Navbar from "./Navbar"

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
  },
}));

const Success: React.FC<ComponentProps> = ({ viewer, setSuccessMessage, setErrorMessage }) => {
    const classes = useStyles();
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    return (
      <div>
        <CustomDrawer
          name={viewer.name}
          username={viewer.email}
          open={open}
          setOpen={setOpen}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
        <Navbar
          setOpen={setOpen}
          setSuccessMessage={setSuccessMessage}
          setErrorMessage={setErrorMessage}
        />
        <Grid
          container
          justify="center"
          onClick={() => setOpen(false)}
          className={classes.root}
        >
          <Box textAlign="center" margin={3}>
            <Typography variant="h5">
              Congratulations. Your quiz was successfully submitted. We will get back to you soon.
            </Typography>
          </Box>
        </Grid>
      </div>
    );
}

export default Success;