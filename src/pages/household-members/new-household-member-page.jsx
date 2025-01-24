import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Container, LinearProgress} from "@mui/material";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import NewHouseholdMemberRosterSection from "../../components/sections/new-household-member-roster-section.jsx";
import NewHouseholdMemberDemographicSection
    from "../../components/sections/new-household-member-demographic-section.jsx";
import NewHouseholdMemberLiteracySection from "../../components/sections/new-household-member-literacy-section.jsx";
import NewHouseholdMemberEconomicSection from "../../components/sections/new-household-member-economic-section.jsx";
import NewHouseholdMemberFertilitySection from "../../components/sections/new-household-member-fertility-section.jsx";
import NewHouseholdMemberICTSection from "../../components/sections/new-household-member-ict-section.jsx";
import NewHouseholdMemberSummarySection from "../../components/sections/new-household-member-summary-section.jsx";
import NewHouseholdMemberDisabilitySection from "../../components/sections/new-household-member-disability-section.jsx";

const NewHouseholdMemberPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Household Member"));
        dispatch(setSubtitle("Congratulations on your latest addition"));
    }, [dispatch]);

    const {loading, error, step, literacy} = useSelector(selectPersons);
    console.log(literacy)

    const renderSection = page => {
        switch (page) {
            case 0:
                return <NewHouseholdMemberRosterSection/>;
            case 1:
                return <NewHouseholdMemberDemographicSection/>;
            case 2:
                return <NewHouseholdMemberLiteracySection/>;
            case 3:
                return <NewHouseholdMemberEconomicSection/>;
            case 4:
                return <NewHouseholdMemberICTSection/>;
            case 5:
                return <NewHouseholdMemberFertilitySection/>;
            case 6:
                return <NewHouseholdMemberDisabilitySection/>;
            case 7:
                return <NewHouseholdMemberSummarySection/>;
            default:
                return <NewHouseholdMemberRosterSection/>;
        }
    }

    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container  sx={{pt: 4}}>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Box sx={{pt: 4}}>
                        {renderSection(step)}
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default NewHouseholdMemberPage