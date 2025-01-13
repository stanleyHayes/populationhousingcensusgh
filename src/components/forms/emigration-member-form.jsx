import {
    Box,
    Button,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectRelationshipCodes} from "../../redux/features/relationship-codes/relationship-codes-slice.js";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import PropTypes from "prop-types";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

const EmigrationMemberForm = ({onClose, handleMemberAdd}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            relationship_to_head: '',
            relationship_to_head_code: '',
            sex: '',
            status: '',
            age: '',
            destination: '',
            destination_code: '',
            departure_year: '',
            activity_abroad: '',
            activity_abroad_code: '',
        },
        onSubmit: (values, actions) => {
            console.log(values);
            handleMemberAdd(values);
            onClose();
            actions.resetForm();
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Person name required'),
            age: Yup.number().required('Field required'),
            departure_year: Yup.number().required('Field required'),
            destination: Yup.string().required('Field required'),
            relationship_to_head: Yup.string().required('Field required'),
            relationship_to_head_code: Yup.string().required('Field required'),
            sex: Yup.string().oneOf(['male', 'female'], 'Must be one of male or female')
                .required('Person name required'),
            activity_abroad: Yup.string().required('Field required'),
        })
    });

    console.log(formik.values);

    const {codes} = useSelector(selectRelationshipCodes);
    const {regions} = useSelector(selectRegions);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 4}} container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="name">Full name</InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="text"
                                name="name"
                                id="name"
                                label="Name"
                                required={true}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.name && formik.errors.name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.name && formik.errors.name ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.name && formik.errors.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="relationship_to_head">
                                Relationship to head
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.relationship_to_head}
                                name="relationship_to_head"
                                label="Relationship to head"
                                variant="outlined">
                                {codes.map(code => {
                                    return (
                                        <MenuItem onClick={() => {
                                            formik.setFieldValue('relationship_to_head', code.name);
                                            formik.setFieldValue('relationship_to_head_code', code.code);
                                        }} key={code.code} value={code.name}>{code.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.name && formik.errors.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="destination">
                                Destination
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.destination}
                                name="destination"
                                label="Destination"
                                variant="outlined">
                                {regions.map(region => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('destination', region.name);
                                                formik.setFieldValue('destination_code', region.code);
                                            }}
                                            key={region.code}
                                            value={region.name}>{region.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.destination && formik.errors.destination && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.destination}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="activity_abroad">
                                Activity Abroad
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.activity_abroad}
                                label="Activity Abroad"
                                name="activity_abroad"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('activity_abroad', 'Employed');
                                        formik.setFieldValue('activity_abroad_code', '1');
                                    }} value="Employed">Employed</MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('activity_abroad', 'Unemployed');
                                        formik.setFieldValue('activity_abroad_code', '2');
                                    }} value="Unemployed">Unemployed</MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('activity_abroad', 'Student');
                                        formik.setFieldValue('activity_abroad_code', '3');
                                    }} value="Student">Student</MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('activity_abroad', 'Other (Specify)');
                                        formik.setFieldValue('activity_abroad_code', '4');
                                    }} value="Other (Specify)">Other (Specify)</MenuItem>
                            </Select>
                            {formik.touched.activity_abroad && formik.errors.activity_abroad && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.activity_abroad}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="sex">
                                Sex
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.sex}
                                name="sex"
                                label="Sex"
                                variant="outlined">
                                <MenuItem onClick={() => formik.setFieldValue('sex', 'male')} value="male">Male</MenuItem>
                                <MenuItem onClick={() => formik.setFieldValue('sex', 'female')} value="female">Female</MenuItem>
                            </Select>
                            {formik.touched.sex && formik.errors.sex && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sex}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="departure_year">
                                Departure Year
                            </InputLabel>
                            <DatePicker
                                label="Departure Year"
                                required={true}
                                fullWidth={true}
                                views={['year']}
                                value={formik.values.departure_year ? dayjs(formik.values.departure_year, 'YYYY') : null}
                                onChange={(date) => {
                                    if (date) {
                                        formik.setFieldValue('departure_year', date.year());
                                    }
                                }}
                                name="departure_year"
                            />
                            {formik.touched.departure_year && formik.errors.departure_year && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.departure_year}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="age">
                                Age
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Age"
                                type="number"
                                name="age"
                                id="age"
                                label="Age"
                                required={true}
                                value={formik.values.age}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.age && formik.errors.age}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.age && formik.errors.age ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.age && formik.errors.age && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.age}
                                </Typography>
                            )}
                        </FormControl>
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
    )
}

EmigrationMemberForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}

export default EmigrationMemberForm;