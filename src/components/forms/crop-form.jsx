import {
    Box,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import PropTypes from "prop-types";

const CropForm = ({handleCropAdd, onClose}) => {
    const formik = useFormik({
        initialValues: {
            crop_type: '',
            crop_code: '',
            farm_size: '',
            measurement_unit: '',
            measurement_unit_code: '',
            cropping_type: '',
            cropping_type_code: ''
        },
        onSubmit: (values, actions) => {
            handleCropAdd(values);
            onClose();
            actions.resetForm();
        },
        validationSchema: Yup.object().shape({
            crop_type: Yup.string().required('Person name required'),
            crop_code: Yup.number().required('Field required'),
            farm_size: Yup.number().required('Field required'),
            measurement_unit: Yup.string().required('Field required'),
            cropping_type: Yup.string()
                .oneOf([], "Must be one of the following")
                .required('Field required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="crop_type">
                                Type of Crop and Tree Planting
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter Type of Crop and Tree Planting"
                                type="text"
                                name="crop_type"
                                id="crop_type"
                                label="Type of Crop and Tree Planting"
                                required={true}
                                value={formik.values.crop_type}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.crop_type && formik.errors.crop_type}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.crop_type && formik.errors.crop_type ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.crop_type && formik.errors.crop_type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.crop_type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="relationship_to_head">
                                Crop Code
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter Crop Code"
                                type="text"
                                name="crop_code"
                                id="crop_code"
                                label="Crop Code"
                                required={true}
                                value={formik.values.crop_code}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.crop_code && formik.errors.crop_code}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.crop_code && formik.errors.crop_type ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.crop_code && formik.errors.crop_code && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.crop_code}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="sex">
                                Farm Size
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter Farm Size"
                                type="text"
                                name="farm_size"
                                id="farm_size"
                                label="Farm Size"
                                required={true}
                                value={formik.values.farm_size}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.farm_size && formik.errors.farm_size}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.farm_size && formik.errors.farm_size ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.farm_size && formik.errors.farm_size && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.farm_size}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="status">
                                Status
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.measurement_unit}
                                name="measurement_unit"
                                label="Type of Cropping"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('measurement_unit', "Acre")
                                        formik.setFieldValue('measurement_unit_code', '1')
                                    }}
                                    value="Acre">
                                    Acre
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('measurement_unit', "Hectare")
                                        formik.setFieldValue('measurement_unit_code', '2')
                                    }}
                                    value="Hectare">
                                    Hectare
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('measurement_unit', "Pole")
                                        formik.setFieldValue('measurement_unit_code', '3')
                                    }}
                                    value="Pole">
                                    Pole
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('measurement_unit', "Rope")
                                        formik.setFieldValue('measurement_unit_code', '4')
                                    }}
                                    value="Rope">
                                    Rope
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('measurement_unit', "Plot")
                                        formik.setFieldValue('measurement_unit_code', '5')
                                    }}
                                    value="Plot">
                                    Plot
                                </MenuItem>
                            </Select>
                            {formik.touched.measurement_unit && formik.errors.measurement_unit && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.measurement_unit}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="cropping_type">
                                Type of Cropping
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.cropping_type}
                                name="cropping_type"
                                label="Type of Cropping"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('cropping_type', "Mixed Cropping")
                                        formik.setFieldValue('cropping_type_code', '1')
                                    }}
                                    value="Mixed Cropping">
                                    Mixed Cropping
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('cropping_type', "Inter Cropping")
                                        formik.setFieldValue('cropping_type_code', '2')
                                    }}
                                    value="Mixed Cropping">
                                    Inter Cropping
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        formik.setFieldValue('cropping_type', "Mono Cropping")
                                        formik.setFieldValue('cropping_type_code', '3')
                                    }}
                                    value="Mono Cropping">
                                    Mono Cropping
                                </MenuItem>
                            </Select>
                            {formik.touched.cropping_type && formik.errors.cropping_type && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.cropping_type}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

CropForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleCropAdd: PropTypes.func.isRequired,
}

export default CropForm;