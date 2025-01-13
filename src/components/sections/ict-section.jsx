import {Box, Divider, Stack} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import ICTMemberForm from "../forms/ict-member-form.jsx";

const ICTSection = () => {
    const {roster} = useSelector(selectHousehold);
    return (
        <Box>
            <SectionHeader title="ICT for household member" />
            <Stack direction="column" spacing={4} divider={<Divider variant="fullWidth" sx={{my: 4}} />}>
                {roster?.map((member, index) => (
                    <Box key={index}>
                        <ICTMemberForm person={member}/>
                    </Box>
                ))}
            </Stack>
            <SectionFooter/>
        </Box>
    )
}

export default ICTSection;