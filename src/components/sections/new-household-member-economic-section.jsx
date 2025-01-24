import {Box, Divider, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useDispatch, useSelector} from "react-redux";
import NewHouseholdMemberEconomicActivityForm from "../forms/new-household-member-economic-activity-form.jsx";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {useEffect, useRef} from "react";

const NewHouseholdMemberEconomicActivitySection = () => {

    const {roster, demography} = useSelector(selectPersons);
    const dispatch = useDispatch();
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current && demography.age < 5) {
            dispatch(PERSON_ACTION_CREATORS.next());
            hasRun.current = true;
        }
    }, [demography.age, dispatch]);

    return (
        <Box>
            <SectionHeader title="Economic Activity"/>
            <Typography sx={{color: "text.secondary"}} variant="h6">
                Should be related to the past 7 days preceding Census Night.
            </Typography>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Box>
                {demography.age >= 5 && (
                    <NewHouseholdMemberEconomicActivityForm name={roster.name}/>
                )}
            </Box>
        </Box>
    )
}

export default NewHouseholdMemberEconomicActivitySection;