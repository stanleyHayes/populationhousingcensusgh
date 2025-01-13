import {
    Box, Button,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel, MenuItem,
    OutlinedInput,
    Select,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectRelationshipCodes} from "../../redux/features/relationship-codes/relationship-codes-slice.js";
import PropTypes from "prop-types";

const HouseholdRosterForm = ({handleMemberAdd, onClose}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            relationship_to_head: '',
            relationship_code: '',
            sex: '',
            status: ''
        },
        onSubmit: (values, actions) => {
            console.log(values);
            handleMemberAdd(values);
            actions.resetForm();
            onClose();
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Person name required'),
            relationship_code: Yup.string().required('Person name required'),
            relationship_to_head: Yup.string()
                .required('Field required'),
            sex: Yup.string().oneOf(['male', 'female'], 'Must be one of male or female')
                .required('Person name required'),
            status: Yup.string()
                .oneOf(['A', 'B'], 'must be either A or B')
                .required('Person name required'),
        })
    });

    const {codes} = useSelector(selectRelationshipCodes);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid size={{xs: 12}}>
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
                    <Grid size={{xs: 12}}>
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
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('relationship_to_head', code.name)
                                                formik.setFieldValue('relationship_code', code.code)}
                                            }
                                            key={code.code}
                                            value={code.name}>
                                            {code.name}
                                        </MenuItem>
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
                    <Grid size={{xs: 6}}>
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
                                onChange={formik.handleChange}
                                name="sex"
                                label="Sex"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => formik.setFieldValue('sex', 'male')}
                                    value="male">Male</MenuItem>
                                <MenuItem
                                    onClick={() => formik.setFieldValue('sex', 'female')}
                                    value="female">Female</MenuItem>
                            </Select>
                            {formik.touched.sex && formik.errors.sex && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sex}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="status">
                                Status
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.status}
                                name="status"
                                label="Status"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => formik.setFieldValue('status', 'A')}
                                    value="A">A</MenuItem>
                                <MenuItem
                                    onClick={() => formik.setFieldValue('status', 'B')}
                                    value="B">B</MenuItem>
                            </Select>
                            {formik.touched.status && formik.errors.status && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.status}
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

HouseholdRosterForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}


export default HouseholdRosterForm;