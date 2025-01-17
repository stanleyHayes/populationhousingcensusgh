import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    Grid2 as Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline} from "@mui/icons-material";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {GEOGRAPHICAL_AREAS_ACTION_CREATORS} from "../../redux/features/geographical-areas/geographical-areas-slice.js";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import {selectDistricts} from "../../redux/features/districts/districts-slice.js";

const GeographicAreaForm = ({onClose}) => {
    const dispatch = useDispatch();

    const {ghanaRegions} = useSelector(selectRegions);
    const {districts, loading} = useSelector(selectDistricts);

    const formik = useFormik({
        initialValues: {
            region_name: '',
            region_code: '',
            district_name: '',
            district_code: '',
            district_type: '',
            sub_district: '',
            sub_district_code: '',
            locality_name: '',
            locality_code: '',
            ea_number: '',
            ea_type: '',
        },
        onSubmit: (values, actions) => {
            dispatch(GEOGRAPHICAL_AREAS_ACTION_CREATORS.createGeographicalArea({geographicalArea: values}));
            onClose();
            actions.resetForm();
        },
        validationSchema: Yup.object().shape({
            region_name: Yup.string().required('Person name required'),
            region_code: Yup.string().required('Field required'),
            district_name: Yup.string().required('Field required'),
            district_type: Yup.string().required('Field required'),
            district_code: Yup.string().required('Field required'),
            sub_district: Yup.string(),
            sub_district_code: Yup.string().required('Field required'),
            locality_name: Yup.string().required('Field required'),
            locality_code: Yup.string().required('Field required'),
            ea_number: Yup.string().required('Field required'),
            ea_type: Yup.string().required('Field required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 4}} container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="region_name">
                                Region Name
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                label="Region Name"
                                value={formik.values.region_name}
                                name="region_name"
                                variant="outlined">
                                {ghanaRegions.map(region => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('region_name', region.name);
                                                formik.setFieldValue('region_code', region.code);
                                            }}
                                            key={region.name}
                                            value={region.name}>{region.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={districts}
                            value={formik.values.district_name} // Ensure district is always an object
                            inputValue={formik.values.district_name?.name || ''} // Bind the input value to district.name
                            onChange={(event, value) => {
                                // Set the entire district object when a value is selected
                                formik.setFieldValue('district_name', value?.name);
                                formik.setFieldValue('district_code', value?.code);
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change for free text and update only the name
                                formik.setFieldValue('district_name', value?.name);
                                formik.setFieldValue('district_code', value?.code);
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
                                    name="district_name" // Bind to district.name
                                    id="district_name"
                                    fullWidth={true}
                                    label="Search District"
                                    placeholder="Search District"
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="district_type">
                                District Type
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                label="Region Name"
                                value={formik.values.region_name}
                                name="region_name"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type', 'Metropolitan');
                                    }}
                                    value={formik.values.district_type}>Metropolitan</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type', 'Municipal');
                                    }}
                                    value={formik.values.district_type}>Municipal</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('district_type', 'District');
                                    }}
                                    value={formik.values.district_type}>District</MenuItem>
                            </Select>

                            {formik.touched.district_type && formik.errors.district_type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.district_type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    {formik.values.district_type === 'Metropolitan' && (
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel
                                    sx={{color: "text.secondary"}}
                                    htmlFor="sub_district">
                                    Sub District
                                </InputLabel>

                                <OutlinedInput
                                    placeholder="Enter sub district"
                                    type="text"
                                    name="sub_district"
                                    id="sub_district"
                                    label="Sub District"
                                    required={true}
                                    value={formik.values.sub_district}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.sub_district && formik.errors.sub_district}
                                    endAdornment={
                                        formik.touched.sub_district && formik.errors.sub_district ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />

                                {formik.touched.sub_district && formik.errors.sub_district && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.sub_district}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    )}

                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="sex">
                                Locality Name
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter locality name"
                                type="text"
                                name="farm_size"
                                id="farm_size"
                                label="Locality Name"
                                required={true}
                                value={formik.values.locality_name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.locality_name && formik.errors.locality_name}
                                endAdornment={
                                    formik.touched.locality_name && formik.errors.locality_name ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.locality_name && formik.errors.locality_name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.locality_name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="locality_code">
                                Locality Code
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter locality code"
                                type="text"
                                name="locality_code"
                                id="locality_code"
                                label="Locality Code"
                                required={true}
                                value={formik.values.locality_code}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.locality_code && formik.errors.locality_code}
                                endAdornment={
                                    formik.touched.locality_code && formik.errors.locality_code ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.locality_code && formik.errors.locality_code && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.locality_code}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="ea_number">
                                EA Number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter EA number"
                                type="text"
                                name="ea_number"
                                id="ea_number"
                                label="EA Number"
                                required={true}
                                value={formik.values.ea_number}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.ea_number && formik.errors.ea_number}
                                endAdornment={
                                    formik.touched.ea_number && formik.errors.ea_number ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.ea_number && formik.errors.ea_number && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.ea_number}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="ea_type">
                                EA Type
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                label="EA ea_type"
                                value={formik.values.ea_type}
                                name="ea_type"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea_type', '1');
                                    }}
                                    value={formik.values.ea_type}>1</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea_type', '2')
                                    }}
                                    value={formik.values.ea_type}>2</MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('ea_type', '3');
                                    }}
                                    value={formik.values.ea_type}>3</MenuItem>
                            </Select>

                            {formik.touched.ea_type && formik.errors.ea_type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.ea_type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>

                <Button
                    fullWidth={true}
                    disableElevation={true}
                    size="large"
                    variant="contained"
                    type="submit"
                    sx={{textTransform: "none"}}>
                    Create New Geographic Area
                </Button>
            </form>
        </Box>
    )
}

GeographicAreaForm.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default GeographicAreaForm;