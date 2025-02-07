import {Box} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import {selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import BasicInfoDetails from "../shared/basic-info-details.jsx";

const SummarySection = () => {
    const {roster} = useSelector(selectPersons);
    console.log(roster);
    return (
        <Box>
            <SectionHeader title="Household Summary" />
            <BasicInfoDetails roster={roster} />
        </Box>
    )
}

export default SummarySection;