import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle,
    Autocomplete,
    Box,
    Button,
    Container,
    Divider,
    FormControl,
    Grid2 as Grid,
    InputAdornment,
    InputLabel,
    LinearProgress,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectDeceasedHouseholds} from "../../redux/features/deceased-members/deceased-members-slice.js";
import {useEffect, useState} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {SearchOutlined} from "@mui/icons-material";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import {selectDistricts} from "../../redux/features/districts/districts-slice.js";
import {useNavigate} from "react-router";

const DeceasedMembersPage = () => {
    const {error, loading} = useSelector(selectDeceasedHouseholds);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [region, setRegion] = useState(null);
    const [district, setDistrict] = useState(null);
    const [query, setQuery] = useState("");

    const {ghanaRegions} = useSelector(selectRegions);
    const {districts} = useSelector(selectDistricts);

    useEffect(() => {
        dispatch(setTitle("Household Members"));
        dispatch(setSubtitle("Efie nipa s3e wo a saaaa"));
    }, [dispatch]);


    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Box>
                        <Grid container={true} spacing={2} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="search">Search</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Search"
                                        type="search"
                                        id="search"
                                        name="search"
                                        label="Search"
                                        onChange={event => setQuery(event.target.value)}
                                        value={query}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SearchOutlined/>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="region.name">
                                        Region Name
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Region Name"
                                        value={region?.name}
                                        name="region.name"
                                        variant="outlined">
                                        {ghanaRegions.map(region => {
                                            return (
                                                <MenuItem
                                                    onClick={() => {
                                                        setRegion(region);
                                                    }}
                                                    key={region.name}
                                                    value={region.name}>{region.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <Autocomplete
                                    fullWidth
                                    loading={loading}
                                    options={districts}
                                    value={district || {
                                        name: '',
                                        code: ''
                                    }} // Ensure district is always an object
                                    inputValue={district?.name || ''} // Bind the input value to district.name
                                    onChange={(event, value) => {
                                        // Set the entire district object when a value is selected
                                        setDistrict(value || {name: '', code: ''});
                                    }}
                                    onInputChange={(event, value) => {
                                        // Handle input change for free text and update only the name
                                        const matchedOption = districts.find(option => option.name === value);
                                        setDistrict(matchedOption || {name: value, code: ''});
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
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <Button
                                    onClick={() => navigate('/household/new')}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Create New Household
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default DeceasedMembersPage;