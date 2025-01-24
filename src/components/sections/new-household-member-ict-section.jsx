import {Box} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import NewHouseholdMemberICTForm from "../forms/new-household-member-ict-form.jsx";
import {selectPersons} from "../../redux/features/household-members/household-members-slice.js";

const NewHouseholdMemberICTSection = () => {
    const {roster} = useSelector(selectPersons);
    return (
        <Box>
            <SectionHeader title="ICT for household member"/>
            <NewHouseholdMemberICTForm name={roster.name}/>
        </Box>
    )
}

export default NewHouseholdMemberICTSection;