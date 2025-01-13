import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Container, LinearProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import WelcomeSection from "../../components/sections/welcome-section.jsx";
import FrontPageSection from "../../components/sections/front-page-section.jsx";
import HouseholdRosterSection from "../../components/sections/household-roster-section.jsx";
import EmigrationSection from "../../components/sections/emigration-section.jsx";
import DemographicSection from "../../components/sections/demographic-section.jsx";
import LiteracySection from "../../components/sections/literacy-section.jsx";
import EconomicSection from "../../components/sections/economic-section.jsx";
import DisabilitySection from "../../components/sections/disability-section.jsx";
import ICTSection from "../../components/sections/ict-section.jsx";
import FertilitySection from "../../components/sections/fertility-section.jsx";
import HouseholdICTSection from "../../components/sections/household-ict-section.jsx";
import AgricultureSection from "../../components/sections/agricultural-section.jsx";
import HousingConditionsSection from "../../components/sections/housing-conditions-section.jsx";
import SummarySection from "../../components/sections/summary-section.jsx";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import HouseholdAbsenteesSection from "../../components/sections/household-absentees-section.jsx";

const CreateHouseholdPage = () => {
    const {step, error, loading} = useSelector(selectHousehold);

    const renderSection = page => {
        switch (page) {
            case 0:
                return <WelcomeSection/>;
            case 1:
                return <FrontPageSection/>;
            case 2:
                return <HouseholdRosterSection/>;
            case 3:
                return <HouseholdAbsenteesSection/>;
            case 4:
                return <EmigrationSection/>;
            case 5:
                return <DemographicSection/>;
            case 6:
                return <LiteracySection/>;
            case 7:
                return <EconomicSection/>;
            case 8:
                return <DisabilitySection/>;
            case 9:
                return <ICTSection/>;
            case 10:
                return <FertilitySection/>;
            case 11:
                return <HouseholdICTSection/>;
            case 12:
                return <AgricultureSection/>;
            case 13:
                return <HousingConditionsSection/>;
            case 14:
                return <SummarySection/>;
            default:
                return <WelcomeSection/>;
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("New Household"));
        dispatch(setSubtitle("Add a new household"));
    }, [dispatch]);

    return (
        <Layout>
                <Box sx={{mb: 4}}>
                    {loading && <LinearProgress color="secondary" variant="query"/>}
                    <Container maxWidth="lg">
                        {error && (
                            <Alert sx={{mb: 4}} variant="standard" severity="error">
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        )}
                        <Box>
                            {renderSection(step)}
                        </Box>
                    </Container>
                </Box>
        </Layout>
    )
}

export default CreateHouseholdPage;