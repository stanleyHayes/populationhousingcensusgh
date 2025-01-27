import {
    Autocomplete,
    Box, Button,
    FormControl,
    Grid2 as Grid,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline} from "@mui/icons-material";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {
    selectFisheriesLivestockCodes
} from "../../redux/features/fisheries-livestock-codes/fisheries-livestock-codes-slice.js";

const LivestockFisheriesForm = ({handleFisheriesAdd, onClose}) => {
    const formik = useFormik({
        initialValues: {
            livestock_or_fishery_type: '',
            number: '',
            livestock_fishery_code: '',
        },
        onSubmit: (values, actions) => {
            handleFisheriesAdd(values);
            onClose();
            actions.resetForm();
        },
        validationSchema: Yup.object().shape({
            livestock_or_fishery_type: Yup.string().required('Field required'),
            number: Yup.number().required('Field required'),
            livestock_fishery_code: Yup.number().required('Field required'),
        })
    });

    const {fisheriesLivestockCodes, loading} = useSelector(selectFisheriesLivestockCodes);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 4}} container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 3, lg: 3}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={fisheriesLivestockCodes}
                            value={formik.values.livestock_or_fishery_type.activity} // Ensure the selection is always an object
                            inputValue={formik.values.livestock_or_fishery_type.activity} // Bind input value to selected activity
                            onChange={(event, value) => {
                                if (value) {
                                    formik.setFieldValue("livestock_or_fishery_type", value.activity);
                                    formik.setFieldValue("livestock_fishery_code", value.code);
                                } else {
                                    formik.setFieldValue("livestock_or_fishery_type", "");
                                    formik.setFieldValue("livestock_fishery_code", "");
                                }
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change to update the state
                                const matchedOption = fisheriesLivestockCodes.find(option => option.activity === value);
                                formik.setFieldValue("livestock_or_fishery_type", matchedOption ? matchedOption.activity : value);
                                formik.setFieldValue("livestock_fishery_code", matchedOption ? matchedOption.code : '');
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
                                    name="livestock_or_fishery_type"
                                    id="livestock-or-fishery-type"
                                    fullWidth
                                    label="Search Livestock or Fishery Type"
                                    placeholder="Search Livestock or Fishery Type"
                                />
                            )}
                        />
                    </Grid>

                    <Grid size={{xs: 12, md: 5}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="number">
                                Number
                            </InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="number"
                                name="number"
                                id="number"
                                label="Number"
                                required={true}
                                value={formik.values.number}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.number && formik.errors.number}
                                endAdornment={
                                    formik.touched.number && formik.errors.number ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.number && formik.errors.number && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.number}
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
                    Add Tree
                </Button>
            </form>
        </Box>
    )
}

LivestockFisheriesForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleFisheriesAdd: PropTypes.func.isRequired,
}

export default LivestockFisheriesForm;