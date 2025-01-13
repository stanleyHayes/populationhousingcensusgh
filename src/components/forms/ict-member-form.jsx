import {Box, FormControl, FormControlLabel, Grid2 as Grid, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import DisabilityForm from "./disability-form.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";

const ICTMemberForm = ({person}) => {
    const formik = useFormik({
        initialValues: {
            has_phone: true,
            has_internet: true
        },
        onSubmit: (values, actions) => {
        },
        validationSchema: Yup.object().shape({
            has_phone: Yup.bool().required('Person name required'),
            has_internet: Yup.bool().required('Field required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Does {person.name} own a mobile phone?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.has_phone}
                                name="has_phone">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_phone', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_phone', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_phone && formik.errors.has_phone && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_phone}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Does {person.name} own a mobile phone?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.has_internet}
                                name="has_internet">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_internet', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_internet', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_internet && formik.errors.has_internet && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_internet}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

DisabilityForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
};


export default ICTMemberForm;