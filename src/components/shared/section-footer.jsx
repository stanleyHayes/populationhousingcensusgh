import {Box, Button, Divider, Grid2 as Grid} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {HOUSEHOLD_ACTIONS, selectHousehold} from "../../redux/features/households/household-slice.js";
import {CheckCircleOutlined, ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";

const SectionFooter = ({next = HOUSEHOLD_ACTIONS.next(), previous = HOUSEHOLD_ACTIONS.previous(), submit}) => {

    const {step, totalSteps} = useSelector(selectHousehold);
    const dispatch = useDispatch();

    return (
        <Box>
            <Divider sx={{my: 4}}/>
            <Grid container={true} justifyContent="space-between" spacing={2}>
                <Grid size={{xs: 12, md: "auto"}}>
                    <Button
                        startIcon={<ChevronLeftOutlined/>}
                        fullWidth={true}
                        disabled={step === 0}
                        variant="outlined"
                        color="secondary"
                        onClick={() => dispatch(previous)}>
                        Previous
                    </Button>
                </Grid>
                <Grid size={{xs: 12, md: "auto"}}>
                    {step === totalSteps ? (
                        <Button
                            type="submit"
                            endIcon={<CheckCircleOutlined/>}
                            disabled={step !== totalSteps}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                            fullWidth={true}
                            onClick={() => dispatch(submit)}>
                            Submit
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            endIcon={<ChevronRightOutlined/>}
                            disabled={step === totalSteps}
                            variant="contained"
                            color="primary"
                            disableElevation={true}
                            fullWidth={true}
                            onClick={() => dispatch(next)}>
                            Next
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

SectionFooter.propTypes = {
    next: PropTypes.func.isRequired,
    previous: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
}

export default SectionFooter;