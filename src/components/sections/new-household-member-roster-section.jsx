import {Box, Divider, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import NewHouseholdMemberRosterForm from "../forms/new-household-member-roster-form.jsx";

const NewHouseholdMemberRosterSection = () => {
    return (
        <Box>
            <SectionHeader title="Household Roster"/>
            <Box>
                <Typography variant="h6" sx={{color: "text.secondary", mb: 2}}>
                    Usual members and visitors present on census night:
                </Typography>
            </Box>
            <Divider variant="fullWidth" sx={{my: 4}}/>
            <NewHouseholdMemberRosterForm />
        </Box>
    )
}

export default NewHouseholdMemberRosterSection;