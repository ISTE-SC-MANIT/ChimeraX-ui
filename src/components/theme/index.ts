// import { createMuiTheme } from '@material-ui/core';
// import { blue } from '@material-ui/core/colors';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: blue[500],
//     },
//     type: 'dark',
//   },
// });

// export default theme;

import {
  ThemeOptions,
  SimplePaletteColorOptions,
  createMuiTheme,
  Theme,
} from "@material-ui/core/styles";
import { blue, orange } from "@material-ui/core/colors";
import React from "react";
export const themeProps: ThemeOptions["props"] = {
  MuiTextField: {
    variant: "outlined",
    margin: "dense",
  },
};

export const defaultPrimary = blue[500];
export const defaultSecondary = orange[500];
export const defaultMode = "light";
export interface ThemeContext {
  mode: ThemeOptions["palette"]["type"];
  primary: SimplePaletteColorOptions["main"];
  secondary: SimplePaletteColorOptions["main"];
  toggleMode: () => void;
  updateColors: (
    primary?: SimplePaletteColorOptions["main"],
    secondary?: SimplePaletteColorOptions["main"]
  ) => void;
}

export const themeContext = React.createContext<ThemeContext>({
  mode: "light",
  primary: blue[500],
  secondary: blue[500],
  toggleMode: () => {
    /* Do nothing */
  },
  updateColors: () => {
    /* Do nothing */
  },
});

export function toggleMode(
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
): void {
  setTheme((oldTheme) => {
    return createMuiTheme({
      props: themeProps,
      palette: {
        primary: {
          main: oldTheme.palette.primary.main,
        },
        secondary: {
          main: oldTheme.palette.primary.main,
        },
        type: oldTheme.palette.type === "dark" ? "light" : "dark",
      },
    });
  });
  return;
}
