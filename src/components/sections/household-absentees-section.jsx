import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "./../../assets/images/empty.png";
import AddAbsenteeMemberDialog from "../dialogs/add-absentee-member-dialog.jsx";
import Absentees from "../shared/absentees.jsx";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const HouseholdAbsenteesSection = () => {
    const {step, totalSteps, absentees} = useSelector(selectHousehold);

    const [members, setMembers] = useState([...absentees]);
    const handleMemberAdd = member => {
        setMembers((prevMembers) => [...prevMembers, {id: members.length + 1, ...member}]);
    }
    const handleMemberRemove = member => {
        setMembers(members.filter(m => m.id !== member.id));
    }

    const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

    const dispatch = useDispatch();

    const handleSaveAbsentees = () => {
        dispatch(HOUSEHOLD_ACTIONS.saveAbsentees(members));
        dispatch(HOUSEHOLD_ACTIONS.next());
        console.log(JSON.stringify(members));
    }

    return (
        <Box>
            <SectionHeader title="Members Absent"/>
            <Box>
                <Typography variant="h6" sx={{color: "text.secondary"}}>
                    Usual members absent on census night (Status C)
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
                                Household absent members ({members.length})
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

                    <Absentees members={members} handleMemberRemove={handleMemberRemove}/>

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
                                    onClick={handleSaveAbsentees}
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
                <AddAbsenteeMemberDialog
                    open={addMemberDialogOpen}
                    onClose={() => setAddMemberDialogOpen(false)}
                    handleMemberAdd={handleMemberAdd}
                />
            )}
        </Box>
    )
}

export default HouseholdAbsenteesSection;