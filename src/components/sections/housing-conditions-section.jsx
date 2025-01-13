import {Box} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import HousingConditionsForm from "../forms/housing-conditions-form.jsx";

const HousingConditionsSection = () => {
    return (
        <Box>
            <SectionHeader title="Housing Conditions"/>
            <HousingConditionsForm/>
            <SectionFooter/>
        </Box>
    )
}

export default HousingConditionsSection;