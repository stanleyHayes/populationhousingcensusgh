import {
    Box, Button, Divider,
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
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const HouseholdICTForm = () => {
    const dispatch = useDispatch();
    const {ict, step, totalSteps} = useSelector(selectHousehold);
    const formik = useFormik({
        initialValues: {
            has_fixed_telephone: ict?.has_fixed_telephone,
            has_computer: ict?.has_computer,
        },
        onSubmit: (values) => {
            dispatch(HOUSEHOLD_ACTIONS.saveHouseholdICT(values));
            dispatch(HOUSEHOLD_ACTIONS.next());
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

                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Box>
                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                startIcon={<ChevronLeftOutlined/>}
                                fullWidth={true}
                                disabled={step === 0}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(HOUSEHOLD_ACTIONS.previous())}>
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

export default HouseholdICTForm;