import React from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import { Box, Typography, ListItem, ListItemText, TextField, Paper, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, RadioGroup, Radio, Checkbox, Button, ListItemIcon, Link, useMediaQuery, useTheme, ListItemSecondaryAction, List, Snackbar, Grid } from "@material-ui/core";
import { Form, FormikFormProps, Formik, Field, FieldProps } from "formik";
import { useRouter } from "next/dist/client/router";
import Autocomplete from '@material-ui/lab/Autocomplete';

import { Details } from "./_app";

import * as yup from "yup"
import { cities } from "../components/cities";





export const initialValues = {
    name: "",
    email: "",
    college: "",
    phone: "", year: 1,
    dataStructures: false,
    dataScience: false,
    workshopA: false,
    workshopB: false,


}

const validationSchema = yup.object({
    name: yup
        .string()

        .required("Name cannot be empty"),
    college: yup
        .string()

        .required("College cannot be empty"),
    email: yup
        .string()
        .email("Provide a valid Email ID")
        .required("Email cannot be empty"),
    phone: yup
        .string()

        .required("Phone cannot be empty"),

});




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // flexGrow: 1,
            backgroundColor: "#3997F5",
            margin: "0px",
            padding:"0px",
            boxSizing:"border-box",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 320,
        },
        fullList: {
            width: 'auto',
        },
        sublist: {
            marginLeft: theme.spacing(3)
        },
        paper: {
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: theme.spacing(4),
            padding: theme.spacing(2),
            [theme.breakpoints.down('md')]: {
                width: "98%",
            }
        },
        textField: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        },
        divider: {
            marginTop: theme.spacing(4)
        },
        table: {
            marginLeft: "auto",
            marginRight: "auto",
            width: "90%",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),


        },
        button: {
            margin: theme.spacing(2)
        },
        buttonGroup: {
            // float: "right",
            width: "300px",
            marginLeft: "auto",

            //marginTop: theme.spacing(4)
        },
        heading: {
            marginTop: theme.spacing(12),
            marginBottom: theme.spacing(4),
            paddingTop: "40px"
        },
        center: {
            width: "fit-content",
            margin: "auto"
        },
        promoB: {
            [theme.breakpoints.down('md')]: {
                height: "200px"
            }
        },
        promoButton: {
            [theme.breakpoints.down('md')]: {
                marginTop: "15px",
                marginLeft: theme.spacing(2),
            }
        },
        text: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('md')]: {
                marginTop: "165px",
                marginLeft: theme.spacing(2),

            }
        }
    }),
);


interface RegisterPageProps {
    payment: (a: Details) => void

}


type count = {
    dataScienceCount: number,
    dataStructureCount: number,
    workshopA: number,
    workshopB: number
}

