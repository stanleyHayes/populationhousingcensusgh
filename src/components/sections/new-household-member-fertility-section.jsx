import {Box} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useDispatch, useSelector} from "react-redux";
import NewHouseholdMemberFertilityForm from "../forms/new-household-member-fertility-form.jsx";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import {useEffect, useRef} from "react";

const NewHouseholdMemberFertilitySection = () => {
    const {roster, demography} = useSelector(selectPersons);
    const dispatch = useDispatch();
    const hasRun = useRef(false);

    useEffect(() => {
        if(!hasRun.current && demography.age < 12 || roster.sex.toLowerCase() !== 'female'){
            dispatch(PERSON_ACTION_CREATORS.next());
            hasRun.current = true;
        }
    }, [demography.age, dispatch, roster.sex]);

    return (
        <Box>
            <SectionHeader title="Fertility: Children ever born & children surviving"/>
            {demography.age >= 12 && roster.sex === 'female' && (
                <NewHouseholdMemberFertilityForm
                    name={roster.name}
                    age={roster.age}
                    sex={roster.sex}
                />
            )}
        </Box>
    )
}

export default NewHouseholdMemberFertilitySection;