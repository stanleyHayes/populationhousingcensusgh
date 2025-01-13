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
import {ErrorOutline, LockOutlined, VisibilityOffOutlined, VisibilityOutlined} from "@mui/icons-material";
import {useFormik} from "formik";
import * as yup from "yup";
import {useState} from "react";
import {useNavigate} from "react-router";
import logo from "./../../assets/images/logo/logo.png";
import {useSelector} from "react-redux";
import {selectAuthentication} from "../../redux/features/authentication/authentication-slice.js";

const ResetPasswordForm = () => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
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
            password: yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters'),
            confirmPassword: yup.string()
                .oneOf([yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required'),
        })
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {error, loading} = useSelector(selectAuthentication);

    return (
        <Box>
            <Stack direction="column" spacing={2}>
                <Box>
                    <Stack direction="row" alignItems="center" justifyContent="center" sx={{width: "100%"}}>
                        <CardMedia component="img" sx={{width: 150}} src={logo} alt="PCH logo"/>
                    </Stack>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{color: "text.primary"}}>
                        Reset{" "}
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
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{color: "text.secondary"}}>
                        Make sure your password is at least 8 characters long.
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{color: "text.secondary", mb: 4}}>
                        Use a combination of uppercase and lowercase letters, numbers, and special
                        characters.
                    </Typography>
                    <Box sx={{mb: 4}}>
                        <Card variant="contained" elevation={1}>
                            {loading && <LinearProgress variant="query" color="secondary"/>}
                            <CardContent>
                                {error && (
                                    <Alert sx={{mb: 4}} variant="standard" severity="error">
                                        <AlertTitle>{error}</AlertTitle>
                                    </Alert>
                                )}
                                <Stack direction="column" spacing={3}>
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
                                        <Grid container={true} justifyContent="center">
                                            <Grid size={{xs: 12, md: "auto"}}>
                                                <Button
                                                    fullWidth={true}
                                                    disableElevation={true}
                                                    size="large"
                                                    variant="contained"
                                                    type="submit"
                                                    sx={{textTransform: "none"}}>
                                                    {loading ? "Resetting..." : "Reset Password"}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Box>
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{color: "text.secondary"}}>
                        By resetting your password, you&#39;ll regain access to your account.
                    </Typography>
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{color: "text.secondary"}}>
                        If you didn’t request this password reset, please contact our support team immediately.
                    </Typography>
                </form>
            </Stack>
        </Box>
    )
}
export default ResetPasswordForm;