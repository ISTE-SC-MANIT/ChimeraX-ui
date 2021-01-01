import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {

    CssBaseline,
    LinearProgress,
    Snackbar,
    Typography,
    Paper,

} from "@material-ui/core";
import "regenerator-runtime/runtime";
import { ThemeProvider } from "@material-ui/core/styles";
import { useRouter, Router } from "next/router";

// import LoadingScreen from "../components/loading";
import { makeStyles, Theme } from "@material-ui/core/styles";
import query from "../components/relay/queries/AppViewerQuery"

import blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";
import { Environment, QueryRenderer } from "react-relay";
import { makeEnvironment } from "../components/relay/environment";
import { AppViewerQuery, AppViewerQueryResponse } from "../__generated__/AppViewerQuery.graphql";


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

export type Details = {
    orderId: string,
    dataStructure: boolean | null,
    dataScience: boolean | null,
    workshopA: boolean | null,
    workshopB: boolean | null,
    name: string | null,
    college: string | null,
    email: string | null,
    phone: string | null,
    success: boolean,
    discountPercentage: string | null,
    amount: string | null,
    discountValue: string | null
} | null

export interface ComponentProps {
    environment:Environment
    viewer:AppViewerQueryResponse["viewer"]
    refetch:()=>void
}


const MyApp = ({
    Component,
    pageProps
}: {
    Component: any;
    pageProps: any;
}) => {

    const router = useRouter();
    const classes = useStyles();
    const paths = router.route.split("/");
    const first = paths[1];
    
    const isProtectedRoute = React.useMemo(() => {
        return first === "dashboard" 
    }, [first, ]);


    const environment: Environment | null = React.useMemo(() => {
        if (first === "dashboard" )
            return makeEnvironment();
        return null;
    }, [first, ]);

    /* Page loading animation */
    const [routeChange, setRouteChange] = React.useState<boolean>(false);
    const [details, setDetails] = React.useState<Details>(null);
    Router.events.on("routeChangeStart", () => {
        setRouteChange(true);
    });
    Router.events.on("routeChangeComplete", () => setRouteChange(false));
    Router.events.on("routeChangeError", () => setRouteChange(false));
    const [loading, setLoading] = React.useState<boolean>(false);

    const payment = (a: Details) => setDetails(a)



    const [currentTheme, setCurrentTheme] = React.useState(() =>
        createMuiTheme({

            palette: {
                primary: {
                    main: "#3997F5",
                },

                type: "light",
            },
        })
    );

    /* Error reporting */

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />

            {routeChange && (
                <LinearProgress
                    color="secondary"
                    className={classes.linearLoading}
                />
            )}



            {/* <Component payment={payment} details={details} {...pageProps} /> */}
            {!isProtectedRoute ? <Component {...pageProps} /> :
                    <QueryRenderer<AppViewerQuery>
                        environment={environment}
                        query={query}
                        variables={{}}
                        render={
                            ({ error, props, retry }: { error: Error, props: AppViewerQueryResponse, retry: () => void }) => {
                                if (error) {
                                    // showNotification("Please login to Continue", "error")
                                    console.log(error)
                                    return null
                                } else if (props) {
                                    return <Component {...pageProps} viewer={props.viewer} refetch={retry} environment={environment} />
                                } else { return <h1>Loading</h1> }
                            }} />
                }


        </ThemeProvider>
    );
};

export default MyApp;
