import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {

    CssBaseline,
    LinearProgress,
    Snackbar,
    Typography,
    Paper,

} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import "regenerator-runtime/runtime";
import { ThemeProvider } from "@material-ui/core/styles";
import { useRouter, Router } from "next/router";

import LoadingScreen from "../components/loadingScreen";
import { makeStyles, Theme } from "@material-ui/core/styles";
import query from "../components/relay/queries/AppViewerQuery"

import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import { Environment, QueryRenderer } from "react-relay";
import { makeEnvironment } from "../components/relay/environment";
import { AppViewerQuery, AppViewerQueryResponse } from "../__generated__/AppViewerQuery.graphql";
import { themeProps, defaultPrimary, defaultSecondary, defaultMode, themeContext, toggleMode } from "../components/theme";


const useStyles = makeStyles((theme: Theme) => ({
    linearLoading: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.modal + 1
    },
    error: {
        background: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        padding: theme.spacing(1, 3)
    }
}));



export interface ComponentProps {
    environment: Environment
    viewer: AppViewerQueryResponse["viewer"]
    refetch: () => void,
    setSuccessMessage: (message: string) => void,
    setErrorMessage: (message: string) => void
}


function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyApp = ({
    Component,
    pageProps
}: {
    Component: any;
    pageProps: any;
}) => {


    const [success, setSuccess] = React.useState(false)
    const [errors, setError] = React.useState(false)
    const [successMsg, setSuccessMsg] = React.useState("")
    const [errorMsg, setErrorMsg] = React.useState("")
    const router = useRouter();
    const classes = useStyles();
    const paths = router.route.split("/");
    const first = paths[1];

    const isProtectedRoute = React.useMemo(() => {
        return first === "dashboard"
    }, [first,]);


    const environment: Environment | null = React.useMemo(() => {
        if (first === "dashboard")
            return makeEnvironment();
        return null;
    }, [first,]);

    /* Page loading animation */
    const [routeChange, setRouteChange] = React.useState<boolean>(false);

    Router.events.on("routeChangeStart", () => {
        setRouteChange(true);
    });
    Router.events.on("routeChangeComplete", () => setRouteChange(false));
    Router.events.on("routeChangeError", () => setRouteChange(false));
    const [loading, setLoading] = React.useState<boolean>(false);

    const [currentTheme, setCurrentTheme] = React.useState(() =>
        createMuiTheme({
            typography: {
                fontFamily: [
                    'Nunito',
                    'Montserrat',
                    'Roboto',
                    'sans-serif',
                    'Arial',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
            props: themeProps,
            palette: {
                primary: {
                    main: defaultPrimary,
                },
                secondary: {
                    main: defaultSecondary,
                },
                type: defaultMode,
            },
        })
    );

    const handleClose = (event?: React.SyntheticEvent,) => {
        setSuccess(false);
        setError(false)
    };

    const setSuccessMessage = (msg: string) => {
        setSuccessMsg(msg)
        setSuccess(true)
    }

    const setErrorMessage = (msg: string) => {
        setErrorMsg(msg)
        setError(true)
    }

    /* Error reporting */

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <themeContext.Provider
                value={{
                    mode: currentTheme.palette.type,
                    primary: currentTheme.palette.primary.main,
                    secondary: currentTheme.palette.secondary.main,
                    toggleMode: () => toggleMode(setCurrentTheme),
                    updateColors: () => {
                        /* Do nothing */
                    },
                }}>

                {routeChange && (
                    <LinearProgress
                        color="secondary"
                        className={classes.linearLoading}
                    />
                )}

                {!isProtectedRoute ? <><Component {...pageProps} setSuccessMessage={setSuccessMessage}
                    setErrorMessage={setErrorMessage} />
                    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            {successMsg}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={errors} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            {errorMsg}
                        </Alert>
                    </Snackbar>

                </> :
                    <QueryRenderer<AppViewerQuery>
                        environment={environment}
                        query={query}
                        variables={{}}
                        render={
                            ({ error, props, retry }: { error: Error, props: AppViewerQueryResponse, retry: () => void }) => {
                                if (error) {
                                    setErrorMessage("Please log in to continue")
                                    router.push("/")
                                    return null
                                } else if (props) {
                                    return <><Component {...pageProps}
                                        viewer={props.viewer}
                                        refetch={retry}
                                        environment={environment}
                                        setSuccessMessage={setSuccessMessage}
                                        setErrorMessage={setErrorMessage}
                                    />
                                        <Snackbar open={success} autoHideDuration={3000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="success">
                                                {successMsg}
                                            </Alert>
                                        </Snackbar>
                                        <Snackbar open={errors} autoHideDuration={3000} onClose={handleClose}>
                                            <Alert onClose={handleClose} severity="error">
                                                {errorMsg}
                                            </Alert>
                                        </Snackbar>
                                    </>
                                } else { return <LoadingScreen loading /> }
                            }} />
                }

            </themeContext.Provider>
        </ThemeProvider>
    );
};

export default MyApp;
