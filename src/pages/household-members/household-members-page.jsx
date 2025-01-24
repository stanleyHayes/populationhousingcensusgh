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
import {selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import PersonCardViewContainer from "../../components/shared/person-card-view-container.jsx";
import PersonTableviewContainer from "../../components/shared/person-tableview-container.jsx";
import {selectMaritalStatuses} from "../../redux/features/marital-statuses/marital-status-slice.js";
import {selectRelationshipCodes} from "../../redux/features/relationship-codes/relationship-codes-slice.js";
import {selectEducationalLevels} from "../../redux/features/educational-levels/educational-levels-slice.js";
import {useNavigate} from "react-router";

const DeceasedMembersPage = () => {
    const {error, loading, persons} = useSelector(selectPersons);
    const {maritalStatuses} = useSelector(selectMaritalStatuses);
    const {codes} = useSelector(selectRelationshipCodes);
    const {educationalLevels} = useSelector(selectEducationalLevels);
    const {view} = useSelector(selectUI);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [sex, setSex] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [maritalStatusCode, setMaritalStatusCode] = useState("");
    const [education, setEducation] = useState("");
    const [educationCode, setEducationCode] = useState("");
    const [relationshipToHead, setRelationshipToHead] = useState("");
    const [relationshipToHeadCode, setRelationshipToHeadCode] = useState("");
    const [minAge, setMinAge] = useState("");
    const [maxAge, setMaxAge] = useState("");

    useEffect(() => {
        dispatch(setTitle("Household Members"));
        dispatch(setSubtitle("Efie nipa s3e wo a saaaa"));
    }, [dispatch]);

    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container  sx={{pt: 4}}>
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
                                    onClick={() => navigate('/household-member/new')}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Add Household Member
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Grid container={true} spacing={1} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
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
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="marital_status">Marital Status</InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Marital Status"
                                        value={maritalStatus}
                                        name="marital_status"
                                        variant="outlined">
                                        {maritalStatuses.map(maritalStatus => {
                                            return (
                                                <MenuItem
                                                    onClick={() => {
                                                        setMaritalStatus(maritalStatus.name);
                                                        setMaritalStatusCode(maritalStatus.code);
                                                    }}
                                                    key={maritalStatus.name}
                                                    value={maritalStatus.name}>{maritalStatus.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="educational_level">
                                        Educational Level
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Educational Level"
                                        value={education}
                                        name="educational_level"
                                        variant="outlined">
                                        {educationalLevels.map(level => {
                                            return (
                                                <MenuItem
                                                    onClick={() => {
                                                        setEducation(level.name);
                                                        setEducationCode(level.code);
                                                    }}
                                                    key={level.name}
                                                    value={level.name}>{level.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="relationship_to_head">
                                        Relationship to Head
                                    </InputLabel>
                                    <Select
                                        required={true}
                                        fullWidth={true}
                                        label="Relationship to Head"
                                        value={relationshipToHead}
                                        name="relationship_to_head"
                                        variant="outlined">
                                        {codes.map(code => {
                                            return (
                                                <MenuItem
                                                    onClick={() => {
                                                        setRelationshipToHead(code.name);
                                                        setRelationshipToHeadCode(code.code);
                                                    }}
                                                    key={code.name}
                                                    value={code.name}>{code.name}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
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
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
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
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>
                        <Box>
                            {persons?.length === 0 && (
                                <Empty
                                    title="No Household Members"
                                    description="Lonely, hi Mr. lonely"
                                    image={empty}
                                    action={
                                        <Button
                                            onClick={() => navigate('/household-member/new')}
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            sx={{textTransform: "none"}}>
                                            Add New Household Member
                                        </Button>
                                    }
                                />
                            )}
                        </Box>

                        {persons?.length > 0 && (
                            <Box>
                                {view === 'grid' ? (
                                    <PersonCardViewContainer
                                        persons={persons}/>
                                ) : (
                                    <PersonTableviewContainer
                                        persons={persons}/>
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