import {
    Box, Button,
    FormControl,
    FormControlLabel,
    Grid2 as Grid,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {ErrorOutline} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import PropTypes from "prop-types";

const AgricultureActivitiesForm = ({setIsValidated, saveFormValues, isSaved}) => {

    const {agriculture} = useSelector(selectHousehold);

    const formik = useFormik({
        initialValues: {
            farms_crops: agriculture?.farms_crops,
            grows_trees: agriculture?.grows_trees,
            rear_livestock: agriculture?.rear_livestock,
            farms_fish: agriculture?.farms_fish,
            family_farming_count: {
                male: agriculture?.family_farming_count?.male,
                female: agriculture?.family_farming_count?.female
            }
        },
        onSubmit: async (values) => {
            const errors = await formik.validateForm();
            if (Object.keys(errors).length === 0) {
                setIsValidated(true);
                console.log('has been validated')
                saveFormValues(values);
                console.log(values)
            } else {
                console.error("Validation errors:", errors);
            }
        },
        validationSchema: Yup.object().shape({
            farms_crops: Yup.bool().required('Person name required'),
            grows_trees: Yup.bool().required('Field required'),
            rear_livestock: Yup.bool().required('Field required'),
            farms_fish: Yup.bool().required('Field required'),
            family_farming_count: Yup.object().shape({
                male: Yup.number().required('Field required'),
                female: Yup.number().required('Field required'),
            })
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 2}} container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Crop farming (EXCLUDE BACKYARD GARDENING)
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.farms_crops}
                                name="farms_crops">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('farms_crops', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('farms_crops', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.farms_crops && formik.errors.farms_crops && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.farms_crops}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Tree growing
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                onChange={(event, value) => formik.setFieldValue('grows_trees', value === 'true')}
                                value={formik.values.grows_trees}
                                name="grows_trees">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('grows_trees', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('grows_trees', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.grows_trees && formik.errors.grows_trees && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.grows_trees}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Livestock rearing
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.rear_livestock}
                                name="rear_livestock">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('rear_livestock', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('rear_livestock', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.rear_livestock && formik.errors.rear_livestock && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.rear_livestock}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Fish farming
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.farms_fish}
                                name="farms_fish">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('farms_fish', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('farms_fish', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.farms_fish && formik.errors.farms_fish && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.farms_fish}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
                <Box sx={{mb: 2}}>
                    <Typography variant="body2" sx={{color: "text.secondary", mb: 4}}>
                        How many household members cultivate crops or tree plant, rear livestock or breed fish for sale
                        or family gain?
                    </Typography>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="family_farming_count.male">
                                    Male
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of males available"
                                    type="number"
                                    name="family_farming_count.male"
                                    id="family_farming_count.male"
                                    label="Male"
                                    required={true}
                                    value={formik.values.family_farming_count?.male}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.family_farming_count?.male && formik.errors.family_farming_count?.male}
                                    endAdornment={
                                        formik.touched.family_farming_count?.male && formik.errors.family_farming_count?.male ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.family_farming_count?.male && formik.errors.family_farming_count?.male && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.family_farming_count?.male}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="family_farming_count.female">
                                    Female
                                </InputLabel>
                                <OutlinedInput
                                    placeholder="Enter number of females available"
                                    type="number"
                                    name="family_farming_count.female"
                                    id="family_farming_count.female"
                                    label="Female"
                                    required={true}
                                    value={formik.values.family_farming_count?.female}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.family_farming_count?.female && formik.errors.family_farming_count?.female}
                                    endAdornment={
                                        formik.touched.family_farming_count?.female && formik.errors.family_farming_count?.female ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />
                                {formik.touched.family_farming_count?.female && formik.errors.family_farming_count?.female && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.family_farming_count?.female}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>

                <Button
                    type="submit"
                    disabled={isSaved}
                    disableElevation={true}
                    size="large"
                    variant="outlined"
                    sx={{textTransform: "none", py: 1.7}}>
                    {isSaved ? 'Saved': 'Save Values'}
                </Button>

            </form>
        </Box>
    )
}

AgricultureActivitiesForm.propTypes = {
    setIsValidated: PropTypes.func.isRequired,
    saveFormValues: PropTypes.func.isRequired,
    isSaved: PropTypes.bool.isRequired,
}

export default AgricultureActivitiesForm;