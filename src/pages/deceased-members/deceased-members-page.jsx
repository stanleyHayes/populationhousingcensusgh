import Layout from "../../components/layout/layout.jsx";
import {
    Alert,
    AlertTitle,
    Box, Button,
    Container, Divider,
    FormControl,
    Grid2 as Grid, InputAdornment,
    InputLabel,
    LinearProgress, MenuItem,
    OutlinedInput, Select
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectDeceasedHouseholds} from "../../redux/features/deceased-members/deceased-members-slice.js";
import {useEffect, useState} from "react";
import {selectUI, setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {SearchOutlined} from "@mui/icons-material";
import Empty from "../../components/shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import DeceasedMemberCardViewContainer from "../../components/shared/deceased-member-card-view-container.jsx";
import DeceasedMembersTableViewContainer from "../../components/shared/deceased-member-tableview-container.jsx";

const DeceasedMembersPage = () => {
    const {error, loading, deceasedMembers} = useSelector(selectDeceasedHouseholds);
    const {view} = useSelector(selectUI);
    const dispatch = useDispatch();

    const [query, setQuery] = useState("");
    const [sex, setSex] = useState("");
    const [minAge, setMinAge] = useState("");
    const [maxAge, setMaxAge] = useState("");
    const [causeOfDeath, setCauseOfDeath] = useState("");

    useEffect(() => {
        dispatch(setTitle("Deceased Members"));
        dispatch(setSubtitle("RIP to all lost souls"));
    }, [dispatch]);

    const [addDeceasedMemberDialogOpen, setAddDeceasedMemberDialogOpen] = useState(false);

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
                                    onClick={() => setAddDeceasedMemberDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Add Deceased Member
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
                                    <InputLabel htmlFor="search">Minimum Age</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Minimum Age"
                                        id="min_age"
                                        name="min_age"
                                        label="Minimum Age"
                                        onChange={event => setMinAge(event.target.value)}
                                        value={minAge}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="search">Maximum Age</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Maximum Age"
                                        id="max_age"
                                        name="max_age"
                                        label="Maximum Age"
                                        onChange={event => setMaxAge(event.target.value)}
                                        value={maxAge}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 3, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="sex">
                                        Cause of Death
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Cause of Death"
                                        value={causeOfDeath}
                                        name="cause_of_death"
                                        variant="outlined">
                                        <MenuItem onClick={() => {
                                            setCauseOfDeath("Natural")
                                        }} value="Natural">Natural</MenuItem>
                                        <MenuItem onClick={() => {
                                            setCauseOfDeath("Accident")
                                        }} value="Accident">Accident</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Box>
                            {deceasedMembers?.length === 0 && (
                                <Empty
                                    title="No Deceased Members"
                                    description="Yaaay!!! How fortunate!!!"
                                    image={empty}
                                    action={
                                        <Button
                                            onClick={() => setAddDeceasedMemberDialogOpen(true)}
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            sx={{textTransform: "none"}}>
                                            Add new Deceased Member
                                        </Button>
                                    }
                                />
                            )}
                        </Box>

                        {deceasedMembers?.length > 0 && (
                            <Box>
                                {view === 'grid' ? (
                                    <DeceasedMemberCardViewContainer deceasedMembers={deceasedMembers}/>
                                ) : (
                                    <DeceasedMembersTableViewContainer deceasedMembers={deceasedMembers}/>
                                )}
                            </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default DeceasedMembersPage;