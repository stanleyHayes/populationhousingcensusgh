import {
    Autocomplete,
    Box, Button,
    Divider,
    FormControl,
    FormControlLabel,
    Grid2 as Grid,
    Radio,
    RadioGroup,
    Stack, TextField,
    Typography
} from "@mui/material";
import {useFormik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {useDispatch, useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useState} from "react";

const NewHouseholdMemberICTForm = ({name}) => {
    const dispatch = useDispatch();
    const {step, totalSteps, ict} = useSelector(selectPersons);
    const formik = useFormik({
        initialValues: {
            has_phone: ict?.has_phone,
            has_internet: ict?.has_internet,
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveICT(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            has_phone: Yup.bool().required('Field required'),
            has_internet: Yup.bool().required('Field required'),
        })
    });

    const {households, loading} = useSelector(selectHousehold);

    const [household, setHousehold] = useState(null);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid  container={true} spacing={2}>
                    <Grid size={{xs: 12}}>
                        <Autocomplete
                            fullWidth
                            loading={loading}
                            options={households}
                            value={household || {

                            }} // Ensure district is always an object
                            inputValue={household?.name || ''} // Bind the input value to district.name
                            onChange={(event, value) => {
                                // Set the entire district object when a value is selected
                                setHousehold(value || {name: '', code: ''});
                            }}
                            onInputChange={(event, value) => {
                                // Handle input change for free text and update only the name
                                const matchedOption = households.find(option => option.name === value);
                                setHousehold(matchedOption || {name: value, code: ''});
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
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Does {name} own a mobile phone?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.has_phone}
                                name="has_phone">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_phone', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_phone', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_phone && formik.errors.has_phone && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_phone}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Does {name} own a mobile phone?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.has_internet}
                                name="has_internet">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_internet', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('has_internet', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.has_internet && formik.errors.has_internet && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.has_internet}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>

                <Box>
                    <Divider sx={{my: 4}}/>
                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                startIcon={<ChevronLeftOutlined/>}
                                fullWidth={true}
                                disabled={step === 0}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(PERSON_ACTION_CREATORS.previous())}>
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

NewHouseholdMemberICTForm.propTypes = {
    name: PropTypes.string.isRequired,
};


export default NewHouseholdMemberICTForm;