import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useState} from "react";
import Empty from "../shared/empty.jsx";
import empty from "../../assets/images/empty.png";
import DeceasedMembers from "../shared/deceased-members.jsx";
import MortalityDialog from "../dialogs/mortality-dialog.jsx";

const MortalitySection = () => {

    const [members, setMembers] = useState([]);
    const handleMemberAdd = member => {
        setMembers((prevMembers) => [...prevMembers, {id: members.length + 1, ...member}]);
    }
    const handleMemberRemove = member => {
        setMembers(members.filter(m => m.id !== member.id));
    }

    const [addMemberDialogOpen, setAddMemberDialogOpen] = useState(false);

    return (
        <Box>
            <SectionHeader title="Mortality"/>
            <Box>
                <Typography variant="body2" align="center" sx={{color: "text.primary", fontWeight: "bold"}}>
                    RECORD THE FOLLOWING INFORMATION FOR EACH MEMBER WHO DIED DURING THE PAST 12 MONTHS
                </Typography>
            </Box>
            <Box>
                {members.length === 0 && (
                    <Empty
                        title="No members"
                        description="Click on the button to add deceased members who died during the past 12 months"
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
                                Deceased members ({members.length})
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

                    <DeceasedMembers members={members} handleMemberRemove={handleMemberRemove}/>
                </Box>
            )}
            <SectionFooter/>

            {addMemberDialogOpen && (
                <MortalityDialog
                    open={addMemberDialogOpen}
                    onClose={() => setAddMemberDialogOpen(false)}
                    handleMemberAdd={handleMemberAdd}
                />
            )}
        </Box>
    )
}

export default MortalitySection;