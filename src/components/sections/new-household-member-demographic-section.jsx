import {Box, Divider, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import NewHouseholdMemberDemographyForm from "../forms/new-household-member-demography-form.jsx";
import {selectPersons} from "../../redux/features/household-members/household-members-slice.js";

const NewHouseholdMemberDemographicSection = () => {

    const {roster} = useSelector(selectPersons);

    return (
        <Box>
            <Box>
                <SectionHeader title="Demographic"/>
                <Typography
                    variant="h6"
                    sx={{color: "text.secondary"}}>
                    Answer for all former household members 15 years and older who have been living continuously for 6
                    months or more outside Ghana (or intend to do so).
                </Typography>

                <Divider variant="fullWidth" sx={{my: 4}}/>
                <NewHouseholdMemberDemographyForm name={roster.name}/>
            </Box>
        </Box>
    )
}

export default NewHouseholdMemberDemographicSection;