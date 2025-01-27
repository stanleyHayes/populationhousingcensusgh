import {
    Autocomplete,
    Box, Button,
    Divider,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput, TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {
    CheckCircleOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    ErrorOutline,
    PersonOutline
} from "@mui/icons-material";
import PropTypes from "prop-types";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useState} from "react";

const NewHouseholdMemberFertilityForm = ({name, sex, age}) => {
    const dispatch = useDispatch();
    const {fertility, step, totalSteps} = useSelector(selectPersons);

    const formik = useFormik({
        initialValues: {
            born_alive_past_12_months: {
                male: fertility?.born_alive_past_12_months?.male,
                female: fertility?.born_alive_past_12_months?.female,
            },
            surviving: {
                male: fertility?.surviving?.male,
                female: fertility?.surviving?.male,
            },
            birth: {
                male: fertility?.birth?.male,
                female: fertility?.birth?.male,
            }
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveFertility(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            born_alive_past_12_months: Yup.object().shape({
                male: Yup.string().required('Field required'),
                female: Yup.string().required('Field required'),
            }),
            surviving: Yup.object().shape({
                male: Yup.string().required('Field required'),
                female: Yup.string().required('Field required'),
            }),
            birth: Yup.object().shape({
                male: Yup.string().required('Field required'),
                female: Yup.string().required('Field required'),
            }),
        })
    });

    const {households, loading} = useSelector(selectHousehold);

    const [household, setHousehold] = useState(null);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>

                <Box sx={{mb: 2}}>
                    <Grid size={{xs: 12}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={households}
                            value={household || {

                            }} // Ensure district is always an object
                            inputValue={household?.name || ''} // Bind the input value to district.name
                            onChange={(event, value) => {
                                // Set the entire district object when a value is selected
                                setHousehold(value || {name: '', code: ''});
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change for free text and update only the name
                                const matchedOption = households.find(option => option.name === value);
                                setHousehold(matchedOption || {name: value, code: ''});
                            }}
                            getOptionLabel={option => (option?.name ? option.name : '')} // Safeguard against undefined or null
                            renderOption={(props, option) => (
                                <li {...props}>
                                    <Typography variant="body2" sx={{color: 'text.primary'}}>
                                        {option.name}
                                    </Typography>
                                </li>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    name="district.name" // Bind to district.name
                                    id="district-name"
                                    fullWidth
                                    label="Search District"
                                    placeholder="Search District"
                                />
                            )}
                        />
                    </Grid>
                </Box>
                <Box sx={{mb: 2}}>
                    <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                        How many children has {name} ever born alive?
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
                        How many children ever born alive to {name} are still surviving (living with you or
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

                {sex === 'female' && age >= 12 && age <= 54 && (
                    <Box sx={{mb: 2}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 4}}>
                            How many children has {name} born alive in the past 12 months?
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

                <Box>
                    <Divider sx={{my: 4}}/>
                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                startIcon={<ChevronLeftOutlined/>}
                                fullWidth={true}
                                disabled={step === 0}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(PERSON_ACTION_CREATORS.previous())}>
                                Previous
                            </Button>
                        </Grid>
                        <Grid size={{xs: 12, md: "auto"}}>
                            {step === totalSteps ? (
                                <Button
                                    type="submit"
                                    endIcon={<CheckCircleOutlined/>}
                                    disabled={step !== totalSteps}
                                    variant="contained"
                                    color="primary"
                                    disableElevation={true}
                                    fullWidth={true}>
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    type="submit"
                                    endIcon={<ChevronRightOutlined/>}
                                    disabled={step === totalSteps}
                                    variant="contained"
                                    color="primary"
                                    disableElevation={true}
                                    fullWidth={true}>
                                    Next
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>
    )
}

NewHouseholdMemberFertilityForm.propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};


export default NewHouseholdMemberFertilityForm;