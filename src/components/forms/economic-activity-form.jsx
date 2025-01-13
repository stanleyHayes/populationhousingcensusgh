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
    Select, Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import PropTypes from "prop-types";

const EconomicActivityForm = ({person}) => {
    const formik = useFormik({
        initialValues: {
            is_working: false,
            reason_not_seeking_work: '',
            engagement_form: '',
            establishment_name: '',
            establishment_location: '',
            main_product_or_service: '',
            main_product_or_service_code: '',
            employment_status: '',
            employment_status_code: '',
            employment_sector: '',
            employment_sector_code: '',
            occupation: '',
            occupation_description: '',
        },
        onSubmit: (values, actions) => {
        },
        validationSchema: Yup.object().shape({
            establishment_name: Yup.string().required('Field required'),
            establishment_location: Yup.string().required('Field required'),
            main_product_or_service: Yup.number().required('Field required'),
            main_product_or_service_code: Yup.string()
                .oneOf([], "Must be one of the following")
                .required('Field required'),
            employment_status: Yup.string().oneOf(['male', 'female'], 'Must be one of male or female')
                .required('Person name required'),
            employment_sector: Yup.string()
                .oneOf(['A', 'B'], 'must be either A or B')
                .required('Person name required'),
            employment_sector_code: Yup.string()
                .required('Person name required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 4}}>
                            During the 7 days before census night, did {person.name} engage in any activity for pay
                            (cash or kind) or profit or family gain for at least one hour?
                            (THIS INCLUDES HELPING IN THE FAMILY BUSINESS/ FARM, TRADING, STREET VENDING, ETC)
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.is_working}
                                name="is_working">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('is_working', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('is_working', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.is_working && formik.errors.is_working && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.is_working}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="engagement_form">
                                How was {person.name} mainly engaged?
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.engagement_form}
                                name="engagement_form"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('engagement_form', '1')
                                    }} value="1">Did not work but had job to go back to
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('engagement_form', '2')
                                    }} value="2">
                                    Worked before, seeking work and available for work
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('engagement_form', '3')
                                    }} value="1">
                                    Seeking work for the first time and available for work
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('engagement_form', '4')
                                    }} value="4">Did voluntary work without pay
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('engagement_form', '5')
                                    }} value="5">Did not work and not seeking work
                                </MenuItem>
                            </Select>
                            {formik.touched.engagement_form && formik.errors.engagement_form && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.engagement_form}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    {formik.values.is_working && (
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 2}}>
                                What kind of work did {person.name} mainly do?
                            </Typography>

                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="occupation">
                                    Occupation
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Occupation"
                                    type="text"
                                    name="occupation"
                                    id="occupation"
                                    label="Occupation"
                                    required={true}
                                    value={formik.values.occupation}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.occupation && formik.errors.occupation}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.occupation && formik.errors.occupation ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.occupation}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    )}

                    {formik.values.engagement_form === '1' && (
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 2}}>
                                What kind of work did {person.name}do before the break period?
                            </Typography>

                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="occupation">
                                    Occupation
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Occupation"
                                    type="text"
                                    name="occupation"
                                    id="occupation"
                                    label="Occupation"
                                    required={true}
                                    value={formik.values.occupation}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.occupation && formik.errors.occupation}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.occupation && formik.errors.occupation ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.occupation}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    )}

                    {formik.values.engagement_form === '2' || formik.values.engagement_form === '4' && (
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 2}}>
                                What kind of work did {person.name} do previously?
                            </Typography>

                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="occupation">
                                    Occupation
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Occupation"
                                    type="text"
                                    name="occupation"
                                    id="occupation"
                                    label="Occupation"
                                    required={true}
                                    value={formik.values.occupation}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.occupation && formik.errors.occupation}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.occupation && formik.errors.occupation ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.occupation && formik.errors.occupation && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.occupation}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    )}

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Why did {person.name} not seek work?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="reason_not_seeking_work">
                                Reason not seeking work
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.reason_not_seeking_work}
                                name="reason_not_seeking_work"
                                label="Reason not seeking work"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '1')
                                    }} value="1">
                                    Did home duties (household chores/ full time homemaker)
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '2')
                                    }} value="2">
                                    In full time education /student
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '3')
                                    }} value="3">
                                    Pensioner/Retired
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '4')
                                    }} value="4">
                                    Disabled/too sick to work
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '5')
                                    }} value="5">
                                    Too old/too young
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '6')
                                    }} value="6">
                                    Other
                                </MenuItem>
                            </Select>
                            {formik.touched.reason_not_seeking_work && formik.errors.reason_not_seeking_work && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.reason_not_seeking_work}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is the main product or service of the establishment where {person.name}
                            works/worked?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="main_product_or_service">
                                Main Product or Service
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.main_product_or_service}
                                name="main_product_or_service"
                                label="Main Product or Service"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '1')
                                    }} value="1">
                                    Did home duties (household chores/ full time homemaker)
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '2')
                                    }} value="2">
                                    In full time education /student
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '3')
                                    }} value="3">
                                    Pensioner/Retired
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '4')
                                    }} value="4">
                                    Disabled/too sick to work
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '5')
                                    }} value="5">
                                    Too old/too young
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('reason_not_seeking_work', '6')
                                    }} value="6">
                                    Other
                                </MenuItem>
                            </Select>
                            {formik.touched.reason_not_seeking_work && formik.errors.reason_not_seeking_work && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.reason_not_seeking_work}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            In what sector was {person.name} mainly working?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="employment_sector">
                                Employment Sector
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.employment_sector}
                                name="employment_sector"
                                label="Employment Sector"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'Public (Government)')
                                        formik.setFieldValue('employment_sector_code', '1')
                                    }} value="1">
                                    Public (Government)
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'Private Formal')
                                        formik.setFieldValue('employment_sector_code', '2')
                                    }} value="2">
                                    Private Formal
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'Private Informal')
                                        formik.setFieldValue('employment_sector_code', '3')
                                    }} value="3">
                                    Private Informal
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'Semi-Public/Parastatal')
                                        formik.setFieldValue('employment_sector_code', '4')
                                    }} value="5">
                                    Semi-Public/Parastatal
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'NGO (Local and International)')
                                        formik.setFieldValue('employment_sector_code', '5')
                                    }} value="5">
                                    NGO (Local and International)
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_sector', 'International Organisation')
                                        formik.setFieldValue('employment_sector_code', '6')
                                    }} value="6">
                                    International Organisation
                                </MenuItem>
                            </Select>
                            {formik.touched.employment_sector && formik.errors.employment_sector && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.employment_sector}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            In what sector was mainly working?
                            What was {person.name} &#39;s employment status in that establishment/ industry?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="employment_status">
                                Employment Status
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.employment_status}
                                name="employment_status"
                                label="Employment Status"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Employee')
                                        formik.setFieldValue('employment_status_code', '1')
                                    }} value="Employee">
                                    Employee
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Self employed without employees')
                                        formik.setFieldValue('employment_status_code', '2')
                                    }} value="Self employed without employees">
                                    Self employed without employees
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Self employed with employees')
                                        formik.setFieldValue('employment_status_code', '3')
                                    }} value="Self employed with employees">
                                    Self employed with employees
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Casual worker')
                                        formik.setFieldValue('employment_status_code', '4')
                                    }} value="Casual worker">
                                    Casual worker
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Contributing family worker')
                                        formik.setFieldValue('employment_status_code', '5')
                                    }} value="Contributing family worker">
                                    Contributing family worker
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Apprentice')
                                        formik.setFieldValue('employment_status_code', '6')
                                    }} value="Apprentice">
                                    Apprentice
                                </MenuItem>

                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Domestic employee (house help)')
                                        formik.setFieldValue('employment_status_code', '6')
                                    }} value="Domestic employee (house help)">
                                    Domestic employee (house help)
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('employment_status', 'Other')
                                        formik.setFieldValue('employment_status_code', '6')
                                    }} value="Other">
                                    Other
                                </MenuItem>
                            </Select>
                            {formik.touched.employment_status && formik.errors.employment_status && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.employment_status}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is the name of the establishment where {person.name}currently works/ previously worked?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="establishment_name">
                                Establishment Name
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of establishment"
                                type="text"
                                name="establishment_name"
                                id="establishment_name"
                                label="Establishment Name"
                                required={true}
                                value={formik.values.establishment_name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.establishment_name && formik.errors.establishment_name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.establishment_name && formik.errors.establishment_name ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.establishment_name && formik.errors.establishment_name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.establishment_name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            What is the physical location of the establishment where {person.name} currently works/
                            previously worked?
                        </Typography>

                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="establishment_location">
                                Establishment Location
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter establishment location"
                                type="text"
                                name="establishment_location"
                                id="establishment_location"
                                label="Establishment Location"
                                required={true}
                                value={formik.values.establishment_location}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.establishment_location && formik.errors.establishment_location}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.establishment_location && formik.errors.establishment_location ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.establishment_location && formik.errors.establishment_location && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.establishment_location}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

EconomicActivityForm.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    })
}

export default EconomicActivityForm;