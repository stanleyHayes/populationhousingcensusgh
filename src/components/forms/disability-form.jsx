import {Box, FormControl, FormControlLabel, Grid2 as Grid, Radio, RadioGroup, Stack, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

const DisabilityForm = ({person}) => {
    const formik = useFormik({
        initialValues: {
            sight: false,
            hearing: false,
            physical: false,
            intellect: false,
            emotion: false,
            speech: false,
            other: false
        },
        onSubmit: (values, actions) => {

        },
        validationSchema: Yup.object().shape({
            sight: Yup.bool().required('Person name required'),
            hearing: Yup.bool().required('Field required'),
            physical: Yup.bool().required('Field required'),
            intellect: Yup.bool().required('Field required'),
            emotion: Yup.bool().required('Field required'),
            speech: Yup.bool().required('Person name required'),
            other: Yup.bool().required('Person name required'),
        })
    });

    return (
        <Box>
            <Typography
                variant="body2"
                sx={{color: "text.secondary", mb: 2}}>
                Does {person.name} have any serious disablilty that limits his/her full participation in life activities
                (such as mobility,
                work, social life, etc)?
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Sight
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.sight}
                                name="sight">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('sight', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('sight', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />

                                </Stack>
                            </RadioGroup>
                            {formik.touched.sight && formik.errors.sight && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sight}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Hearing
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.hearing}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                name="hearing">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('hearing', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('hearing', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.hearing && formik.errors.hearing && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.hearing}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Physical
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.physical}
                                name="physical">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('physical', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('physical', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.physical && formik.errors.physical && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.physical}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Intellect
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.intellect}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                name="intellect">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('intellect', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('intellect', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.intellect && formik.errors.intellect && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.intellect}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Emotion
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.emotion}
                                name="emotion">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('emotion', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('emotion', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.emotion && formik.errors.emotion && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.emotion}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Speech
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.speech}
                                name="speech">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('speech', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('speech', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.speech && formik.errors.speech && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.speech}
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
    })
}

export default DisabilityForm;