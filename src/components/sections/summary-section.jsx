import {Box} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";

const SummarySection = () => {
    return (
        <Box>
            <SectionHeader title="Household Summary" />
            <SectionFooter/>
        </Box>
    )
}

export default SummarySection;