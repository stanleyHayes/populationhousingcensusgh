import {Box} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import HouseholdICTForm from "../forms/household-ict-form.jsx";

const HouseholdICTSection = () => {
    return (
        <Box>
            <SectionHeader title="Information Communication Techonology (ICT)" />
            <HouseholdICTForm />
            <SectionFooter/>
        </Box>
    )
}

export default HouseholdICTSection;