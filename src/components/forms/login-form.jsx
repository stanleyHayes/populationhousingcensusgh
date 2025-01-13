import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent, CardMedia,
    FormControl, Grid2 as Grid,
    InputAdornment, InputLabel, LinearProgress,
    OutlinedInput, Stack,
    Typography
} from "@mui/material";
import {
    ErrorOutline,
    LockOutlined,
    MailOutlined,
    VisibilityOffOutlined,
    VisibilityOutlined
} from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useState} from "react";
import {Link, useNavigate} from "react-router";
import logo from "./../../assets/images/logo/logo.png";
import {useSelector} from "react-redux";
import {selectAuthentication} from "../../redux/features/authentication/authentication-slice.js";

const LoginForm = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
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
            password: yup.string().required("Password is required"),
        })
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {error, loading} = useSelector(selectAuthentication);

    return (
        <Box>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: "100%"}}>
                        <CardMedia component="img" sx={{width: 150, objectFit: "cover"}} src={logo} alt="PCH logo"/>
                    </Stack>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{color: "text.primary"}}>
                        Welcome to the{" "}
                        <Typography
                            align="center"
                            variant="h6"
                            display="inline"
                            sx={{
                                color: "primary.main",
                                fontFamily: "Playwrite HR Lijeva"
                            }}>
                            Household & Population Census
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
                            <Stack direction="column" spacing={2}>
                                <Typography
                                    align="center"
                                    variant="body2"
                                    sx={{color: "text.secondary"}}>
                                    Login with your email
                                </Typography>

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
                                    <FormControl variant="outlined" fullWidth={true}>
                                        <InputLabel
                                            sx={{color: "text.secondary"}}
                                            htmlFor="password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            placeholder="Enter password"
                                            type={isPasswordVisible ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            label="Password"
                                            required={true}
                                            value={formik.values.password}
                                            onBlur={formik.handleBlur}
                                            onChange={formik.handleChange}
                                            error={formik.touched.password && formik.errors.password}
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <LockOutlined/>
                                                </InputAdornment>
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <Stack direction="row" spacing={2} alignItems="center">
                                                        {
                                                            formik.touched.password && formik.errors.password ? (
                                                                <ErrorOutline sx={{color: "colors.red"}}/>
                                                            ) : null
                                                        }
                                                        {isPasswordVisible ?
                                                            <VisibilityOffOutlined
                                                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                                            /> : <VisibilityOutlined
                                                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                                            />
                                                        }
                                                    </Stack>
                                                </InputAdornment>

                                            }
                                        />
                                        {formik.touched.password && formik.errors.password && (
                                            <Typography variant="body2" color="error">
                                                {formik.errors.password}
                                            </Typography>
                                        )}
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Stack justifyContent="end" direction="row" spacing={2} alignItems="center">
                                        <Link style={{textDecoration: "none"}} to="/auth/forgot-password">
                                            <Typography variant="body2" display="inline">Forgot Password?</Typography>
                                        </Link>
                                    </Stack>
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
                                                {loading ? "Logging In..." : "Login"}
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
export default LoginForm;