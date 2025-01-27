import {
    Autocomplete,
    Box,
    Button,
    Divider,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select, TextField,
    Typography
} from "@mui/material";
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
import {selectRelationshipCodes} from "../../redux/features/relationship-codes/relationship-codes-slice.js";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useState} from "react";

const NewHouseholdMemberRosterForm = () => {
    const dispatch = useDispatch();
    const {roster, literacy, ict, demography, fertility, disablility, step, totalSteps} = useSelector(selectPersons);
    const formik = useFormik({
        initialValues: {
            name: roster?.name,
            relationship_to_head: roster?.relationship_to_head,
            relationship_code: roster?.relationship_code,
            sex: roster?.sex,
            status: roster?.status,
        },
        onSubmit: (values) => {
            dispatch(PERSON_ACTION_CREATORS.saveRoster(values));
            dispatch(PERSON_ACTION_CREATORS.next());
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Field required'),
            relationship_code: Yup.string().required('Relationship code name required'),
            relationship_to_head: Yup.string().required('Relationship to head required required'),
            sex: Yup.string().required('Field required'),
            status: Yup.string().required('Field required'),
        })
    });

    const {codes} = useSelector(selectRelationshipCodes);
    const {households, loading} = useSelector(selectHousehold);

    const [household, setHousehold] = useState(null);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid sx={{mb: 2}} container={true} spacing={2}>
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
                    <Grid size={{xs: 12}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="name">Full Name</InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="text"
                                name="name"
                                id="name"
                                label="Full Name"
                                required={true}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.name && formik.errors.name}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.name && formik.errors.name ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.name && formik.errors.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="relationship_to_head">
                                Relationship to head
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.relationship_to_head}
                                name="relationship_to_head"
                                label="Relationship to head"
                                variant="outlined">
                                {codes.map(code => {
                                    return (
                                        <MenuItem
                                            onClick={() => {
                                                formik.setFieldValue('relationship_to_head', code.name)
                                                formik.setFieldValue('relationship_code', code.code)
                                            }
                                            }
                                            key={code.code}
                                            value={code.name}>
                                            {code.name}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.relationship_to_head && formik.errors.relationship_to_head && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.relationship_to_head}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="sex">
                                Sex
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.sex}
                                onChange={formik.handleChange}
                                name="sex"
                                label="Sex"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => formik.setFieldValue('sex', 'Male')}
                                    value="Male">Male</MenuItem>
                                <MenuItem
                                    onClick={() => formik.setFieldValue('sex', 'Female')}
                                    value="Female">Female</MenuItem>
                            </Select>
                            {formik.touched.sex && formik.errors.sex && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sex}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 6}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="status">
                                Status
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.status}
                                name="status"
                                label="Status"
                                variant="outlined">
                                <MenuItem
                                    onClick={() => formik.setFieldValue('status', 'A')}
                                    value="A">A</MenuItem>
                                <MenuItem
                                    onClick={() => formik.setFieldValue('status', 'B')}
                                    value="B">B</MenuItem>
                            </Select>
                            {formik.touched.status && formik.errors.status && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.status}
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
                            {step === totalSteps ? (
                                <Button
                                    type="submit"
                                    endIcon={<CheckCircleOutlined/>}
                                    disabled={step !== totalSteps}
                                    variant="contained"
                                    color="primary"
                                    disableElevation={true}
                                    fullWidth={true}
                                    onClick={() => dispatch(PERSON_ACTION_CREATORS.createPerson({
                                        literacy,
                                        ict,
                                        demography,
                                        fertility,
                                        disablility
                                    }))}>
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

export default NewHouseholdMemberRosterForm;