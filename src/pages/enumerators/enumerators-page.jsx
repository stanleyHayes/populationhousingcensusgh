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
    OutlinedInput,
    TextField
} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {selectUI, setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {SearchOutlined} from "@mui/icons-material";
import Empty from "../../components/shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import {selectEnumerators} from "../../redux/features/enumerators/enumerators-slice.js";
import EnumeratorCardViewContainer from "../../components/shared/enumerator-card-view-container.jsx";
import EnumeratorTableViewContainer from "../../components/shared/enumerator-tableview-container.jsx";
import dayjs from "dayjs";
import {DatePicker} from "@mui/x-date-pickers";
import NewEnumeratorDialog from "../../components/dialogs/new-enumerator-dialog.jsx";

const EnumeratorsPage = () => {
    const {error, loading, enumerators} = useSelector(selectEnumerators);
    const {view} = useSelector(selectUI);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [supervisorCode, setSupervisorCode] = useState("");
    const [enumeratorCode, setEnumeratorCode] = useState("");
    const [hiredDate, setHiredDate] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Enumerators"));
        dispatch(setSubtitle("Guardians of the Galaxy"));
    }, [dispatch]);

    const [addEnumeratorDialogOpen, setAddEnumeratorDialogOpen] = useState(false);
    const [query, setQuery] = useState("");

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
                                    onClick={() => setAddEnumeratorDialogOpen(true)}
                                    fullWidth={true}
                                    disableElevation={true}
                                    size="large"
                                    variant="outlined"
                                    sx={{textTransform: "none", py: 1.7}}>
                                    Add Enumerator
                                </Button>
                            </Grid>
                        </Grid>

                        <Divider variant="fullWidth" sx={{my: 4}}/>

                        <Grid container={true} spacing={1} justifyContent="space-between">
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="first_name">
                                        First Name
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="First Name"
                                        id="first_name"
                                        name="first_name"
                                        label="First Name"
                                        onChange={event => setFirstName(event.target.value)}
                                        value={firstName}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 6, lg: 3}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="last_name">Last Name</InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Last Name"
                                        id="last_name"
                                        name="last_name"
                                        label="Last Name"
                                        onChange={event => setLastName(event.target.value)}
                                        value={lastName}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="supervisor_code">
                                        Supervisor Code
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Supervisor Code"
                                        id="supervisor_code"
                                        name="supervisor_code"
                                        label="Supervisor Code"
                                        onChange={event => setSupervisorCode(event.target.value)}
                                        value={supervisorCode}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel
                                        sx={{color: "text.secondary"}}
                                        htmlFor="enumerator_code">
                                        Enumerator Code
                                    </InputLabel>
                                    <OutlinedInput
                                        fullWidth={true}
                                        placeholder="Enumerator Code"
                                        id="enumerator_code"
                                        name="enumerator_code"
                                        label="Emumerator Code"
                                        onChange={event => setEnumeratorCode(event.target.value)}
                                        value={enumeratorCode}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{xs: 12, md: 4, lg: 2}}>
                                <FormControl variant="outlined" fullWidth={true}>
                                    <InputLabel htmlFor="hired_date">Hired Date</InputLabel>
                                    <DatePicker
                                        label="Date of Birth"
                                        value={hiredDate ? dayjs(hiredDate) : null} // Bind to Formik value, safely handle null
                                        onChange={(date) => {
                                            setHiredDate(date ? date.toISOString() : null); // Save as ISO string or reset
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                name="hired_date"
                                                fullWidth={true}
                                            />
                                        )}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Divider variant="fullWidth" sx={{my: 4}}/>
                        <Box>
                            {enumerators?.length === 0 && (
                                <Empty
                                    title="No Enumerators"
                                    description="All unattended household members will be eaten."
                                    image={empty}
                                    action={
                                        <Button
                                            onClick={() => setAddEnumeratorDialogOpen(true)}
                                            fullWidth={true}
                                            disableElevation={true}
                                            size="large"
                                            variant="contained"
                                            type="submit"
                                            sx={{textTransform: "none"}}>
                                            Add New Enumerator
                                        </Button>
                                    }
                                />
                            )}
                        </Box>

                        {enumerators?.length > 0 && (
                            <Box>
                                {view === 'grid' ? (
                                    <EnumeratorCardViewContainer
                                        enumerators={enumerators}/>
                                ) : (
                                    <EnumeratorTableViewContainer
                                        enumerators={enumerators}/>
                                )}
                            </Box>
                        )}
                    </Box>
                </Container>
                {addEnumeratorDialogOpen && (
                    <NewEnumeratorDialog
                        open={addEnumeratorDialogOpen}
                        onClose={() => setAddEnumeratorDialogOpen(false)}
                    />
                )}
            </Box>
        </Layout>
    )
}

export default EnumeratorsPage;