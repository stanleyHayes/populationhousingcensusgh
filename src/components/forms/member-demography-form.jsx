import {
    Box,
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
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectNationalities} from "../../redux/features/nationalities/nationalities-slice.js";
import {selectEthnicities} from "../../redux/features/ethnicities/ethnicities-slice.js";
import {selectReligions} from "../../redux/features/religions/religions-slice.js";
import {selectMaritalStatuses} from "../../redux/features/marital-statuses/marital-status-slice.js";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";

const MemberDemographyForm = ({person}) => {
    const {roster} = useSelector(selectHousehold);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            dob: dayjs(person?.dob),
            ethnicity: person?.ethnicity,
            ethnicity_code: person?.ethnicity_code,
            nationality: person?.nationality,
            nationality_code: person?.nationality_code,
            birthplace: person?.birthplace,
            religion: person?.religion,
            religion_code: person?.religion_code,
            marital_status: person?.marital_status,
            marital_status_code: person?.marital_status_code,
            place_of_residence: person?.place_of_residence,
            is_living_in_town_since_birth: person?.is_living_in_town_since_birth,
            born_in_village: person?.born_in_village,
            years_lived_in_village: person?.years_lived_in_village,
        },
        onSubmit: (values) => {
            const members = roster.map(member => {
                if (member.id === person.id) {
                    return {...person, ...values}
                }
                return member;
            });
            dispatch(HOUSEHOLD_ACTIONS.saveRoster(members));
        },
        validationSchema: Yup.object().shape({
            dob: Yup.string().required('Field required'),
            ethnicity: Yup.string().required('Field required'),
            ethnicity_code: Yup.string().required('Field required'),
            nationality: Yup.string().required('Field required'),
            nationality_code: Yup.string().required('Field required'),
            birthplace: Yup.string().required('Field required'),
            religion: Yup.string().required('Field required'),
            religion_code: Yup.string().required('Field required'),
            marital_status: Yup.string().required('Field required'),
            marital_status_code: Yup.string().required('Field required'),
            place_of_residence: Yup.string().required('Field required'),
            is_living_in_town_since_birth: Yup.bool().required('Field required'),
            born_in_village: Yup.bool().required('Field required'),
            years_lived_in_village: Yup.string().required('Field required'),
        })
    });

    const {nationalities} = useSelector(selectNationalities);
    const {ethnicities} = useSelector(selectEthnicities);
    const {religions} = useSelector(selectReligions);
    const {maritalStatuses} = useSelector(selectMaritalStatuses);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is {person.name}&#39;s date of birth?
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
                            How old is {person.name}, in completed years?
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
                            What is {person.name}&#39;s Nationality?
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
                            To which ethnic group does {person.name} belong?
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
                            Was {person.name} born in this village/ town?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
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
                            In what region or country was {person.name} born?
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
                            Has {person.name} been living in this village or town since birth?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
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
                            For how long has {person.name} been living in this village or town?
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
                            What is {person.name}&#39;s religious affiliation?
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
                            What is {person.name}&#39;s current marital status?
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
            </form>
        </Box>
    )
}

MemberDemographyForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        dob: PropTypes.string.isRequired,
        ethnicity: PropTypes.string.isRequired,
        ethnicity_code: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        nationality_code: PropTypes.string.isRequired,
        birthplace: PropTypes.string.isRequired,
        religion: PropTypes.string.isRequired,
        religion_code: PropTypes.string.isRequired,
        marital_status: PropTypes.string.isRequired,
        marital_status_code: PropTypes.string.isRequired,
        place_of_residence: PropTypes.string.isRequired,
        is_living_in_town_since_birth: PropTypes.bool.isRequired,
        born_in_village: PropTypes.bool.isRequired,
        years_lived_in_village: PropTypes.string.isRequired
    }).isRequired,
};


export default MemberDemographyForm;