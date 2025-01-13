import {Box, Divider, Stack} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import DisabilityForm from "../forms/disability-form.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";

const DisabilitySection = () => {
    const {roster} = useSelector(selectHousehold);
    return (
        <Box>
            <SectionHeader title="Disability"/>
            <Box>
                <Stack direction="column" divider={<Divider variant="fullWidth" sx={{my: 4}}/>} spacing={2}>
                    {roster?.map((member, index) => (
                        <Box key={index}>
                            <DisabilityForm person={member}/>
                        </Box>
                    ))}
                </Stack>
            </Box>
            <SectionFooter/>
        </Box>
    )
}

export default DisabilitySection;