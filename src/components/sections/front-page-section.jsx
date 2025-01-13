import {
    Autocomplete,
    Box, Divider,
    FormControl,
    FormControlLabel,
    Grid2 as Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Radio,
    RadioGroup, Select, Stack,
    TextField,
    Typography
} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import {selectDistricts} from "../../redux/features/districts/districts-slice.js";
import {DatePicker} from "@mui/x-date-pickers";
import dayjs from "dayjs";

const FrontPageSection = () => {
    const {ghanaRegions, loading} = useSelector(selectRegions);

    const formik = useFormik({
        initialValues: {
            hometown: '',
            region: {name: '', code: ''},
            house_address: '',
            district: {name: '', code: ''},
            district_type: {name: '', code: ''},
            locality: {name: '', code: ''},
            sub_district: '',
            NHIS_ECG_VRA_other_number: '',
            household_contacts: {
                contact_1: '',
                contact_2: '',
            },
            ea: {number: '', type: ''},
            house_structure_number: '',
            household_number_within_house: '',
            residence_type: '',
            date_started: '',
            date_completed: '',
            total_visits: 1,
        },
        validationSchema: Yup.object().shape({
            hometown: Yup.string().required('Field is required'),
            region: Yup.object().shape({
                name: Yup.string().required('Field is required'),
                code: Yup.string().required('Field is required')
            }),
            house_address: Yup.string().required('Field is required'),
            district: Yup.object().shape({
                name: Yup.string().required('Field is required'),
                code: Yup.string().required('Field is required')
            }),
            district_type: Yup.object().shape({
                name: Yup.string().required('Field is required'),
                code: Yup.string().required('Field is required')
            }),
            locality: Yup.object().shape({
                name: Yup.string().required('Field is required'),
                number: Yup.string().required('Field is required')
            }),
            sub_district: Yup.string().required('Field is required'),
            NHIS_ECG_VRA_OtherNumber: Yup.string().required('Field is required'),
            household_contacts: Yup.object().shape({
                contact_1: Yup.string().required('Field is required'),
                contact_2: Yup.string().required('Field is required')
            }),
            ea: Yup.object().shape({
                number: Yup.string().required('Field is required'),
                type: Yup.string().required('Field is required')
            }),
            house_structure_number: Yup.string().required('Field is required'),
            household_number_within_house: Yup.string().required('Field is required'),
            residence_type: Yup.string().required('Field is required'),
            date_started: Yup.date().required('Field is required'),
            date_completed: Yup.date(),
            total_visits: Yup.number().required('Field is required'),
        }),
        validateOnBlur: true,
        validateOnChange: true,
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const {districts} = useSelector(selectDistricts);

    return (
        <Box>
            <SectionHeader title="Front Page"/>
            <Box sx={{mb: 4}}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="region.name">
                                Region Name
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                label="Region Name"
                                value={formik.values.region?.name}
                                name="region.name"
                                variant="outlined">
                                {ghanaRegions.map(region => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('region.name', region.name);
                                                formik.setFieldValue('region.code', region.code);
                                            }}
                                            key={region.name}
                                            value={region.name}>{region.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.region?.name && formik.errors.region?.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.region?.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={districts}
                            value={formik.values.district || {
                                name: '',
                                code: ''
                            }} // Ensure district is always an object
                            inputValue={formik.values.district?.name || ''} // Bind the input value to district.name
                            onChange={(event, value) => {
                                // Set the entire district object when a value is selected
                                formik.setFieldValue('district', value || {name: '', code: ''});
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change for free text and update only the name
                                const matchedOption = districts.find(option => option.name === value);
                                formik.setFieldValue('district', matchedOption || {name: value, code: ''});
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
                                    error={formik.touched.district?.name && Boolean(formik.errors.district?.name)}
                                    helperText={formik.touched.district?.name && formik.errors.district?.name}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="district_type.name">
                                District Type
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.district_type?.name}
                                label="District Type"
                                name="district_type.name"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type.name', 'District');
                                        formik.setFieldValue('district_type.code', '1');
                                    }} value="District">District</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type.name', 'Municipal');
                                        formik.setFieldValue('district_type.code', '1');
                                    }} value="Municipal">Municipal</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type.name', 'Metropolitan');
                                        formik.setFieldValue('district_type.code', '1');
                                    }} value="Metropolitan">Metropolitan</MenuItem>

                            </Select>
                            {formik.touched.district_type?.name && formik.errors.district_type?.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.district_type?.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="sub_district">
                                Sub District
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.sub_district}
                                label="Sub District"
                                name="sub_district"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Sekondi-Takoradi');
                                    }} value="Sekondi-Takoradi">Sekondi-Takoradi</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Cape Coast');
                                    }} value="Cape Coast">Cape Coast</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Accra');
                                    }} value="Accra">Accra</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Tema');
                                    }} value="Tema">Tema</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Kumasi');
                                    }} value="Kumasi">Kumasi</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('sub_district', 'Tamale');
                                    }} value="Tamale">Tamale</MenuItem>
                            </Select>
                            {formik.touched.sub_district && formik.errors.sub_district && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sub_district}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="locality.name">
                                Locality Name
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter locality name"
                                type="text"
                                name="locality.name"
                                id="locality.name"
                                label="Locality Name"
                                required={true}
                                value={formik.values.locality?.name}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.locality?.name && formik.errors.locality?.name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.locality?.name && formik.errors.locality?.name ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.locality?.name && formik.errors.locality?.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.locality?.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="NHIS_ECG_VRA_other_number">
                                NHIS/ECG/VRA/Other Number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter NHIS/ECG/VRA/Other Number"
                                type="text"
                                name="NHIS_ECG_VRA_other_number"
                                id="NHIS_ECG_VRA_other_number"
                                label="NHIS/ECG/VRA/Other Number"
                                required={true}
                                value={formik.values.NHIS_ECG_VRA_other_number}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.NHIS_ECG_VRA_other_number && formik.errors.NHIS_ECG_VRA_other_number}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.NHIS_ECG_VRA_other_number && formik.errors.NHIS_ECG_VRA_other_number ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.NHIS_ECG_VRA_other_number && formik.errors.NHIS_ECG_VRA_other_number && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.NHIS_ECG_VRA_other_number}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="house_address">
                                Address of House
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter address of House"
                                type="text"
                                name="house_address"
                                id="house_address"
                                label="Address of House"
                                required={true}
                                value={formik.values.house_address}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                minRows={4}
                                onChange={formik.handleChange}
                                error={formik.touched.house_address && formik.errors.house_address}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.house_address && formik.errors.house_address ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.house_address && formik.errors.house_address && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.house_address}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="household_contacts.contact_1">
                                HH Contact Phone Number 1
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter HH Contact Phone Number 1"
                                type="tel"
                                name="household_contacts.contact_1"
                                id="household_contacts.contact_1"
                                label="Enter HH Contact Phone Number 1"
                                required={true}
                                value={formik.values.household_contacts?.contact_1}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.household_contacts?.contact_1 && formik.errors.household_contacts?.contact_1}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.household_contacts?.contact_1 && formik.errors.household_contacts?.contact_1 ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.household_contacts?.contact_1 && formik.errors.household_contacts?.contact_1 && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.household_contacts?.contact_1}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="household_contacts.contact_2">
                                HH Contact Phone Number 2
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter HH Contact Phone Number 2"
                                type="text"
                                name="household_contacts.contact_2"
                                id="household_contacts.contact_2"
                                label="HH Contact Phone Number 2"
                                required={true}
                                value={formik.values.household_contacts?.contact_2}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.household_contacts?.contact_2 && formik.errors.household_contacts?.contact_2}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.household_contacts?.contact_2 && formik.errors.household_contacts?.contact_2 ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.household_contacts?.contact_2 && formik.errors.household_contacts?.contact_2 && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.household_contacts?.contact_2}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Box sx={{mb: 4}}>
                <Typography variant="h6" sx={{color: "text.secondary"}}>
                    GEOGRAPHICAL INFORMATION & HOUSEHOLD
                </Typography>

                <Divider sx={{my: 2}}/>

                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="ea.type">
                                EA Type
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.ea?.type}
                                label="EA Type"
                                name="ea?.type"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea.type', '1');
                                    }} value="1">1</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea.type', '2');
                                    }} value="2">2</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea.type', '3');
                                    }} value="3">3</MenuItem>
                            </Select>
                            {formik.touched.ea?.type && formik.errors.ea?.type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors?.ea.type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="locality.number">
                                Locality Number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter locality number"
                                type="number"
                                name="locality.number"
                                id="locality.number"
                                label="Locality Number"
                                required={true}
                                value={formik.values.locality?.number}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.locality?.number && formik.errors.locality?.number}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.locality?.number && formik.errors.locality?.number ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.locality?.number && formik.errors.locality?.number && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.locality?.number}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="household_number_within_house">
                                Household number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter Household number within house/compound"
                                type="text"
                                name="household_number_within_house"
                                id="household_number_within_house"
                                label="Household number"
                                required={true}
                                value={formik.values.household_number_within_house}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.household_number_within_house && formik.errors.household_number_within_house}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.household_number_within_house && formik.errors.household_number_within_house ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.household_number_within_house && formik.errors.household_number_within_house && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.household_number_within_house}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="house_structure_number">
                                Structure Number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter structure number of house/compound"
                                type="text"
                                name="house_structure_number"
                                id="house_structure_number"
                                label="Structure Number"
                                required={true}
                                value={formik.values.house_structure_number}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.house_structure_number && formik.errors.house_structure_number}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.house_structure_number && formik.errors.house_structure_number ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.house_structure_number && formik.errors.house_structure_number && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.house_structure_number}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 1}}>
                            Type of residence
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.residence_type}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="residence_type">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('residence_type', '1')}
                                        value="1"
                                        control={<Radio/>}
                                        label="Occupied housing unit"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('residence_type', '2')}
                                        value="2"
                                        control={<Radio/>}
                                        label="Vacant housing unit"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.residence_type && formik.errors.residence_type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.residence_type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>

            </Box>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Box>
                <Typography variant="h6" sx={{color: "text.secondary"}}>
                    INTERVIEW DATES AND NUMBER OF VISITS
                </Typography>

                <Divider sx={{my: 2}}/>

                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="date_started">
                                Start Date
                            </InputLabel>
                            <DatePicker
                                label="Start Date"
                                required={true}
                                fullWidth={true}
                                views={['year']}
                                value={formik.values.date_started ? dayjs(formik.values.date_started, 'DD/MM/YYYY') : null}
                                onChange={(date) => {
                                    if (date) {
                                        formik.setFieldValue('date_started', date);
                                    }
                                }}
                                name="date_started"
                            />
                            {formik.touched.date_started && formik.errors.date_started && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.date_started}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="date_completed">
                                Completed Date
                            </InputLabel>
                            <DatePicker
                                label="Completed Date"
                                required={true}
                                fullWidth={true}
                                views={['year']}
                                value={formik.values.date_completed ? dayjs(formik.values.date_completed, 'DD/MM/YYYY') : null}
                                onChange={(date) => {
                                    if (date) {
                                        formik.setFieldValue('date_completed', date);
                                    }
                                }}
                                name="date_completed"
                            />
                            {formik.touched.date_completed && formik.errors.date_completed && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.date_completed}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="total_visits">
                                Total Visits
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter total number of visits"
                                type="text"
                                name="total_visits"
                                id="total_visits"
                                label="Total Visits"
                                required={true}
                                value={formik.values.total_visits}
                                onBlur={formik.handleBlur}
                                multiline={true}
                                onChange={formik.handleChange}
                                error={formik.touched.total_visits && formik.errors.total_visits}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.total_visits && formik.errors.total_visits ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.total_visits && formik.errors.total_visits && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.total_visits}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </Box>
            <SectionFooter/>
        </Box>
    )
}

export default FrontPageSection;