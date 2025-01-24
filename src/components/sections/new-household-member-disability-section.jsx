import {Box} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";
import NewHouseholdMemberDisabilityForm from "../forms/new-household-member-disability-form.jsx";
import {useSelector} from "react-redux";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";

const NewHouseholdMemberDisabilitySection = () => {
    const {roster, literacy, ict, demography, fertility, disablility} = useSelector(selectPersons);
    return (
        <Box>
            <SectionHeader title="Disability"/>
            <Box>
                <NewHouseholdMemberDisabilityForm name={roster.name}/>
            </Box>
            <SectionFooter
                next={PERSON_ACTION_CREATORS.next()}
                previous={PERSON_ACTION_CREATORS.previous()}
                submit={PERSON_ACTION_CREATORS.createPerson({
                    roster,
                    literacy,
                    ict,
                    demography,
                    fertility,
                    disablility
                })}
            />
        </Box>
    )
}

export default NewHouseholdMemberDisabilitySection;