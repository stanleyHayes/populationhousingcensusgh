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
import {useSelector} from "react-redux";
import {selectRelationshipCodes} from "../../redux/features/relationship-codes/relationship-codes-slice.js";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import PropTypes from "prop-types";

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
            livestock_or_fishery_type: Yup.string().required('Person name required'),
            number: Yup.number().required('Field required'),
            livestock_fishery_code: Yup.number().required('Field required'),
        })
    });

    const {codes} = useSelector(selectRelationshipCodes);
    const {regions} = useSelector(selectRegions);

    return (
        <Box>
            <form onSubmit={formik.handleSubmit}>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 5}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="name">Full name</InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="text"
                                name="name"
                                id="name"
                                label="Name"
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
                    <Grid size={{xs: 12, md: 3}}>
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
                                variant="outlined">
                                {codes.map(code => {
                                    return (
                                        <MenuItem key={code.code} value={code.code}>{code.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.name && formik.errors.name && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.name}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 2}}>
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
                                name="sex"
                                variant="outlined">
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                            {formik.touched.sex && formik.errors.sex && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.sex}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 2}}>
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
                                variant="outlined">
                                <MenuItem value="A">A</MenuItem>
                                <MenuItem value="B">B</MenuItem>
                                <MenuItem value="C">C</MenuItem>
                            </Select>
                            {formik.touched.status && formik.errors.status && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.status}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                    <Grid size={{xs: 12, md: 3}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel
                                sx={{color: "text.secondary"}}
                                htmlFor="destination">
                                Destination
                            </InputLabel>
                            <Select
                                required={true}
                                fullWidth={true}
                                value={formik.values.destination}
                                name="destination"
                                variant="outlined">
                                {regions.map(region => {
                                    return (
                                        <MenuItem key={region.code} value={region.code}>{region.name}</MenuItem>
                                    )
                                })}
                            </Select>
                            {formik.touched.destination && formik.errors.destination && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.destination}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>

                    <Grid size={{xs: 12, md: 5}}>
                        <FormControl variant="outlined" fullWidth={true}>
                            <InputLabel sx={{color: "text.secondary"}} htmlFor="months_absent">Months
                                Absent</InputLabel>
                            <OutlinedInput
                                placeholder="Enter name of person"
                                type="number"
                                name="months_absent"
                                id="months_absent"
                                label="Months Absent"
                                required={true}
                                value={formik.values.months_absent}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                error={formik.touched.months_absent && formik.errors.months_absent}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PersonOutline/>
                                    </InputAdornment>
                                }
                                endAdornment={
                                    formik.touched.months_absent && formik.errors.months_absent ? (
                                        <ErrorOutline/>
                                    ) : null
                                }
                            />
                            {formik.touched.months_absent && formik.errors.months_absent && (
                                <Typography variant="body2" color="error">
                                    {formik.errors.months_absent}
                                </Typography>
                            )}
                        </FormControl>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}

LivestockFisheriesForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    handleFisheriesAdd: PropTypes.func.isRequired,
}

export default LivestockFisheriesForm;