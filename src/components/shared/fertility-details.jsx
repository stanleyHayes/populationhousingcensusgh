import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";

const FertilityDetails = ({fertility, header}) => {
    const dispatch = useDispatch();
    return (
        <Card variant="contained" elevation={1}>
            <CardContent>
                <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                    <Grid size={{xs: "auto"}}>
                        {header}
                    </Grid>
                    <Grid size={{xs: "auto"}}>
                        <Button
                            sx={{textTransform: "none"}}
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(5))}
                            color="accent"
                            variant="text"
                            size="large">
                            Edit
                        </Button>
                    </Grid>
                </Grid>
                <Divider sx={{my: 2}} variant="fullWidth"/>
                <Stack direction="column" spacing={1}>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Male births in last 12 months
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.born_alive_past_12_months?.male}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Female births in last 12 months
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.born_alive_past_12_months?.female}</Typography>
                        </Grid>
                    </Grid>


                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Surviving male births
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.surviving?.male}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Surviving female births
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.surviving?.female}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Total number of male births
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.birth?.male}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Total number of female births
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{fertility?.birth?.female}</Typography>
                        </Grid>
                    </Grid>

                </Stack>
            </CardContent>
        </Card>
    )
}

FertilityDetails.propTypes = {
    header: PropTypes.element.isRequired,
    fertility: PropTypes.shape({
        born_alive_past_12_months: PropTypes.shape({
            male: PropTypes.number.isRequired,
            female: PropTypes.number.isRequired,
        }),
        surviving: PropTypes.shape({
            male: PropTypes.number.isRequired,
            female: PropTypes.number.isRequired,
        }),
        birth: PropTypes.shape({
            male: PropTypes.number.isRequired,
            female: PropTypes.number.isRequired,
        })
    })
}

export default FertilityDetails;