import {Box, Button, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import SectionHeader from "../shared/section-header.jsx";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import MemberDemographyForm from "../forms/member-demography-form.jsx";
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const DemographicSection = () => {

    const {roster, step, totalSteps} = useSelector(selectHousehold);
    const dispatch = useDispatch();

    return (
        <Box>
            <Box>
                <SectionHeader title="Demographic"/>
                <Typography
                    variant="body1"
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

                <Divider variant="fullWidth" sx={{my: 2}}/>

                <Box>
                    <Grid container={true} justifyContent="space-between" spacing={2}>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                startIcon={<ChevronLeftOutlined/>}
                                fullWidth={true}
                                disabled={step === 0}
                                variant="outlined"
                                color="secondary"
                                onClick={() => dispatch(HOUSEHOLD_ACTIONS.previous())}>
                                Previous
                            </Button>
                        </Grid>
                        <Grid size={{xs: 12, md: "auto"}}>
                            <Button
                                onClick={() => dispatch(HOUSEHOLD_ACTIONS.next())}
                                endIcon={<ChevronRightOutlined/>}
                                disabled={step === totalSteps}
                                variant="contained"
                                color="primary"
                                disableElevation={true}
                                fullWidth={true}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default DemographicSection;