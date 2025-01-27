import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import EmigrationMembers from "../shared/emigration-members.jsx";
import AddEmigrationMemberDialog from "../dialogs/add-emigration-member-dialog.jsx";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const EmigrationSection = () => {

    const {step, totalSteps, emigration} = useSelector(selectHousehold);

    const [members, setMembers] = useState([...emigration]);
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
        dispatch(HOUSEHOLD_ACTIONS.next());
        console.log(JSON.stringify(members));
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

                    <Box>
                        <Grid container={true} justifyContent="space-between" spacing={2}>
                            <Grid size={{xs: 12, md: "auto"}}>
                                <Button
                                    startIcon={<ChevronLeftOutlined/>}
                                    fullWidth={true}
                                    disabled={step === 0}
                                    variant="outlined"
                                    color="secondary"
                                    onClick={() => dispatch(HOUSEHOLD_ACTIONS.previous())}>
                                    Previous
                                </Button>
                            </Grid>
                            <Grid size={{xs: 12, md: "auto"}}>
                                <Button
                                    onClick={handleSaveEmigration}
                                    endIcon={<ChevronRightOutlined/>}
                                    disabled={step === totalSteps}
                                    variant="contained"
                                    color="primary"
                                    disableElevation={true}
                                    fullWidth={true}>
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            )}

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