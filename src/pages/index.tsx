import * as React from 'react';
import { createStyles, makeStyles, Theme, useTheme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, Fade, Grid, Link, useMediaQuery } from '@material-ui/core';
import Image from 'next/image';
import NavbarHeader from '../components/navbarheader';
import ThemeToggleButton from '../components/theme/modeToggle';
import { useRouter } from 'next/router';
import { url } from 'inspector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      flexGrow: 1,
      background: `url('/bg.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    header: {
      minHeight: '10vh',
      alignItems: 'center',
      flexWrap: 'wrap',
      display: 'flex',
    },
    logo: {
      marginRight: 'auto',
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
      },
    },
    menuBtn: {
      backgroundColor: '#3997F5',
      color: 'white',
      marginRight: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#1976D2',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    darkTheme: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    body: {
      minHeight: '80vh',
    },
    typo: {
      color: theme.palette.type === 'light' ? '#1976D2' : 'white',
      // color: '#221C64',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
      },
    },
    prize: {
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    prizeSection: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(6),
      },
    },
    margin: {
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(3),
      },
    },
    mobileDrawer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    flexColumn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  })
);

const Btn = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#3997F5'),
    backgroundColor: '#3997F5',
    border: '2px solid white',
    borderRadius: '25px',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
}))(Button);

const VectorImg = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));
  if (mobile) {
    return (
      <Box>
        <Image
          src="/prize.svg"
          alt="logo"
          width={window.innerWidth}
          height={window.innerWidth / 1.74}
        />
      </Box>
    );
  }
  return (
    <Box>
      <Image src="/prize.svg" alt="logo" width={800} height={460} />
    </Box>
  );
};


const Landing: React.FC = () => {
    const classes = useStyles();
    const router = useRouter();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    return (
      <>
        <NavbarHeader open={open} setOpen={setOpen} />
        <div className={classes.root} onClick={() => setOpen(false)}>
          <Box padding={4} className={classes.header}>
            <Box className={classes.logo}>
              <img
                style={{ cursor: 'pointer' }}
                src={
                  theme.palette.type === 'light'
                    ? '/ChimeraX-logo-blue.svg'
                    : '/ChimeraX-logo-whitebg.svg'
                }
                width="256px"
                alt="logo"
                onClick={() => router.push('/')}
              />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Fade in={true}>
                <Box className={classes.darkTheme}>
                  <ThemeToggleButton />
                </Box>
              </Fade>
              <Button
                variant="contained"
                onClick={() => router.push('/login')}
                className={classes.menuBtn}
              >
                Login
              </Button>
              <Button
                variant="contained"
                onClick={() => router.push('/signin')}
                className={classes.menuBtn}
              >
                Sign up
              </Button>
            </Box>
          </Box>
          <Box className={classes.mobileDrawer}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={(event) => {
                event.stopPropagation();
                handleDrawerOpen();
              }}
            >
              <MenuIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
          <Grid container className={classes.body}>
            <Grid
              container
              item
              xs={12}
              md={4}
              justify="space-around"
              alignItems="center"
              direction="column"
              className={classes.prizeSection}
            >
              <Box className={classes.margin}>
                <Typography variant="h4" align="center" className={classes.typo}>
                  <b>Central India's largest Quizzing Contest</b>
                </Typography>
              </Box>
              <Box className={classes.margin}>
                <Box marginBottom={5}>
                  <Typography variant="h5" align="center">
                    Prelims
                    <br />
                    7th Feb' 2021
                  </Typography>
                </Box>
                <Box className={classes.flexColumn} lineHeight={2}>
                  <Btn onClick={() => router.push('/signin')}>Register Now</Btn>
                  <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/18fYq_uSXg76WQ4Ov6BTZ4rjJFkwTXThV/view?usp=sharing"
                  >
                    How to get registered?
                  </Link>
                </Box>
              </Box>
              <Box className={classes.prize}>
                <Box marginBottom={2}>
                  <Typography variant="h5" align="center">
                    PRIZES
                  </Typography>
                </Box>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={4} container justify="center" alignItems="center">
                    <Box className={classes.flexColumn}>
                      <img
                        src={theme.palette.type === 'light' ? '/first.svg' : '/first-white.svg'}
                        alt="first"
                        width="70px"
                      />
                      <Typography variant="h6">
                        <b>₹ 15,000</b>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} container justify="center" alignItems="center">
                    <Box className={classes.flexColumn}>
                      <img
                        src={theme.palette.type === 'light' ? '/second.svg' : '/second-white.svg'}
                        alt="first"
                        width="70px"
                      />
                      <Typography variant="h6">
                        <b>₹ 10,000</b>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4} container justify="center" alignItems="center">
                    <Box className={classes.flexColumn}>
                      <img
                        src={theme.palette.type === 'light' ? '/third.svg' : '/third-white.svg'}
                        alt="first"
                        width="70px"
                      />
                      <Typography variant="h6">
                        <b>₹ 5,000</b>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box className={classes.margin}>
                  <Typography variant="subtitle1" align="center">
                    *Merchandise for City Winners!
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid container item xs={12} md={8} justify="flex-end" alignItems="flex-end">
              <VectorImg />
            </Grid>
          </Grid>
        </div>
      </>
    );
}

export default Landing;