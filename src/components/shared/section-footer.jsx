import {Box, Button, Divider, Grid2 as Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {CheckCircleOutlined, ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";

const SectionFooter = () => {

    const {step, totalSteps} = useSelector(selectHousehold);
    const dispatch = useDispatch();

    return (
        <Box>
            <Divider sx={{my: 4}}/>
            <Grid container={true} justifyContent="space-between" spacing={2}>
                <Grid size={{xs: 12, md: "auto"}}>
                    <Button
                        startIcon={<ChevronLeftOutlined />}
                        fullWidth={true}
                        disabled={step === 0}
                        variant="outlined"
                        color="secondary"
                        onClick={() => dispatch(HOUSEHOLD_ACTIONS.previous())}>
                        Previous
                    </Button>
                </Grid>
                <Grid size={{xs: 12, md: "auto"}}>
                    {step === totalSteps ? (
                        <Button
                            endIcon={<CheckCircleOutlined />}
                            disabled={step !== totalSteps}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                            fullWidth={true}
                            onClick={() => dispatch(HOUSEHOLD_ACTIONS.createHousehold())}>
                            Submit
                        </Button>
                    ) : (
                        <Button
                            endIcon={<ChevronRightOutlined />}
                            disabled={step === totalSteps}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                            fullWidth={true}
                            onClick={() => dispatch(HOUSEHOLD_ACTIONS.next())}>
                            Next
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

export default SectionFooter;