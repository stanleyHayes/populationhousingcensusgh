import {Box, FormControl, Grid2 as Grid, InputAdornment, InputLabel, OutlinedInput, Typography} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import PropTypes from "prop-types";

const FertilityForm = ({person}) => {
    const formik = useFormik({
        initialValues: {
            born_alive_past_12_months: {
                male: '',
                female: '',
            },
            surviving: {
                male: '',
                female: '',
            },
            birth: {
                male: '',
                female: '',
            }
        },
        onSubmit: (values, actions) => {
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Person name required'),
            age: Yup.number().required('Field required'),
            months_absent: Yup.number().required('Field required'),
            destination: Yup.string().required('Field required'),
            relationship_to_head: Yup.string()
                .oneOf([], "Must be one of the following")
                .required('Field required'),
            sex: Yup.string().oneOf(['male', 'female'], 'Must be one of male or female')
                .required('Person name required'),
            status: Yup.string()
                .oneOf(['A', 'B'], 'must be either A or B')
                .required('Person name required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{mb: 2}}>
                    <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                        How many children has {person.name} ever born alive?
                    </Typography>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="birth.male">
                                    Male
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of males born"
                                    type="number"
                                    name="birth.male"
                                    id="birth.male"
                                    label="Male"
                                    required={true}
                                    value={formik.values.birth?.male}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.birth?.male && formik.errors.birth?.male}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.birth?.male && formik.errors.birth?.male ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.birth?.male && formik.errors.birth?.male && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.birth?.male}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="birth.female">
                                    Female
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of females ever born"
                                    type="number"
                                    name="birth.female"
                                    id="birth.female"
                                    label="Female"
                                    required={true}
                                    value={formik.values.birth?.female}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.birth?.female && formik.errors.birth?.female}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.birth?.female && formik.errors.birth?.female ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.birth?.female && formik.errors.birth?.female && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.birth?.female}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{mb: 2}}>
                    <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                        How many children ever born alive to {person.name} are still surviving (living with you or
                        elsewhere)?
                    </Typography>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="surviving.male">
                                    Male
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of surviving males born"
                                    type="number"
                                    name="surviving.male"
                                    id="surviving.male"
                                    label="Male"
                                    required={true}
                                    value={formik.values.surviving?.male}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.surviving?.male && formik.errors.surviving?.male}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.surviving?.male && formik.errors.surviving?.male ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.surviving?.male && formik.errors.surviving?.male && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.surviving?.male}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="surviving.female">
                                    Female
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of surviving females"
                                    type="number"
                                    name="surviving.female"
                                    id="surviving.female"
                                    label="Surviving Female"
                                    required={true}
                                    value={formik.values.surviving?.female}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.surviving?.female && formik.errors.surviving?.female}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.surviving?.female && formik.errors.surviving?.female ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.surviving?.female && formik.errors.surviving?.female && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.surviving?.female}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>

                {person.sex === 'female' && person.age >= 12 && person.age <= 54 && (
                    <Box sx={{mb: 2}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 4}}>
                            How many children has {person.name} born alive in the past 12 months?
                        </Typography>
                        <Grid container={true} spacing={2}>
                            <Grid size={{xs: 12, md: 6}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel sx={{color: "text.secondary"}} htmlFor="born_alive_past_12_months.male">
                                        Male
                                    </InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter number of born alive past 12 months"
                                        type="number"
                                        name="born_alive_past_12_months.male"
                                        id="born_alive_past_12_months.male"
                                        label="Male"
                                        required={true}
                                        value={formik.values.born_alive_past_12_months?.male}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.born_alive_past_12_months?.male && formik.errors.born_alive_past_12_months?.male}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonOutline/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.born_alive_past_12_months?.male && formik.errors.born_alive_past_12_months?.male ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.born_alive_past_12_months?.male && formik.errors.born_alive_past_12_months?.male && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.born_alive_past_12_months?.male}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 6}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="born_alive_past_12_months.female">
                                        Female
                                    </InputLabel>
                                    <OutlinedInput
                                        placeholder="Enter number of born alive past 12 months"
                                        type="number"
                                        name="born_alive_past_12_months.female"
                                        id="born_alive_past_12_months.female"
                                        label="Female"
                                        required={true}
                                        value={formik.values.born_alive_past_12_months?.female}
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        error={formik.touched.born_alive_past_12_months?.female && formik.errors.born_alive_past_12_months?.female}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <PersonOutline/>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            formik.touched.born_alive_past_12_months?.female && formik.errors.born_alive_past_12_months?.female ? (
                                                <ErrorOutline/>
                                            ) : null
                                        }
                                    />
                                    {formik.touched.born_alive_past_12_months?.female && formik.errors.born_alive_past_12_months?.female && (
                                        <Typography variant="body2" color="error">
                                            {formik.errors.born_alive_past_12_months?.female}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                )}

            </form>
        </Box>
    )
}

FertilityForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
};


export default FertilityForm;