import {Box} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import HousingConditionsForm from "../forms/housing-conditions-form.jsx";

const HousingConditionsSection = () => {
    return (
        <Box>
            <SectionHeader title="Housing Conditions"/>
            <HousingConditionsForm/>
        </Box>
    )
}

export default HousingConditionsSection;