import {Box, Divider, Stack, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import LiteracyForm from "../forms/literacy-form.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";

const LiteracySection = () => {

    const {roster} = useSelector(selectHousehold);

    return (
        <Box>
            <SectionHeader title="Literacy"/>

            <Typography
                variant="h6"
                sx={{color: "text.secondary", mb: 4}}>
                Full time Education
            </Typography>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Stack direction="column" divider={<Divider sx={{my: 8}} variant="fullWidth"/>} spacing={4}>
                {roster?.map((member, index) => (
                    <Box key={index}>
                        {member?.age >= 11 && (
                            <LiteracyForm person={member}/>
                        )}
                    </Box>
                ))}
            </Stack>
            <SectionFooter/>
        </Box>
    )
}

export default LiteracySection;