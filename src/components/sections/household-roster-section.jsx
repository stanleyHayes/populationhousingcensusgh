import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "./../../assets/images/empty.png";
import AddMemberDialog from "../dialogs/add-member-dialog.jsx";
import HouseholdRoster from "../shared/household-roster.jsx";
import {useDispatch} from "react-redux";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";

const HouseholdRosterSection = () => {

    const [members, setMembers] = useState([]);
    const handleMemberAdd = member => {
        setMembers((prevMembers) => [...prevMembers, {id: members.length + 1, ...member}]);
    }
    const handleMemberRemove = member => {
        setMembers(members.filter(m => m.id !== member.id));
    }

    const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSaveRoster = () => {
        dispatch(HOUSEHOLD_ACTIONS.saveRoster(members));
    }

    return (
        <Box>
            <SectionHeader title="Household Roster"/>
            <Box>
                <Typography variant="h6" sx={{color: "text.secondary", mb: 2}}>
                    Usual members and visitors present on census night:
                </Typography>
            </Box>
            <Divider variant="fullWidth" sx={{my: 4}}/>
            <Box>
                {members.length === 0 && (
                    <Empty
                        title="No members"
                        description="Click on the button to add members to this household"
                        image={empty}
                        action={
                            <Button
                                onClick={() => setAddMemberDialogOpen(true)}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                sx={{textTransform: "none"}}>
                                Add Member
                            </Button>
                        }
                    />
                )}
            </Box>
            {members.length > 0 && (
                <Box>
                    <Grid sx={{mb: 2}} container={true} spacing={2} justifyContent="space-between">
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                                Household members ({members.length})
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={() => setAddMemberDialogOpen(true)}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                sx={{textTransform: "none"}}>
                                Add Member
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 2}}/>

                    <HouseholdRoster members={members} handleMemberRemove={handleMemberRemove}/>

                    <Divider variant="fullWidth" sx={{my: 2}}/>

                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={handleSaveRoster}
                                fullWidth={true}
                                disableElevation={true}
                                size="large"
                                variant="contained"
                                type="submit"
                                sx={{textTransform: "none"}}>
                                Save Members
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            )}
            <SectionFooter/>

            {addMemberDialogOpen && (
                <AddMemberDialog
                    open={addMemberDialogOpen}
                    onClose={() => setAddMemberDialogOpen(false)}
                    handleMemberAdd={handleMemberAdd}
                />
            )}
        </Box>
    )
}

export default HouseholdRosterSection;