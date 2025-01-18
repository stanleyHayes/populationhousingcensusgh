import {
    Box,
    Button,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";
import {CallOutlined, ErrorOutline, MailOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

const NewDwellingForm = ({onClose}) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            enumerator_code: '',
            supervisor_code: '',
            phone: '',
            date: '',
        },
        onSubmit: (values) => {
            dispatch(HOUSEHOLD_ACTIONS.createHousehold({...values}));
            onClose();
        },
        validationSchema: Yup.object().shape({
            first_name: Yup.string().required("First name is required"),
            last_name: Yup.string().required("Last name is required"),
            enumerator_code: Yup.string().required("Enumerator code is required"),
            supervisor_code: Yup.string().required("Supervisor code is required"),
            phone: Yup.string().required("Enumerator phone is required"),
            date: Yup.string().required("Hiring date is required"),
        })
    });

    return (
        <Box>
            <Box sx={{mb: 4}}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid sx={{mb: 4}} container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Box>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="first_name">Enumerator First Name</InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter enumerator first name"
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        label="Enumerator First Name"
                                        required={true}
                                        value={formik.values.first_name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.first_name && formik.errors.first_name}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <MailOutlined/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.first_name && formik.errors.first_name ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.first_name && formik.errors.first_name && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.first_name}
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
                                        htmlFor="last_name">Enumerator Last Name</InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter enumerator last name"
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        label="Enumerator Last Name"
                                        required={true}
                                        value={formik.values.last_name}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.last_name && formik.errors.last_name}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <MailOutlined/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.last_name && formik.errors.last_name ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.last_name && formik.errors.last_name && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.last_name}
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
                                        htmlFor="phone">Phone</InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter phone"
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        label="Phone"
                                        required={true}
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
                                        htmlFor="enumerator_code">Enumerator code</InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter enumerator code"
                                        type="text"
                                        name="enumerator_code"
                                        id="enumerator_code"
                                        label="Enumerator code"
                                        required={true}
                                        value={formik.values.enumerator_code}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.enumerator_code && formik.errors.enumerator_code}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <MailOutlined/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.enumerator_code && formik.errors.enumerator_code ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.enumerator_code && formik.errors.enumerator_code && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.enumerator_code}
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
                                        htmlFor="supervisor_code">Supervisor code</InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter supervisor code"
                                        type="text"
                                        name="supervisor_code"
                                        id="supervisor_code"
                                        label="Supervisor code"
                                        required={true}
                                        value={formik.values.supervisor_code}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.supervisor_code && formik.errors.supervisor_code}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <MailOutlined/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.supervisor_code && formik.errors.supervisor_code ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.supervisor_code && formik.errors.supervisor_code && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.supervisor_code}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Box>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel sx={{color: "text.secondary"}} htmlFor="date">
                                        Hiring Date
                                    </InputLabel>
                                    <DatePicker
                                        label="Hiring Date"
                                        required={true}
                                        fullWidth={true}
                                        value={formik.values.date ? dayjs(formik.values.date, 'DD/MM/YYYY') : null}
                                        onChange={(date) => {
                                            if (date) {
                                                formik.setFieldValue('date', date);
                                            }
                                        }}
                                        name="date"
                                    />
                                    {formik.touched.date && formik.errors.date && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.date}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 6}}>
                            <Button
                                onClick={onClose}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="outlined"
                                color="secondary"
                                sx={{textTransform: "none"}}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid size={{xs: 6}}>
                            <Button
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                color="primary"
                                sx={{textTransform: "none"}}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    )
}

NewDwellingForm.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default NewDwellingForm;