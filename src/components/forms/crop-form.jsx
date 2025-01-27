import {
    Autocomplete,
    Box, Button,
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
import {useSelector} from "react-redux";
import {selectCropCodes} from "../../redux/features/crop-codes/crop-codes-slice.js";

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
            crop_type: Yup.string().required('Field required'),
            crop_code: Yup.number().required('Field required'),
            farm_size: Yup.number().required('Field required'),
            measurement_unit: Yup.string().required('Field required'),
            cropping_type: Yup.string().required('Field required'),
        })
    });

    const {loading, cropCodes} = useSelector(selectCropCodes);

    console.log(formik.values)
    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 4}} container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={cropCodes}
                            value={formik.values.crop_type.activity} // Ensure the selection is always an object
                            inputValue={formik.values.crop_type.activity} // Bind input value to selected activity
                            onChange={(event, value) => {
                                console.log(value)
                                if (value) {
                                    formik.setFieldValue("crop_type", value.activity);
                                    formik.setFieldValue("crop_code", value.code);
                                } else {
                                    formik.setFieldValue("crop_type", "");
                                    formik.setFieldValue("crop_code", "");
                                }
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change to update the state
                                const matchedOption = cropCodes.find(option => option.activity === value);
                                formik.setFieldValue("crop_type", matchedOption ? matchedOption.activity : value);
                                formik.setFieldValue("crop_code", matchedOption ? matchedOption.code : '');
                            }}
                            getOptionLabel={option => (option?.activity ? option.activity : '')} // Display activity name
                            renderOption={(props, option) => (
                                <li {...props}>
                                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                                        {option.activity} - {option.code}
                                    </Typography>
                                </li>
                            )}
                            renderInput={params => (
                                <TextField
                                    {...params}
                                    name="crop_type"
                                    id="crop-or-tree-planting-type"
                                    fullWidth
                                    label="Search Crop or Tree Planting Type"
                                    placeholder="Search Crop or Tree Planting Type"
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="farm_size">
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
                                htmlFor="measurement_unit">
                                Measurement Unit
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.measurement_unit}
                                name="measurement_unit"
                                label="Measurement Unit"
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
                                    value="Inter Cropping">
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
                <Button
                    fullWidth={true}
                    disableElevation={true}
                    size="large"
                    variant="contained"
                    type="submit"
                    sx={{textTransform: "none"}}>
                    Add Crop
                </Button>
            </form>
        </Box>
    )
}

CropForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleCropAdd: PropTypes.func.isRequired,
}

export default CropForm;