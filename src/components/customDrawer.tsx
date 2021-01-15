import React, { Dispatch, SetStateAction } from "react";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Avatar,
  Box,
  Typography,
  Fade,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import clsx from "clsx";
import ThemeToggleButton from "../components/theme/modeToggle";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GamepadIcon from "@material-ui/icons/Gamepad";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useRouter } from "next/dist/client/router";
import cookie from "js-cookie"
import VerticalStepper from "./VerticalStepper";

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  paper: { justifyContent: "space-between", overflow: "hidden" },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: 0,
  },
  mobileMenu: {
    position: "fixed",
    top: theme.spacing(1),
    left: theme.spacing(2),
    zIndex: theme.zIndex.drawer,
  },
  upperHalf: {},
  lowerHalf: {},
}));




interface DrawerProps {
  name: string;
  username: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
}

const CustomDrawer: React.FC<DrawerProps> = ({
  name,
  username,
  open,
  setOpen,
  setSuccessMessage,
  setErrorMessage,
}) => {
  // const [open, setOpen] = React.useState(false);
  const classes = useStyles({ open });
  const router = useRouter();
  const icons = [
    {
      label: 'Contest',
      icon: <GamepadIcon />,
      onClick: () => {
        router.push('/protectedPages/dashboard');
      },
    },
    {
      label: 'Dashboard',
      icon: <DashboardIcon />,
      onClick: () => {
        router.push('/protectedPages/dashboard');
      },
    },
    {
      label: 'Update Info',
      icon: <InfoIcon />,
      onClick: () => {
        router.push('/protectedPages/updateProfile');
      },
    },
    {
      label: 'Leader-Board',
      icon: <ImportantDevicesIcon />,
      onClick: () => {
        router.push('/protectedPages/dashboard');
      },
    },
    {
      label: 'Log Out',
      icon: <ExitToAppIcon />,
      onClick: () => {
        setSuccessMessage('Logged out');
        cookie.remove('authorization');
        router.push('/');
      },
    },
  ];

  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div>
          <Box
            paddingTop={2}
            paddingBottom={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Avatar>{name[0].toUpperCase()}</Avatar>
            <Fade in={open}>
              <Typography variant="subtitle2">{name[0].toUpperCase()+name.substring(1)}</Typography>
            </Fade>
            <Fade in={open}>
              <Typography variant="subtitle2">{username}</Typography>
            </Fade>
          </Box>
          <Divider />
          <Box>
            <VerticalStepper />
          </Box>
          <Divider />
        </div>
        <div>
          <Fade in={open}>
            <Box paddingBottom={2} display="flex" alignItems="center" justifyContent="center">
              <ThemeToggleButton />
            </Box>
          </Fade>
          <Divider />
          <Box height={50} display="flex" alignItems="center" justifyContent="center">
            <IconButton onClick={() => setOpen((o) => !o)}>
              {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        </div>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
