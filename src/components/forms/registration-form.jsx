import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    FormControl, Grid2 as Grid,
    InputAdornment,
    InputLabel,
    LinearProgress,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {
    CallOutlined,
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
            confirmPassword: "",
            phone: "",
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
            password: yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters'),
            confirmPassword: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            phone: yup.string().matches(
                /^[0-9]{10}$/,
                'Phone number must be exactly 10 digits'
            ).required("Password is required"),
        })
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const {error, loading} = useSelector(selectAuthentication);

    return (
        <Box>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: "100%"}}>
                        <CardMedia component="img" sx={{width: 150}} src={logo} alt="PHC logo"/>
                    </Stack>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{color: "text.primary"}}>
                        Welcome to{" "}
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
                            <Typography
                                align="center"
                                variant="body2"
                                sx={{color: "text.secondary", mb: 4}}>
                                Setup your account
                            </Typography>
                            <Stack direction="column" spacing={3}>
                                <Grid container={true} spacing={2}>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel sx={{color: "text.secondary"}}
                                                            htmlFor="email">Email</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter email"
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    label="Email"
                                                    required={true}
                                                    disabled={true}
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
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel sx={{color: "text.secondary"}}
                                                            htmlFor="phone">Phone</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter phone"
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    label="Phone"
                                                    required={true}
                                                    disabled={true}
                                                    value={formik.values.phone}
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.phone && formik.errors.phone}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <CallOutlined/>
                                                        </InputAdornment>
                                                    }
                                                    endAdornment={
                                                        formik.touched.phone && formik.errors.phone ? (
                                                            <ErrorOutline/>
                                                        ) : null
                                                    }
                                                />
                                                {formik.touched.phone && formik.errors.phone && (
                                                    <Typography variant="body2" color="error">
                                                        {formik.errors.phone}
                                                    </Typography>
                                                )}
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
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
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Box>
                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel
                                                    sx={{color: "text.secondary"}}
                                                    htmlFor="password">
                                                    Confirm Password
                                                </InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter password"
                                                    type={isPasswordVisible ? "text" : "password"}
                                                    name="confirm_password"
                                                    id="confirm_password"
                                                    label="Confirm Password"
                                                    required={true}
                                                    value={formik.values.confirmPassword}
                                                    onBlur={formik.handleBlur}
                                                    onChange={formik.handleChange}
                                                    error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                                    startAdornment={
                                                        <InputAdornment position="start">
                                                            <LockOutlined/>
                                                        </InputAdornment>
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <Stack direction="row" spacing={2} alignItems="center">
                                                                {
                                                                    formik.touched.confirmPassword && formik.errors.confirmPassword ? (
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
                                                {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                                    <Typography variant="body2" color="error">
                                                        {formik.errors.confirmPassword}
                                                    </Typography>
                                                )}
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                </Grid>

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
                                                {loading ? "Registering" : "Register"}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box>
                                    <Typography align="center" variant="body2">Already have an account?{" "}
                                        <Link style={{textDecoration: "none"}} to="/auth/login">
                                            Login
                                        </Link>
                                    </Typography>
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