import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import EmigrationMembers from "../shared/emigration-members.jsx";
import AddEmigrationMemberDialog from "../dialogs/add-emigration-member-dialog.jsx";
import {useDispatch} from "react-redux";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";

const EmigrationSection = () => {

    const [members, setMembers] = useState([]);
    const handleMemberAdd = member => {
        setMembers((prevMembers) => [...prevMembers, {id: members.length + 1, ...member}]);
    }
    const handleMemberRemove = member => {
        setMembers(members.filter(m => m.id !== member.id));
    }

    const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSaveEmigration = () => {
        dispatch(HOUSEHOLD_ACTIONS.saveEmigration(members));
    }

    return (
        <Box>
            <SectionHeader title="Emigration outside the Country"/>
            <Box>
                <Typography variant="h6" sx={{color: "text.secondary", textTransform: 'capitalize'}}>
                    Record the following information on former household members living outside Ghana
                </Typography>
            </Box>
            <Divider variant="fullWidth" sx={{my: 2}}/>
            <Box>
                {members.length === 0 && (
                    <Empty
                        title="No members"
                        description="Click on the button to add emigration members to this household"
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
                                Household emigration members ({members.length})
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

                    <EmigrationMembers members={members} handleMemberRemove={handleMemberRemove}/>

                    <Divider variant="fullWidth" sx={{my: 2}}/>

                    <Grid container={true} spacing={2} justifyContent="space-between">
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={handleSaveEmigration}
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
                <AddEmigrationMemberDialog
                    open={addMemberDialogOpen}
                    onClose={() => setAddMemberDialogOpen(false)}
                    handleMemberAdd={handleMemberAdd}
                />
            )}
        </Box>
    )
}


export default EmigrationSection;