import {
    Box, Button,
    FormControl,
    FormControlLabel,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import PropTypes from "prop-types";

const MortalityForm = ({onClose, handleMemberAdd}) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            had_unnatural_death: false,
            sex: '',
            age: '',
            birth_related_death: false,
        },
        onSubmit: (values, actions) => {
            handleMemberAdd(values);
            onClose();
            actions.resetForm();
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Person name required'),
            age: Yup.number().required('Field required'),
            had_unnatural_death: Yup.bool().required('Field required'),
            birth_related_death: Yup.bool().required('Field required'),
            sex: Yup.string()
                .oneOf(['male', 'female'], 'Must be one of male or female')

        })
    });


    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 4}} container={true} spacing={2}>
                    <Grid size={{xs: 12}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="name">Deceased Name</InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="text"
                                name="name"
                                id="name"
                                label="Deceased Name"
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
                    <Grid size={{xs: 12, md: 3}}>
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
                    <Grid size={{xs: 12, md: 3}}>
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
                    <Grid size={{xs: 12}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="destination">
                                Was the death due to accident, violence, homicide or suicide?
                            </InputLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                name="had_unnatural_death">
                                <FormControlLabel
                                    onClick={() => formik.setFieldValue('had_unnatural_death', true)}
                                    value={true}
                                    control={<Radio/>}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    onClick={() => formik.setFieldValue('had_unnatural_death', false)}
                                    value={false}
                                    control={<Radio/>}
                                    label="No"
                                />
                            </RadioGroup>
                            {formik.touched.had_unnatural_death && formik.errors.had_unnatural_death && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.had_unnatural_death}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    {formik.values.sex === 'female' && formik.values.age > 11 && formik.values.age < 55 && (
                        <Grid size={{xs: 12}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel
                                    sx={{color: "text.secondary"}}
                                    htmlFor="destination">
                                    Did the death occur whilst pregnant, during delivery, or within 6 weeks after the end of a pregnancy or child birth?
                                </InputLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue={false}
                                    name="birth_related_death">
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('birth_related_death', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('birth_related_death', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </RadioGroup>
                                {formik.touched.birth_related_death && formik.errors.birth_related_death && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.birth_related_death}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    )}
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


MortalityForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}



export default MortalityForm;