import {
    Box,
    FormControl,
    FormControlLabel,
    Grid2 as Grid,
    InputLabel,
    Radio,
    RadioGroup, Stack,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";

const HouseholdICTForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            has_fixed_telephone: false,
            has_computer: false,
        },
        onSubmit: (values) => {
            dispatch(HOUSEHOLD_ACTIONS.saveHouseholdICT({...values}));
        },
        validationSchema: Yup.object().shape({
            has_fixed_telephone: Yup.bool().required('Field required'),
            has_computer: Yup.bool().required('Field required'),
        })
    });

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Does the household have a fixed telephone line at home?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.has_fixed_telephone}
                                name="has_fixed_telephone">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_fixed_telephone', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_fixed_telephone', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_fixed_telephone && formik.errors.has_fixed_telephone && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_fixed_telephone}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Does the household or any member of the household own a desktop or laptop computer?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="destination">
                            </InputLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue={false}
                                value={formik.values.has_computer}
                                name="has_computer">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_computer', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_computer', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_computer && formik.errors.has_computer && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_computer}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

export default HouseholdICTForm;