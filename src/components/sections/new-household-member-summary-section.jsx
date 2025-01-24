import {Box, Button, Divider, Grid2 as Grid, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {PERSON_ACTION_CREATORS, selectPersons} from "../../redux/features/household-members/household-members-slice.js";
import BasicInfoDetails from "../shared/basic-info-details.jsx";
import DemographyDetails from "../shared/demography-details.jsx";
import LiteracyDetails from "../shared/literacy-details.jsx";
import EconomicActivityDetails from "../shared/economic-activity-details.jsx";
import ICTDetails from "../shared/ict-details.jsx";
import FertilityDetails from "../shared/fertility-details.jsx";
import DisabilityDetails from "../shared/disability-details.jsx";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const NewHouseholdMemberSummarySection = () => {
    const {
        roster,
        literacy,
        ict,
        demography,
        fertility,
        disability,
        economicActivity,
        step,
        totalSteps
    } = useSelector(selectPersons);
    const dispatch = useDispatch();
    return (
        <Box>
            <BasicInfoDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Basic Information
                    </Typography>
                }
                roster={roster}/>
            <Divider sx={{my: 4}} variant="fullWidth"/>

            <DemographyDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Demography
                    </Typography>
                }
                demography={demography}/>
            <Divider sx={{my: 4}} variant="fullWidth"/>

            <LiteracyDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Literacy Information
                    </Typography>
                }
                literacy={literacy}/>
            <Divider sx={{my: 4}} variant="fullWidth"/>

            <EconomicActivityDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Economic Activity Information
                    </Typography>
                }
                economicActivity={economicActivity}/>
            <Divider sx={{my: 4}} variant="fullWidth"/>

            <ICTDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        ICT Information
                    </Typography>
                }
                ict={ict}/>

            <Divider sx={{my: 4}} variant="fullWidth"/>

            <FertilityDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Fertility Information
                    </Typography>
                }
                fertility={fertility}/>
            <Divider sx={{my: 4}} variant="fullWidth"/>

            <DisabilityDetails
                header={
                    <Typography
                        variant="h4"
                        sx={{
                            color: "text.primary",
                            fontSize: {xs: 16, md: 20, lg: 24}
                        }}>
                        Disablility Information
                    </Typography>
                } disability={disability}/>

            <Divider sx={{my: 4}} variant="fullWidth"/>

            <Box>
                <Grid container={true} justifyContent="space-between" spacing={2}>
                    <Grid size={{xs: 12, md: "auto"}}>
                        <Button
                            startIcon={<ChevronLeftOutlined/>}
                            fullWidth={true}
                            disabled={step === 0}
                            variant="outlined"
                            color="secondary"
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.previous())}>
                            Previous
                        </Button>
                    </Grid>
                    <Grid size={{xs: 12, md: "auto"}}>
                        <Button
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.createPerson({
                                roster, literacy, ict, demography, fertility, disability, economicActivity
                            }))}
                            endIcon={<ChevronRightOutlined/>}
                            disabled={step !== totalSteps}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                            fullWidth={true}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default NewHouseholdMemberSummarySection;