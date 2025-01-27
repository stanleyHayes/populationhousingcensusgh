import {
    Autocomplete,
    Box,
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
import {useDispatch, useSelector} from "react-redux";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useState} from "react";

const NewHouseholdMemberDisabilityForm = ({name}) => {
    const dispatch = useDispatch();
    const {disability} = useSelector(selectPersons);
    const formik = useFormik({
        initialValues: {
            sight: disability?.sight,
            hearing: disability?.hearing,
            physical: disability?.physical,
            intellect: disability?.intellect,
            emotion: disability?.emotion,
            speech: disability?.speech,
            other: disability?.other,
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveDisability(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            sight: Yup.bool().required('Person name required'),
            hearing: Yup.bool().required('Field required'),
            physical: Yup.bool().required('Field required'),
            intellect: Yup.bool().required('Field required'),
            emotion: Yup.bool().required('Field required'),
            speech: Yup.bool().required('Person name required'),
            other: Yup.bool(),
        })
    });

    const {households, loading} = useSelector(selectHousehold);

    const [household, setHousehold] = useState(null);

    return (
        <Box>
            <Typography
                variant="body2"
                sx={{color: "text.secondary", mb: 2}}>
                Does {name} have any serious disablilty that limits his/her full participation in life activities
                (such as mobility,
                work, social life, etc)?
            </Typography>

            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
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
                            sx={{color: "text.secondary"}}>
                            Sight
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.sight}
                                name="sight">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('sight', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('sight', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />

                                </Stack>
                            </RadioGroup>
                            {formik.touched.sight && formik.errors.sight && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sight}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Hearing
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.hearing}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="hearing">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('hearing', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('hearing', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.hearing && formik.errors.hearing && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.hearing}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Physical
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.physical}
                                name="physical">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('physical', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('physical', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.physical && formik.errors.physical && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.physical}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Intellect
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.intellect}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="intellect">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('intellect', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('intellect', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.intellect && formik.errors.intellect && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.intellect}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Emotion
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.emotion}
                                name="emotion">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('emotion', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('emotion', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.emotion && formik.errors.emotion && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.emotion}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            Speech
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={formik.values.speech}
                                name="speech">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('speech', true)}
                                        value={true}
                                        control={<Radio/>}
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('speech', false)}
                                        value={false}
                                        control={<Radio/>}
                                        label="No"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.speech && formik.errors.speech && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.speech}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

NewHouseholdMemberDisabilityForm.propTypes = {
    name: PropTypes.string.isRequired,
}

export default NewHouseholdMemberDisabilityForm;