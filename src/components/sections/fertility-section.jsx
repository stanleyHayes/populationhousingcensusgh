import {Box, Divider, Stack} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import FertilityForm from "../forms/fertility-form.jsx";
import {useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";

const FertilitySection = () => {
    const {roster} = useSelector(selectHousehold);
    return (
        <Box>
            <SectionHeader title="Fertility: Children ever born & children surviving"/>
            <Stack direction="column" spacing={2} divider={<Divider variant="fullWidth" sx={{my: 4}} />}>
                {roster?.map((member, index) => (
                    <Box key={index}>
                        {member.age >= 12 && member.sex === 'female' && (
                            <FertilityForm person={member}/>
                        )}
                    </Box>
                ))}
            </Stack>
            <SectionFooter/>
        </Box>
    )
}

export default FertilitySection;