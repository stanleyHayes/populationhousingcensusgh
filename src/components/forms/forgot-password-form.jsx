import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    FormControl,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    Typography,
    Grid2 as Grid
} from "@mui/material";
import {ErrorOutline, MailOutlined} from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router";
import logo from "./../../assets/images/logo/logo.png";
import {useSelector} from "react-redux";
import {selectAuthentication} from "../../redux/features/authentication/authentication-slice.js";

const ForgotPasswordForm = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            navigate('/');
            console.log(values);
        },
        onReset: values => {
            navigate('/');
            console.log(values);
        },
        validateOnBlur: true,
        validateOnChange: true,
        validationSchema: yup.object().shape({
            email: yup.string().required("Email is required"),
        })
    });

    const {error, loading} = useSelector(selectAuthentication);

    return (
        <Box>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: "100%"}}>
                        <CardMedia component="img" sx={{width: 150, objectFit: "cover"}} src={logo} alt="PHC logo"/>
                    </Stack>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{color: "text.primary"}}>
                        Forgot{" "}
                        <Typography
                            align="center"
                            variant="h6"
                            display="inline"
                            sx={{
                                color: "primary.main",
                                fontFamily: "Playwrite HR Lijeva"
                            }}>
                            Password
                        </Typography>
                    </Typography>
                </Box>
                <form onSubmit={formik.handleSubmit}>
                    <Card variant="contained" elevation={1}>
                        {loading && <LinearProgress variant="query" color="secondary"/>}
                        <CardContent>
                            {error && (
                                <Alert sx={{mb: 4}} variant="standard" severity="error">
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}
                            <Typography
                                align="center"
                                variant="body2"
                                sx={{color: "text.secondary", mb: 4}}>
                                To reset your password, please enter the email address associated with your account.
                            </Typography>

                            <Stack direction="column" spacing={2}>
                                <Box>
                                    <FormControl variant="outlined" fullWidth={true}>
                                        <InputLabel sx={{color: "text.secondary"}} htmlFor="email">Email</InputLabel>
                                        <OutlinedInput
                                            placeholder="Enter email"
                                            type="email"
                                            name="email"
                                            id="email"
                                            label="Email"
                                            required={true}
                                            value={formik.values.email}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && formik.errors.email}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <MailOutlined/>
                                                </InputAdornment>
                                            }
                                            endAdornment={
                                                formik.touched.email && formik.errors.email ? (
                                                    <ErrorOutline/>
                                                ) : null
                                            }
                                        />
                                        {formik.touched.email && formik.errors.email && (
                                            <Typography variant="body2" color="error">
                                                {formik.errors.email}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Box>

                                <Box>
                                    <Grid container={true} justifyContent="center">
                                        <Grid size={{xs: 12, md: "auto"}}>
                                            <Button
                                                fullWidth={true}
                                                disableElevation={true}
                                                size="large"
                                                variant="contained"
                                                type="submit"
                                                sx={{textTransform: "none"}}>
                                                {loading ? "Submitting..." : "Reset Password"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </form>
            </Stack>
        </Box>
    )
}
export default ForgotPasswordForm;