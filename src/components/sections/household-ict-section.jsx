import {Box} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import HouseholdICTForm from "../forms/household-ict-form.jsx";

const HouseholdICTSection = () => {

    return (
        <Box>
            <SectionHeader title="Information Communication Techonology (ICT)" />
            <HouseholdICTForm />
        </Box>
    )
}

export default HouseholdICTSection;