const Register: React.FC<RegisterPageProps> = ({ payment }) => {

    const classes = useStyles()
    const router = useRouter()
    const [loading, setLoading] = React.useState<boolean>(false)
    const [count, setCount] = React.useState<count>({ dataScienceCount: 0, dataStructureCount: 0, workshopA: 0, workshopB: 0 })
    const [terms, setTerms] = React.useState<boolean>(false)
    const [promo, setPromo] = React.useState<string>("")
    const [isPromoValid, setIsPromoValid] = React.useState(false)
    const [message, setMessage] = React.useState(false)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));














    return <div className={classes.root} id="reg">



        <Box className={classes.root}>
            <ListItem className={classes.heading}>
                <ListItemText primary={"Registration"} primaryTypographyProps={{ variant: "h4", align: "center" }}
                    secondary={"Register now to experience the fun-packed workshop planned ahead for you by ISTE!  "}
                    secondaryTypographyProps={{ align: "center" }}
                />
            </ListItem>



            <Formik
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
                initialValues={initialValues}>

                {({ values, setValues }) =>

                    (<Form aria-label="Sign up form" id="sign-up-form">

                        <Box>
                            <Paper elevation={4} className={classes.paper}>
                                <ListItem>
                                    <ListItemText primary={"Personal Details"} primaryTypographyProps={{ variant: "h6" }}
                                        secondary={"Please fill these details carefully, you will be informed about details of workshops through these details"}
                                    />
                                </ListItem>
                                <ListItem>

                                    <Field name="name">
                                        {({
                                            field,
                                            meta,
                                        }: FieldProps<typeof initialValues["name"]>) => (
                                                <TextField
                                                    fullWidth
                                                    id="name-input"
                                                    label="Name"
                                                    required
                                                    {...field}
                                                    error={!!(meta.touched && meta.error)}
                                                    helperText={meta.touched ? meta.error : ""}
                                                    variant="outlined"
                                                    size="small"
                                                    className={classes.textField}
                                                />
                                            )}
                                    </Field>
                                </ListItem>
                                <ListItem>
                                    <Field name="email">
                                        {({
                                            field,
                                            meta,
                                        }: FieldProps<typeof initialValues["email"]>) => (
                                                <TextField
                                                    fullWidth
                                                    id="name-input"
                                                    label="Email"
                                                    required
                                                    {...field}
                                                    error={!!(meta.touched && meta.error)}
                                                    helperText={meta.touched ? meta.error : ""}
                                                    variant="outlined"
                                                    size="small"
                                                    className={classes.textField}
                                                />
                                            )}
                                    </Field>
                                </ListItem>
                                <ListItem>

                                    <Field name="college">
                                        {({
                                            field,
                                            meta,
                                        }: FieldProps<typeof initialValues["college"]>) => (
                                                <TextField
                                                    fullWidth
                                                    id="name-input"
                                                    label="College"
                                                    required
                                                    {...field}
                                                    error={!!(meta.touched && meta.error)}
                                                    helperText={meta.touched ? meta.error : ""}
                                                    variant="outlined"
                                                    size="small"
                                                    className={classes.textField}
                                                />
                                            )}
                                    </Field>
                                </ListItem>
                                <ListItem>

                                    <Field name="phone">
                                        {({
                                            field,
                                            meta,
                                        }: FieldProps<typeof initialValues["phone"]>) => (
                                                <TextField
                                                    fullWidth
                                                    id="name-input"
                                                    label="Mobile no."
                                                    required
                                                    {...field}
                                                    error={!!(meta.touched && meta.error)}
                                                    helperText={meta.touched ? meta.error : ""}
                                                    variant="outlined"
                                                    size="small"
                                                    className={classes.textField}
                                                />
                                            )}
                                    </Field>

                                </ListItem>
                                <ListItem>
                                    <Field name="state">
                                        {({
                                            field,
                                            meta,
                                        }: FieldProps<typeof initialValues["phone"]>) => (
                                                // <TextField
                                                //     fullWidth
                                                //     id="name-input"
                                                //     label="Mobile no."
                                                //     required
                                                //     {...field}
                                                //     error={!!(meta.touched && meta.error)}
                                                //     helperText={meta.touched ? meta.error : ""}
                                                //     variant="outlined"
                                                //     size="small"
                                                //     className={classes.textField}
                                                // />
                                                <Autocomplete
                                                    id="combo-box-demo"
                                                    options={cities}
                                                    getOptionLabel={(option) => `${option.name} , ${option.state}`}
                                                    style={{ width: "98%" }}
                                                    renderInput={(params) =>
                                                        <TextField
                                                            {...params}
                                                            fullWidth
                                                            id="name-input"
                                                            label="City"
                                                            required
                                                            {...field}
                                                            error={!!(meta.touched && meta.error)}
                                                            helperText={meta.touched ? meta.error : ""}
                                                            variant="outlined"
                                                            size="small"
                                                            className={classes.textField}
                                                        />
                                                        // <TextField {...params} label="Combo box" variant="outlined" />
                                                    }
                                                />
                                            )}
                                    </Field>

                                </ListItem>


                                {matches && <Typography variant="body2" color={"textSecondary"} align="center">{"Scroll to right ->"} </Typography>}
                                <Box className={classes.center}>
                                    <ListItem >
                                        <ListItemIcon>
                                            <Checkbox color="primary"
                                                checked={terms}
                                                onChange={() => { setTerms(!terms) }}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={<>I agree to the  <Link onClick={() => router.push("terms")}>
                                            Terms & Conditions
  </Link> of ISTE-SC-MANIT </>} />
                                    </ListItem>
                                </Box>

                                <Box className={classes.buttonGroup}>

                                    <Button type="submit" color="primary" variant="contained" className={classes.button} >Proceed</Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Form>)}
            </Formik>
        </Box>

    </div >
}

export default Register