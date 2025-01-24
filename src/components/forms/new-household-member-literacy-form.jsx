import {
    Box, Button, Divider,
    FormControl,
    FormControlLabel,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Radio,
    RadioGroup,
    Select, Stack,
    Typography
} from "@mui/material";
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {
    CheckCircleOutlined,
    ChevronLeftOutlined,
    ChevronRightOutlined,
    ErrorOutline,
    PersonOutline
} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectEducationalLevels} from "../../redux/features/educational-levels/educational-levels-slice.js";
import {selectLanguages} from "../../redux/features/languages/languages-slice.js";
import PropTypes from "prop-types";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";

const NewHouseholdMemberLiteracyForm = ({name, age}) => {

    const {step, totalSteps, literacy} = useSelector(selectPersons);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            language: literacy?.language,
            language_code: literacy?.language_code,
            period_attended_school: literacy?.period_attended_school,
            highest_level_school: literacy?.highest_level_school,
            highest_level_school_code: literacy?.highest_level_school_code,
            highest_grade_attained: literacy?.highest_grade_attained,
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveLiteracy(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            language: Yup.string().required('Field required'),
            language_code: Yup.string().required('Field required'),
            highest_level_school: Yup.string().required('Field required'),
            highest_grade_attained: Yup.string().required('Field required'),
            period_attended_school: Yup.string().required('Field required'),
        })
    });

    console.log(formik.errors);
    const {educationalLevels} = useSelector(selectEducationalLevels);
    const {languages} = useSelector(selectLanguages);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            In what language can {name} read and write?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="language">
                                Language
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.language}
                                label="Language"
                                name="language"
                                variant="outlined">
                                {languages.map(language => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('language', language.name)
                                                formik.setFieldValue('language_code', language.code)
                                            }}
                                            key={language.code}
                                            value={language.name}>{language.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.language && formik.errors.language && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.language}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 6}}>
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary", mb: 2}}>
                            Has {name} ever attended school or is {name} attending school now?
                        </Typography>
                        <FormControl variant="outlined" fullWidth={true}>
                            <RadioGroup
                                value={formik.values.period_attended_school}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="period_attended_school">
                                <Stack direction="row" spacing={2}>
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('period_attended_school', 'never')}
                                        value='never'
                                        control={<Radio/>}
                                        label="Never"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('period_attended_school', 'now')}
                                        value='now'
                                        control={<Radio/>}
                                        label="Now"
                                    />
                                    <FormControlLabel
                                        onClick={() => formik.setFieldValue('period_attended_school', 'past')}
                                        value='past'
                                        control={<Radio/>}
                                        label="Past"
                                    />
                                </Stack>
                            </RadioGroup>
                            {formik.touched.period_attended_school && formik.errors.period_attended_school && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.period_attended_school}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    {formik.values.period_attended_school !== 'never' && (
                        <React.Fragment>
                            {age > 3 && (
                                <React.Fragment>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary", mb: 2}}>
                                            What is the highest level of schooling {name} is attending
                                            now/attended in the past?
                                        </Typography>

                                        <FormControl variant="outlined" fullWidth={true}>
                                            <InputLabel
                                                sx={{color: "text.secondary"}}
                                                htmlFor="highest_level_school">
                                                Educational Level
                                            </InputLabel>
                                            <Select
                                                required={true}
                                                fullWidth={true}
                                                value={formik.values.highest_level_school}
                                                label="Educational Level"
                                                name="highest_level_school"
                                                variant="outlined">
                                                {educationalLevels.map(level => {
                                                    return (
                                                        <MenuItem
                                                            onClick={() => {
                                                                formik.setFieldValue('highest_level_school', level.name)
                                                                formik.setFieldValue('highest_level_school_code', level.code)
                                                            }}
                                                            key={level.code}
                                                            value={level.name}>{level.name}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                            {formik.touched.highest_level_school && formik.errors.highest_level_school && (
                                                <Typography variant="body2" color="error">
                                                    {formik.errors.highest_level_school}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                    <Grid size={{xs: 12, md: 6}}>
                                        <Typography
                                            variant="body2"
                                            sx={{color: "text.secondary", mb: 2}}>
                                            What is the highest grade (form/class/level){name} has completed at
                                            that level of schooling?
                                        </Typography>
                                        <FormControl variant="outlined" fullWidth={true}>
                                            <InputLabel
                                                sx={{color: "text.secondary"}}
                                                htmlFor="highest_grade_attained">
                                                Highest grade attained
                                            </InputLabel>
                                            <OutlinedInput
                                                placeholder="Enter Highest grade attained"
                                                type="number"
                                                name="highest_grade_attained"
                                                id="highest_grade_attained"
                                                label="Highest grade attained"
                                                required={true}
                                                value={formik.values.highest_grade_attained}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                error={formik.touched.highest_grade_attained && formik.errors.highest_grade_attained}
                                                startAdornment={
                                                    <InputAdornment position="start">
                                                        <PersonOutline/>
                                                    </InputAdornment>
                                                }
                                                endAdornment={
                                                    formik.touched.highest_grade_attained && formik.errors.highest_grade_attained ? (
                                                        <ErrorOutline/>
                                                    ) : null
                                                }
                                            />
                                            {formik.touched.highest_grade_attained && formik.errors.highest_grade_attained && (
                                                <Typography variant="body2" color="error">
                                                    {formik.errors.highest_grade_attained}
                                                </Typography>
                                            )}
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    )}
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
                            {step === totalSteps ? (
                                <Button
                                    type="submit"
                                    endIcon={<CheckCircleOutlined/>}
                                    disabled={step !== totalSteps}
                                    variant="contained"
                                    color="primary"
                                    disableElevation={true}
                                    fullWidth={true}>
                                    Submit
                                </Button>
                            ) : (
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
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </Box>
    )
}

NewHouseholdMemberLiteracyForm.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
};

export default NewHouseholdMemberLiteracyForm;