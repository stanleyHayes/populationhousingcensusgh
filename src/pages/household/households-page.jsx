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
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import {useEffect, useState} from "react";
import {selectUI, setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import Empty from "../../components/shared/empty.jsx";
import empty from "./../../assets/images/empty.png";
import {useNavigate} from "react-router";
import Stat from "../../components/shared/stat.jsx";
import {BalanceOutlined, Cottage, ElectricBike, LocationCity, SearchOutlined} from "@mui/icons-material";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import {selectDistricts} from "../../redux/features/districts/districts-slice.js";
import HouseholdCardViewContainer from "../../components/shared/household-card-view-container.jsx";
import HouseholdTableviewContainer from "../../components/shared/household-tableview-container.jsx";
import {HELPERS} from "../../utils/helpers.js";

const HouseholdsPage = () => {

    const {households, error, loading} = useSelector(selectHousehold);
    const {ghanaRegions} = useSelector(selectRegions);
    const {districts} = useSelector(selectDistricts);

    const {view} = useSelector(selectUI);

    // number of regions, number of districts, completed / total conducted households, total number of visits
    // search by quest id, filter: region, district, completed / not
    // change view to grid or table

    // graphs: male/female ratio, married/single/divorced, alive/deceased, abroad/living in ghana

    // table data + grid data: number, quest id, status, date started, date completed, location summary,  actions

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { totalVisits, completedCount, totalStarted, totalRegions, totalDistricts } = HELPERS.calculateStats(households || []);

    const [region, setRegion] = useState(null);
    const [district, setDistrict] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(setTitle("Households"));
        dispatch(setSubtitle("Summary of census conducted"));
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
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <Stat
                                    title="Total Regions"
                                    value={totalRegions}
                                    icon={
                                        <Cottage
                                            sx={{
                                                borderRadius: 0.25,
                                                borderStyle: "solid",
                                                borderColor: "icon.secondary",
                                                borderWidth: 1,
                                                backgroundColor: "light.secondary",
                                                padding: 0.5,
                                                fontSize: 32
                                            }}
                                            color="secondary"
                                        />
                                    }
                                />
                            </Grid>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <Stat
                                    title="Total Districts"
                                    value={totalDistricts}
                                    icon={
                                        <LocationCity
                                            sx={{
                                                borderRadius: 0.25,
                                                borderStyle: "solid",
                                                borderColor: "icon.secondary",
                                                borderWidth: 1,
                                                backgroundColor: "light.secondary",
                                                padding: 0.5,
                                                fontSize: 32
                                            }}
                                            color="secondary"
                                        />
                                    }
                                />
                            </Grid>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <Stat
                                    title="Completed"
                                    value={`${completedCount} / ${totalStarted}`}
                                    icon={
                                        <BalanceOutlined
                                            sx={{
                                                borderRadius: 0.25,
                                                borderStyle: "solid",
                                                borderColor: "icon.secondary",
                                                borderWidth: 1,
                                                backgroundColor: "light.secondary",
                                                padding: 0.5,
                                                fontSize: 32
                                            }}
                                            color="secondary"
                                        />
                                    }
                                />
                            </Grid>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <Stat
                                    title="Total Visits"
                                    value={totalVisits}
                                    icon={
                                        <ElectricBike
                                            sx={{
                                                borderRadius: 0.25,
                                                borderStyle: "solid",
                                                borderColor: "icon.secondary",
                                                borderWidth: 1,
                                                backgroundColor: "light.secondary",
                                                padding: 0.5,
                                                fontSize: 32
                                            }}
                                            color="secondary"
                                        />
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider variant="fullWidth" sx={{my: 4}}/>
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
                    </Box>

                    <Divider variant="fullWidth" sx={{my: 4}}/>

                    <Box>
                        {households?.length === 0 && (
                            <Empty
                                title="No Households"
                                description="Ooops!!! No Households have been found."
                                image={empty}
                                action={
                                    <Button
                                        onClick={() => navigate('/household/new')}
                                        fullWidth={true}
                                        disableElevation={true}
                                        size="large"
                                        variant="contained"
                                        type="submit"
                                        sx={{textTransform: "none"}}>
                                        Create New Household
                                    </Button>
                                }
                            />
                        )}
                    </Box>

                    {households?.length > 0 && (
                        <Box>
                            {view === 'grid' ? (
                                <HouseholdCardViewContainer households={households} />
                            ) : (
                                <HouseholdTableviewContainer households={households} />
                            )}
                        </Box>
                    )}

                </Container>
            </Box>
        </Layout>
    )
}

export default HouseholdsPage