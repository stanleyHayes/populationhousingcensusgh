import {
    Box, Button,
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
import {useDispatch} from "react-redux";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";
import {ErrorOutline, PersonOutline} from "@mui/icons-material";
import PropTypes from "prop-types";

const NewDwellingForm = ({onClose}) => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            dwelling_type: '',
            dwelling_type_code: '',
            outer_wall: '',
            outer_wall_code: '',
            floor: '',
            floor_code: '',
            roof: '',
            roof_code: '',
            tenure_arrangement: '',
            tenure_arrangement_code: '',
            ownership_type: '',
            ownership_type_code: '',
            rooms: {
                total: 0,
                bedroom_count: 0,
                share_room_with_other_household: true,
                total_household_share_with_other_household: 0
            },
            lighting: '',
            water_supply: {
                source_drinking_water: '',
                source_domestic_activities: ''
            },
            cooking_fuel: '',
            cooking_space: '',
            bathing_facility: '',
            toilet_facility: {
                type: '',
                shared: '',
                total: 0,
                total_household_use: 0
            },
            solid_waste_disposal: '',
            liquid_waste_disposal: '',
        },
        onSubmit: (values) => {
            dispatch(HOUSEHOLD_ACTIONS.createHousehold({...values}));
            onClose();
        },
        validationSchema: Yup.object().shape({
            dwelling_type: Yup.string().required('Person name required'),
            outer_wall: Yup.string().required('Field required'),
            floor: Yup.string().required('Field required'),
            roof: Yup.string().required('Field required'),
            tenure_arrangement: Yup.string().required('Field required'),
            ownership_type: Yup.string().required('Field required'),
            rooms: Yup.object().shape({
                total: Yup.number().required('Field required'),
                bedroom_count: Yup.number().required('Field required'),
                share_room_with_other_household: Yup.bool().required('Field required'),
                total_household_share_with_other_household: Yup.number().required('Field required'),
            }),
            lighting: Yup.string().required('Field required'),
            water_supply: Yup.object().shape({
                source_drinking_water: Yup.string().required('Field required'),
                source_domestic_activities: Yup.string().required('Field required'),
            }),
            cooking_fuel: Yup.string().required('Field required'),
            cooking_space: Yup.string().required('Field required'),
            bathing_facility: Yup.string().required('Field required'),
            toilet_facility: Yup.object().shape({
                type: Yup.string().required('Field required'),
                shared: Yup.bool().required('Field required'),
                total: Yup.number().required('Field required'),
                total_household_use: Yup.number().required('Field required'),
            }),
            solid_waste_disposal: Yup.string().required('Field required'),
            liquid_waste_disposal: Yup.string().required('Field required'),
        })
    });

    return (
        <Box>
            <Box sx={{mb: 4}}>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container={true} spacing={2}>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                Type of Dwelling
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    In what type of dwelling does the household live?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                OUTER WALL
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What is the main material of the outer walls of this dwelling?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.outer_wall}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Mud bricks/earth');
                                            formik.setFieldValue('outer_wall_code', '01');
                                        }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Wood');
                                            formik.setFieldValue('outer_wall_code', '02');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Metal sheet/slate/asbestos');
                                            formik.setFieldValue('outer_wall_code', '03');
                                        }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Burnt bricks');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Cement blocks/concrete');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Landcrete');
                                            formik.setFieldValue('outer_wall_code', '07');
                                        }} value="Landcrete">Landcrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Bamboo');
                                            formik.setFieldValue('outer_wall_code', '08');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Palm leaves/Thatch (grass)/Raffia');
                                            formik.setFieldValue('outer_wall_code', '09');
                                        }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                        (grass)/Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.outer_wall && formik.errors.outer_wall && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.outer_wall}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                FLOOR
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="floor">
                                    What is the main material of the floor of this dwelling?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.floor}
                                    label="In what type of dwelling does the household live?"
                                    name="floor"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Earth/Mud');
                                            formik.setFieldValue('floor_code', '1');
                                        }} value="Earth/Mud">Earth/Mud</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Cement/Concrete');
                                            formik.setFieldValue('floor_code', '2');
                                        }} value="Cement/Concrete">Cement/Concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Stone');
                                            formik.setFieldValue('floor_code', '3');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Burnt bricks');
                                            formik.setFieldValue('floor_code', '4');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Wood');
                                            formik.setFieldValue('floor_code', '5');
                                        }} value="Wood">Wood</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Vinyl tiles');
                                            formik.setFieldValue('floor_code', '6');
                                        }} value="Vinyl tiles">Vinyl tiles</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Ceramic/Porcelain/Granite/Marble tiles');
                                            formik.setFieldValue('floor_code', '7');
                                        }} value="Ceramic/Porcelain/Granite/Marble tiles">Ceramic/Porcelain/Granite/Marble
                                        tiles</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('floor', 'Other (Specify)');
                                            formik.setFieldValue('floor_code', '8');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.floor && formik.errors.floor && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.floor}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                ROOF
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="roof">
                                    What is the main material used for the roof?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.roof}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="roof"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Mud/Mud bricks/Earth');
                                            formik.setFieldValue('roof_code', '1');
                                        }} value="Mud/Mud bricks/Earth">Mud/Mud bricks/Earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Wood');
                                            formik.setFieldValue('roof_code', '2');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Metal sheet');
                                            formik.setFieldValue('roof_code', '3');
                                        }} value="Metal sheet">Metal sheet</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Slate/Asbestos');
                                            formik.setFieldValue('roof_code', '4');
                                        }} value="Slate/Asbestos">Slate/Asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Cement/Concrete');
                                            formik.setFieldValue('roof_code', '5');
                                        }} value="Cement/Concrete">Cement/Concrete</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Roofing Tiles');
                                            formik.setFieldValue('roof_code', '6');
                                        }} value="Roofing Tiles">Roofing Tiles</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Bamboo');
                                            formik.setFieldValue('roof_code', '7');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Thatch/Palm leaves or Raffia');
                                            formik.setFieldValue('roof_code', '8');
                                        }} value="Thatch/Palm leaves or Raffia">Thatch/Palm leaves or Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Bamboo');
                                            formik.setFieldValue('roof_code', '9');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('roof', 'Other (Specify)');
                                            formik.setFieldValue('roof_code', '09');
                                        }} value="Other (Specify)a">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.roof && formik.errors.roof && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.roof}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                TENURE/HOLDING ARRANGEMENT
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="tenure_arrangement">
                                    What is the present holding/tenancy arrangement of this
                                    dwelling?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.tenure_arrangement}
                                    label="In what type of dwelling does the household live?"
                                    name="tenure_arrangement"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Owner occupied');
                                            formik.setFieldValue('tenure_arrangement_code', '1');
                                        }} value="Owner occupied">Owner occupied</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Renting');
                                            formik.setFieldValue('tenure_arrangement_code', '2');
                                        }} value="Renting">Renting</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Rent-free');
                                            formik.setFieldValue('tenure_arrangement_code', '3');
                                        }} value="Rent-free">Rent-free</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Perching');
                                            formik.setFieldValue('tenure_arrangement_code', '4');
                                        }} value="Perching">Perching</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Squatting');
                                            formik.setFieldValue('tenure_arrangement_code', '5');
                                        }} value="Squatting">Squatting</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('tenure_arrangement', 'Other (Specify)');
                                            formik.setFieldValue('tenure_arrangement_code', '6');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.tenure_arrangement && formik.errors.tenure_arrangement && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.tenure_arrangement}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                OWNERSHIP TYPE
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="ownership_type">
                                    Who owns the dwelling?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.ownership_type}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="ownership_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Owned by household member');
                                            formik.setFieldValue('ownership_type_code', '1');
                                        }} value="Owned by household member">Owned by household member</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Being purchased (e.g. Mortgage)');
                                            formik.setFieldValue('ownership_type_code', '2');
                                        }} value="Being purchased (e.g. Mortgage)">Being purchased (e.g.
                                        Mortgage)</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Relative not household member');
                                            formik.setFieldValue('ownership_type_code', '3');
                                        }} value="Relative not household member">Relative not household
                                        member</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Other private individual');
                                            formik.setFieldValue('ownership_type_code', '4');
                                        }} value="Other private individual">Other private individual</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Private employer');
                                            formik.setFieldValue('ownership_type_code', '5');
                                        }} value="Private employer">Private employer</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Other private agency');
                                            formik.setFieldValue('ownership_type_code', '6');
                                        }} value="Other private agency">Other private agency</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Public/Government ownership');
                                            formik.setFieldValue('ownership_type_code', '7');
                                        }} value="Public/Government ownership">Public/Government ownership</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('ownership_type', 'Other (Specify)');
                                            formik.setFieldValue('ownership_type_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.ownership_type && formik.errors.ownership_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.ownership_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                ROOMS
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    How many rooms does this household occupy? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                COUNT LIVING, DINING, BEDROOMS
                                BUT NOT BATHROOMS, TOILET & KITCHEN
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    How many of the rooms are used for sleeping? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.outer_wall}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Mud bricks/earth');
                                            formik.setFieldValue('outer_wall_code', '01');
                                        }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Wood');
                                            formik.setFieldValue('outer_wall_code', '02');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Metal sheet/slate/asbestos');
                                            formik.setFieldValue('outer_wall_code', '03');
                                        }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Burnt bricks');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Cement blocks/concrete');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Landcrete');
                                            formik.setFieldValue('outer_wall_code', '07');
                                        }} value="Landcrete">Landcrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Bamboo');
                                            formik.setFieldValue('outer_wall_code', '08');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Palm leaves/Thatch (grass)/Raffia');
                                            formik.setFieldValue('outer_wall_code', '09');
                                        }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                        (grass)/Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.outer_wall && formik.errors.outer_wall && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.outer_wall}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                ROOMS
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    Does the household share this sleeping room with
                                    other households? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                ROOMS
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    How many households, including your
                                    household, share this sleeping room? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.outer_wall}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Mud bricks/earth');
                                            formik.setFieldValue('outer_wall_code', '01');
                                        }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Wood');
                                            formik.setFieldValue('outer_wall_code', '02');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Metal sheet/slate/asbestos');
                                            formik.setFieldValue('outer_wall_code', '03');
                                        }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Burnt bricks');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Cement blocks/concrete');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Landcrete');
                                            formik.setFieldValue('outer_wall_code', '07');
                                        }} value="Landcrete">Landcrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Bamboo');
                                            formik.setFieldValue('outer_wall_code', '08');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Palm leaves/Thatch (grass)/Raffia');
                                            formik.setFieldValue('outer_wall_code', '09');
                                        }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                        (grass)/Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.outer_wall && formik.errors.outer_wall && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.outer_wall}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                LIGHTING
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What is the main source of lighting for your
                                    dwelling?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                WATER SUPPLY
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What is the main source of drinking water for the
                                    household? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.outer_wall}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Mud bricks/earth');
                                            formik.setFieldValue('outer_wall_code', '01');
                                        }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Wood');
                                            formik.setFieldValue('outer_wall_code', '02');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Metal sheet/slate/asbestos');
                                            formik.setFieldValue('outer_wall_code', '03');
                                        }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Burnt bricks');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Cement blocks/concrete');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Landcrete');
                                            formik.setFieldValue('outer_wall_code', '07');
                                        }} value="Landcrete">Landcrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Bamboo');
                                            formik.setFieldValue('outer_wall_code', '08');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Palm leaves/Thatch (grass)/Raffia');
                                            formik.setFieldValue('outer_wall_code', '09');
                                        }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                        (grass)/Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.outer_wall && formik.errors.outer_wall && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.outer_wall}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                WATER SUPPLY
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What is the main source of water used by your
                                    household for other domestic purposes such as
                                    cooking and washing? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                COOKING FUEL
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What is the main source of cooking fuel for this household? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.outer_wall}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Mud bricks/earth');
                                            formik.setFieldValue('outer_wall_code', '01');
                                        }} value="Mud bricks/earth">Mud bricks/earth</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Wood');
                                            formik.setFieldValue('outer_wall_code', '02');
                                        }} value="Wood">Wood</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Metal sheet/slate/asbestos');
                                            formik.setFieldValue('outer_wall_code', '03');
                                        }} value="Metal sheet/slate/asbestos">Metal sheet/slate/asbestos</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Burnt bricks');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Burnt bricks">Burnt bricks</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Stone');
                                            formik.setFieldValue('outer_wall_code', '04');
                                        }} value="Stone">Stone</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Cement blocks/concrete');
                                            formik.setFieldValue('outer_wall_code', '05');
                                        }} value="Cement blocks/concrete">Cement blocks/concrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Landcrete');
                                            formik.setFieldValue('outer_wall_code', '07');
                                        }} value="Landcrete">Landcrete</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Bamboo');
                                            formik.setFieldValue('outer_wall_code', '08');
                                        }} value="Bamboo">Bamboo</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Palm leaves/Thatch (grass)/Raffia');
                                            formik.setFieldValue('outer_wall_code', '09');
                                        }} value="Palm leaves/Thatch (grass)/Raffia">Palm leaves/Thatch
                                        (grass)/Raffia</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('outer_wall', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '10');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.outer_wall && formik.errors.outer_wall && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.outer_wall}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                COOKING SPACE (KITCHEN)
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    What type of cooking space does this household use? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.dwelling_type}
                                    label="In what type of dwelling does the household live?"
                                    name="dwelling_type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Separate house');
                                            formik.setFieldValue('dwelling_type_code', '01');
                                        }} value="Separate house">Separate house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Semi-detached house');
                                            formik.setFieldValue('dwelling_type_code', '02');
                                        }} value="Semi-detached house">Semi-detached house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Flat/Apartment');
                                            formik.setFieldValue('dwelling_type_code', '03');
                                        }} value="Flat/Apartment">Flat/Apartment</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Compound house (rooms)');
                                            formik.setFieldValue('dwelling_type_code', '04');
                                        }} value="Compound house (rooms)">Compound house (rooms)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (same compound)');
                                            formik.setFieldValue('dwelling_type_code', '05');
                                        }} value="Huts/Buildings (same compound)">Huts/Buildings (same
                                        compound)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Huts/Buildings (different compounds)');
                                            formik.setFieldValue('dwelling_type_code', '06');
                                        }} value="Huts/Buildings (different compounds)">Huts/Buildings (different
                                        compounds)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Tent');
                                            formik.setFieldValue('dwelling_type_code', '07');
                                        }} value="Tent">Tent</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Improvised home (kiosk, container)');
                                            formik.setFieldValue('dwelling_type_code', '08');
                                        }} value="Improvised home (kiosk, container)">Improvised home (kiosk,
                                        container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Living quarters attached to office/shop');
                                            formik.setFieldValue('dwelling_type_code', '09');
                                        }} value="Living quarters attached to office/shop">Living quarters attached to
                                        office/shop</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Uncompleted building');
                                            formik.setFieldValue('dwelling_type_code', '10');
                                        }} value="Uncompleted building">Uncompleted building</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('dwelling_type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '11');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>


                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                BATHING FACILITIES
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="bathing_facility">
                                    What type of bathing facility is used by this household?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.bathing_facility}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="bathing_facility"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Own bathroom for exclusive use');
                                            formik.setFieldValue('Own bathroom for exclusive use', '1');
                                        }} value="Own bathroom for exclusive use">Own bathroom for exclusive
                                        use</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Shared separate bathroom in same house');
                                            formik.setFieldValue('outer_wall_code', '2');
                                        }} value="Shared separate bathroom in same house">Shared separate bathroom in
                                        same house</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Private open cubicle');
                                            formik.setFieldValue('outer_wall_code', '3');
                                        }} value="Private open cubicle">Private open cubicle</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Shared open cubicle');
                                            formik.setFieldValue('outer_wall_code', '4');
                                        }} value="Shared open cubicle">Shared open cubicle</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Public bath house');
                                            formik.setFieldValue('outer_wall_code', '5');
                                        }} value="Public bath house">Public bath house</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Bathroom in another house');
                                            formik.setFieldValue('outer_wall_code', '6');
                                        }} value="Bathroom in another house">Bathroom in another house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Open space around house');
                                            formik.setFieldValue('outer_wall_code', '7');
                                        }} value="Open space around house">Open space around house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'In a river, pond, lake or dam');
                                            formik.setFieldValue('outer_wall_code', '8');
                                        }} value="In a river, pond, lake or dam">In a river, pond, lake or
                                        dam</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('bathing_facility', 'Other (Specify)');
                                            formik.setFieldValue('outer_wall_code', '9');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.bathing_facility && formik.errors.bathing_facility && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.bathing_facility}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                TOILET FACILITIES
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="toilet_facility.type">
                                    What type of toilet facility is usually used by the household?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.toilet_facility?.type}
                                    label="In what type of dwelling does the household live?"
                                    name="toilet_facility.type"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'No facility(eg bush/beach/field)');
                                            formik.setFieldValue('dwelling_type_code', '1');
                                        }} value="No facility(eg bush/beach/field)">No facility(eg
                                        bush/beach/field)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'W.C.');
                                            formik.setFieldValue('dwelling_type_code', '2');
                                        }} value="W.C.">W.C.</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'Pit latrine');
                                            formik.setFieldValue('dwelling_type_code', '3');
                                        }} value="Pit latrine">Pit latrine</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'KVIP');
                                            formik.setFieldValue('dwelling_type_code', '4');
                                        }} value="KVIP">KVIP</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'Bucket/Pan');
                                            formik.setFieldValue('dwelling_type_code', '5');
                                        }} value="Bucket/Pan">Bucket/Pan</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'Public toilet(eg WC,KVIP,Pit,Pan)');
                                            formik.setFieldValue('dwelling_type_code', '6');
                                        }} value="Public toilet(eg WC,KVIP,Pit,Pan)">
                                        Public toilet(eg WC,KVIP,Pit,Pan)
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility.type', 'Other (Specify)');
                                            formik.setFieldValue('dwelling_type_code', '7');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.toilet_facility?.type && formik.errors.toilet_facility?.type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.toilet_facility?.type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                TOILET FACILITIES
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="toilet_facility.shared">
                                    Do you share this toilet facility with other households?
                                </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.toilet_facility?.shared}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="outer_wall"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility?.shared', 'Yes, with other household(s) in same house');
                                        }} value="Yes, with other household(s) in same house">Yes, with other
                                        household(s) in same house</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility?.shared', 'Yes, with other household(s) in different house');
                                        }} value="Yes, with other household(s) in different house">Yes, with other
                                        household(s) in different house</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility?.shared', 'Yes, with other household(s) and located in different house');
                                        }} value="Yes, with other household(s) and located in different house">Yes, with
                                        other household(s) and located in different house</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('toilet_facility?.shared', 'No');
                                        }} value="No">No</MenuItem>
                                </Select>
                                {formik.touched.toilet_facility?.shared && formik.errors.toilet_facility?.shared && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.toilet_facility?.shared}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                TOILET FACILITIES
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="toilet_facility.total">
                                    How many households including your household use this
                                    toilet facility?
                                </InputLabel>

                                <OutlinedInput
                                    placeholder="Enter total household using toilet"
                                    type="text"
                                    name="toilet_facility.total"
                                    id="toilet_facility.total"
                                    label="How many households including your household use this toilet facility?"
                                    required={true}
                                    value={formik.values.toilet_facility?.total}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    error={formik.touched.toilet_facility?.total && formik.errors.toilet_facility?.total}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PersonOutline/>
                                        </InputAdornment>
                                    }
                                    endAdornment={
                                        formik.touched.toilet_facility?.total && formik.errors.toilet_facility?.total ? (
                                            <ErrorOutline/>
                                        ) : null
                                    }
                                />

                                {formik.touched.toilet_facility?.total && formik.errors.toilet_facility?.total && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.toilet_facility?.total}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                SOLID WASTE DISPOSAL
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="solid_waste_disposal">
                                    How does the household dispose of rubbish (refuse)? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.solid_waste_disposal}
                                    label="What is the main material of the outer walls of this dwelling?"
                                    name="solid_waste_disposal"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Collected');
                                            formik.setFieldValue('solid_waste_disposal_code', '1');
                                        }} value="Collected">Collected</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Burned by household');
                                            formik.setFieldValue('solid_waste_disposal_code', '2');
                                        }} value="Burned by household">Burned by household</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Public dump (Container)');
                                            formik.setFieldValue('solid_waste_disposal_code', '3');
                                        }} value="Public dump (Container)">Public dump (Container)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Public dump (Open space)');
                                            formik.setFieldValue('solid_waste_disposal_code', '4');
                                        }} value="Public dump (Open space)">Public dump (Open space)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Dumped indiscriminately');
                                            formik.setFieldValue('solid_waste_disposal_code', '5');
                                        }} value="Dumped indiscriminately">Dumped indiscriminately</MenuItem>


                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Buried by household');
                                            formik.setFieldValue('solid_waste_disposal_code', '6');
                                        }} value="Buried by household">Buried by household</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('solid_waste_disposal', 'Other (Specify)');
                                            formik.setFieldValue('solid_waste_disposal_code', '7');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.solid_waste_disposal && formik.errors.solid_waste_disposal && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.solid_waste_disposal}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body2"
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", fontWeight: "bold"}}>
                                LIQUID WASTE DISPOSAL
                            </Typography>
                            <FormControl variant="outlined" fullWidth={true}>
                                <InputLabel sx={{color: "text.secondary"}} htmlFor="name">
                                    How does your household dispose of liquid waste? </InputLabel>
                                <Select
                                    required={true}
                                    fullWidth={true}
                                    value={formik.values.liquid_waste_disposal}
                                    label="In what type of dwelling does the household live?"
                                    name="liquid_waste_disposal"
                                    variant="outlined">
                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Through the sewage system');
                                            formik.setFieldValue('liquid_waste_disposal_code', '1');
                                        }} value="Through the sewage system">Through the sewage system</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Through drainage system into a gutter');
                                            formik.setFieldValue('liquid_waste_disposal_code', '2');
                                        }} value="Through drainage system into a gutter">Through drainage system into a
                                        gutter</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Through drainage into a pit (soak away)');
                                            formik.setFieldValue('liquid_waste_disposal_code', '3');
                                        }} value="Through drainage into a pit (soak away)">Through drainage into a pit
                                        (soak
                                        away)</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Thrown onto the street/outside');
                                            formik.setFieldValue('liquid_waste_disposal_code', '4');
                                        }} value="Thrown onto the street/outside">Thrown onto the
                                        street/outside</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Thrown into gutter');
                                            formik.setFieldValue('liquid_waste_disposal_code', '5');
                                        }} value="Thrown into gutter">Thrown into gutter</MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Thrown onto compound');
                                            formik.setFieldValue('liquid_waste_disposal_code', '6');
                                        }} value="Thrown onto compound">
                                        Thrown onto compound
                                    </MenuItem>

                                    <MenuItem
                                        onClick={() => {
                                            formik.setFieldValue('liquid_waste_disposal', 'Other (Specify)');
                                            formik.setFieldValue('liquid_waste_disposal_code', '7');
                                        }} value="Other (Specify)">Other (Specify)</MenuItem>
                                </Select>
                                {formik.touched.dwelling_type && formik.errors.dwelling_type && (
                                    <Typography variant="body2" color="error">
                                        {formik.errors.dwelling_type}
                                    </Typography>
                                )}
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Grid container={true} spacing={2}>
                <Grid size={{xs: 6}}>
                    <Button
                        onClick={onClose}
                        fullWidth={true}
                        disableElevation={true}
                        size="large"
                        variant="outlined"
                        color="secondary"
                        sx={{textTransform: "none"}}>
                        Cancel
                    </Button>
                </Grid>
                <Grid size={{xs: 6}}>
                    <Button
                        fullWidth={true}
                        disableElevation={true}
                        size="large"
                        variant="contained"
                        type="submit"
                        color="primary"
                        sx={{textTransform: "none"}}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

NewDwellingForm.propTypes = {
    onClose: PropTypes.func.isRequired,
}

export default NewDwellingForm;