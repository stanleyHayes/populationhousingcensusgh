import {
    Autocomplete,
    Box,
    Button,
    Divider,
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
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import {ChevronLeftOutlined, ChevronRightOutlined, ErrorOutline, PersonOutline} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectNationalities} from "../../redux/features/nationalities/nationalities-slice.js";
import {selectEthnicities} from "../../redux/features/ethnicities/ethnicities-slice.js";
import {selectReligions} from "../../redux/features/religions/religions-slice.js";
import {selectMaritalStatuses} from "../../redux/features/marital-statuses/marital-status-slice.js";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useState} from "react";

const NewHouseholdMemberDemographyForm = ({name}) => {
    const dispatch = useDispatch();
    const {step, totalSteps, demography} = useSelector(selectPersons);

    const formik = useFormik({
        initialValues: {
            dob: demography?.dob,
            age: demography?.age,
            ethnicity: demography?.ethnicity,
            ethnicity_code: demography?.ethnicity_code,
            nationality: demography?.nationality,
            nationality_code: demography?.nationality_code,
            birthplace: demography?.birthplace,
            religion: demography?.religion,
            religion_code: demography?.religion_code,
            marital_status: demography?.marital_status,
            marital_status_code: demography?.marital_status_code,
            is_living_in_town_since_birth: demography?.is_living_in_town_since_birth,
            born_in_village: demography?.born_in_village,
            years_lived_in_village: demography?.years_lived_in_village,
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveDemography(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            dob: Yup.date().required('Field required'),
            age: Yup.number().required('Field required'),
            ethnicity: Yup.string().required('Field required'),
            ethnicity_code: Yup.string().required('Field required'),
            nationality: Yup.string().required('Field required'),
            nationality_code: Yup.string().required('Field required'),
            birthplace: Yup.string().required('Field required'),
            religion: Yup.string().required('Field required'),
            religion_code: Yup.string().required('Field required'),
            marital_status: Yup.string().required('Field required'),
            marital_status_code: Yup.string().required('Field required'),
            is_living_in_town_since_birth: Yup.bool().required('Field required'),
            born_in_village: Yup.bool().required('Field required'),
            years_lived_in_village: Yup.string().required('Field required'),
        })
    });

    const {nationalities} = useSelector(selectNationalities);
    const {regions} = useSelector(selectRegions);
    const {ethnicities} = useSelector(selectEthnicities);
    const {religions} = useSelector(selectReligions);
    const {maritalStatuses} = useSelector(selectMaritalStatuses);
    const {households, loading} = useSelector(selectHousehold);

    const [household, setHousehold] = useState(null);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
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
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is {name}&#39;s date of birth?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <DatePicker
                                label="Date of Birth"
                                value={formik.values.dob ? dayjs(formik.values.dob) : null} // Bind to Formik value, safely handle null
                                onChange={(date) => {
                                    formik.setFieldValue('dob', date ? date.toISOString() : null); // Save as ISO string or reset
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name="dob"
                                        error={formik.touched.dob && Boolean(formik.errors.dob)} // Show validation error
                                        helperText={formik.touched.dob && formik.errors.dob} // Display helper text for errors
                                        fullWidth
                                    />
                                )}
                            />
                            {formik.touched.dob && formik.errors.dob && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.dob}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            How old is {name}, in completed years?
                        </Typography>
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

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is {name}&#39;s Nationality?
                        </Typography>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="nationality">
                                Nationality
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.nationality}
                                label="Nationality"
                                name="nationality"
                                variant="outlined">
                                {nationalities.map(nationality => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('nationality', nationality.name)
                                                formik.setFieldValue('nationality_code', nationality.code)
                                            }}
                                            key={nationality.code}
                                            value={nationality.name}>{nationality.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.nationality && formik.errors.nationality && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.nationality}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            To which ethnic group does {name} belong?
                        </Typography>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="ethnicity">
                                Ethnicity
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.ethnicity}
                                label="Nationality"
                                name="ethnicity"
                                variant="outlined">
                                {ethnicities.map(ethnicity => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('ethnicity', ethnicity.name)
                                                formik.setFieldValue('ethnicity_code', ethnicity.code)
                                            }}
                                            key={ethnicity.code}
                                            value={ethnicity.name}>{ethnicity.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.ethnicity && formik.errors.ethnicity && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.ethnicity}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Was {name} born in this village/ town?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.born_in_village}
                                name="born_in_village">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('born_in_village', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('born_in_village', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />

                                </Stack>
                            </RadioGroup>
                            {formik.touched.born_in_village && formik.errors.born_in_village && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.born_in_village}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            In what region or country was {name} born?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="birthplace">
                                Birthplace
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.birthplace}
                                label="Birthplace"
                                name="birthplace"
                                variant="outlined">
                                {regions.map(region => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('birthplace', region.name)
                                            }}
                                            key={region.code}
                                            value={region.name}>{region.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.birthplace && formik.errors.birthplace && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.birthplace}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Has {name} been living in this village or town since birth?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.is_living_in_town_since_birth}
                                name="is_living_in_town_since_birth">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('is_living_in_town_since_birth', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('is_living_in_town_since_birth', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.is_living_in_town_since_birth && formik.errors.is_living_in_town_since_birth && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.is_living_in_town_since_birth}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            For how long has {name} been living in this village or town?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="nationality">
                                Living in this village or town since birth
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Living in this village or town since birth"
                                type="number"
                                name="years_lived_in_village"
                                id="years_lived_in_village"
                                label="Living in this village or town since birth"
                                required={true}
                                value={formik.values.years_lived_in_village}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.years_lived_in_village && formik.errors.years_lived_in_village}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.years_lived_in_village && formik.errors.years_lived_in_village ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.years_lived_in_village && formik.errors.years_lived_in_village && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.years_lived_in_village}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is {name}&#39;s religious affiliation?
                        </Typography>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="religion">
                                Religious Affiliation
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.religion}
                                label="Religious Affiliation"
                                name="religion"
                                variant="outlined">
                                {religions.map(religion => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('religion', religion.name)
                                                formik.setFieldValue('religion_code', religion.code)
                                            }}
                                            key={religion.code}
                                            value={religion.name}>{religion.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.religion && formik.errors.religion && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.religion}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is {name}&#39;s current marital status?
                        </Typography>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="marital_status">
                                Marital Status
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.marital_status}
                                label="Marital Status"
                                name="marital_status"
                                variant="outlined">
                                {maritalStatuses.map(status => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('marital_status', status.name)
                                                formik.setFieldValue('marital_status_code', status.code)
                                            }}
                                            key={status.code}
                                            value={status.name}>{status.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.marital_status && formik.errors.marital_status && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.marital_status}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>

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
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>
    )
}

NewHouseholdMemberDemographyForm.propTypes = {
    name: PropTypes.string.isRequired,
};


export default NewHouseholdMemberDemographyForm;