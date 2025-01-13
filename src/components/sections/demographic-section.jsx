import {Box, Divider, Stack, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import MemberDemographyForm from "../forms/member-demography-form.jsx";

const DemographicSection = () => {

    const {roster, loading, step} = useSelector(selectHousehold);
    console.log(roster?.length, 'newHousehold.roster', loading, step);
    return (
        <Box>
            <Box>
                <SectionHeader title="Demographic"/>
                <Typography
                    variant="h6"
                    sx={{color: "text.secondary"}}>
                    Answer for all former household members 15 years and older who have been living continuously for 6
                    months or more outside Ghana (or intend to do so).
                </Typography>

                <Divider variant="fullWidth" sx={{my: 4}}/>

                <Stack direction="column" divider={<Divider variant="fullWidth" sx={{my: 8}}/>} spacing={4}>
                    {roster?.map((member, index) => (
                        <MemberDemographyForm key={index} person={member}/>
                    )) || []}
                </Stack>

                <SectionFooter/>
            </Box>
        </Box>
    )
}

export default DemographicSection;