import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle,
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
    Select
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectUI, setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {SearchOutlined} from "@mui/icons-material";
import Empty from "../../components/shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import {selectEmigratedHouseholdMembers} from "../../redux/features/emigrated-members/emigrated-members-slice.js";
import {selectRegions} from "../../redux/features/regions/regions-slice.js";
import EmigratedMemberCardViewContainer from "../../components/shared/emigrated-member-card-view-container.jsx";
import EmigratedMemberTableViewContainer from "../../components/shared/emigrated-member-tableview-container.jsx";
import NewEmigratedMemberDialog from "../../components/dialogs/new-emigrated-member-dialog.jsx";

const EmigratedMembersPage = () => {
    const {error, loading, emigratedHouseholdMembers} = useSelector(selectEmigratedHouseholdMembers);
    const {regions} = useSelector(selectRegions);

    const {view} = useSelector(selectUI);
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [sex, setSex] = useState("");
    const [yearOfDeparture, setYearOfDeparture] = useState("");
    const [activityAbroad, setActivityAbroad] = useState("");
    const [activityAbroadCode, setActivityAbroadCode] = useState("");
    const [destinationCountry, setDestinationCountry] = useState("");
    const [destinationCountryCode, setDestinationCountryCode] = useState("");

    useEffect(() => {
        dispatch(setTitle("Emigrated Members"));
        dispatch(setSubtitle("Glass nkoaaaaaa"));
    }, [dispatch]);

    const [addEmigratedMemberDialogOpen, setAddEmigratedMemberDialogOpen] = useState(false);

    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container sx={{pt: 4}}>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Box>
                        <Grid container={true} spacing={2} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 4}}>
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
                            <Grid size={{xs: 12, md: 4}}>
                                <Button
                                    onClick={() => setAddEmigratedMemberDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Add New Emigrated Member
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Grid container={true} spacing={2} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="sex">
                                        Sex
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Sex"
                                        value={sex}
                                        name="sex"
                                        variant="outlined">
                                        <MenuItem onClick={() => {
                                            setSex("Male")
                                        }} value="Male">Male</MenuItem>
                                        <MenuItem onClick={() => {
                                            setSex("Female")
                                        }} value="Female">Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="search">Year of Departure</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Year of Departure"
                                        id="year_of_departure"
                                        type="number"
                                        name="year_of_departure"
                                        label="Year of Departure"
                                        onChange={event => setYearOfDeparture(event.target.value)}
                                        value={yearOfDeparture}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="region_name">
                                        Destination
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Region Name"
                                        value={destinationCountry}
                                        name="distinationCountry"
                                        variant="outlined">
                                        {regions.map(region => {
                                            return (
                                                <MenuItem
                                                    onClick={() => {
                                                        setDestinationCountry(region.name);
                                                        setDestinationCountryCode(region.code);
                                                    }}
                                                    key={region.name}
                                                    value={region.name}>{region.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="activity_abroad">
                                        Activity Abroad
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Activity Abroad"
                                        value={activityAbroad}
                                        name="activity_abroad"
                                        variant="outlined">
                                        <MenuItem
                                            onClick={() => {
                                                setActivityAbroad('Employed');
                                                setActivityAbroadCode('1');
                                            }} value="Employed">Employed</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setActivityAbroad('Unemployed');
                                                setActivityAbroadCode('2');
                                            }} value="Unemployed">Unemployed</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setActivityAbroad('Student');
                                                setActivityAbroadCode('3');
                                            }} value="Student">Student</MenuItem>

                                        <MenuItem
                                            onClick={() => {
                                                setActivityAbroad('Other (Specify)');
                                                setActivityAbroadCode('4');
                                            }} value="Other (Specify)">Other (Specify)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Box>
                            {emigratedHouseholdMembers?.length === 0 && (
                                <Empty
                                    title="No Emigrated Members"
                                    description="Eyaa muntu kwan"
                                    image={empty}
                                    action={
                                        <Button
                                            onClick={() => setAddEmigratedMemberDialogOpen(true)}
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            sx={{textTransform: "none"}}>
                                            Add New Emigrated Member
                                        </Button>
                                    }
                                />
                            )}
                        </Box>

                        {emigratedHouseholdMembers?.length > 0 && (
                            <Box>
                                {view === 'grid' ? (
                                    <EmigratedMemberCardViewContainer
                                        emigratedMembers={emigratedHouseholdMembers}/>
                                ) : (
                                    <EmigratedMemberTableViewContainer
                                        emigratedMembers={emigratedHouseholdMembers}/>
                                )}
                            </Box>
                        )}
                    </Box>
                </Container>
                {addEmigratedMemberDialogOpen && (
                    <NewEmigratedMemberDialog
                        open={addEmigratedMemberDialogOpen}
                        onClose={() => setAddEmigratedMemberDialogOpen(false)}
                    />
                )}
            </Box>
        </Layout>
    )
}

export default EmigratedMembersPage;