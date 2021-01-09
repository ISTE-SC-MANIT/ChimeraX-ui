import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // background: fade(theme.palette.common.black, 0.5),
    minHeight: '100vh',
    zIndex: theme.zIndex.modal,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  load: {
    marginTop: theme.spacing(2),
  },
}));

interface Props {
  loading: boolean;
}

const LoadingScreen: React.FunctionComponent<Props> = ({ loading }) => {
  const classes = useStyles();
  return loading ? (
    <section className={classes.root}>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item>
          <CircularProgress thickness={4} size={60} />
        </Grid>
        <Grid item className={classes.load}>
          <Typography variant="h3" align="center">
            Loading ....
          </Typography>
        </Grid>
      </Grid>
    </section>
  ) : null;
};

export default LoadingScreen;