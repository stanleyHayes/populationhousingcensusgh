import {Box, Divider, Stack, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import EconomicActivityForm from "../forms/economic-activity-form.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";

const EconomicSection = () => {

    const {roster} = useSelector(selectHousehold);

    return (
        <Box>
            <SectionHeader title="Economic Activity"/>
            <Typography sx={{color: "text.secondary"}} variant="h6">
                Should be related to the past 7 days preceding Census Night.
            </Typography>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Box>
                <Stack direction="column" divider={<Divider variant="fullWidth" sx={{my: 4}}/>} spacing={2}>
                    {roster?.map((member, index) => (
                        <Box key={index}>
                            {member.age >= 5 && (
                                <EconomicActivityForm person={member}/>
                            )}
                        </Box>
                    ))}
                </Stack>
            </Box>
            <SectionFooter/>
        </Box>
    )
}

export default EconomicSection;