import {Box, Divider, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useDispatch, useSelector} from "react-redux";
import NewHouseholdMemberLiteracyForm from "../forms/new-household-member-literacy-form.jsx";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {useEffect, useRef} from "react";

const NewHouseholdMemberLiteracySection = () => {

    const {roster, demography} = useSelector(selectPersons);
    const dispatch = useDispatch();
    const hasRun = useRef(false);

    useEffect(() => {
        if (!hasRun.current && demography.age < 11) {
            dispatch(PERSON_ACTION_CREATORS.next());
            hasRun.current = true;
        }
    }, [demography.age, dispatch]);

    return (
        <Box>
            <SectionHeader title="Literacy"/>
            <Typography
                variant="h6"
                sx={{color: "text.secondary", mb: 4}}>
                Full time Education
            </Typography>

            <Divider variant="fullWidth" sx={{my: 4}}/>
            {demography?.age >= 11 && (
                <NewHouseholdMemberLiteracyForm name={roster.name} age={demography.age}/>
            )}
        </Box>
    )
}

export default NewHouseholdMemberLiteracySection;