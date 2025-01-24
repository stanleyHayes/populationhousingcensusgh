import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";

const DisabilityDetails = ({disability, header}) => {
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
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(4))}
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
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Sight Disability?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {disability.sight ? 'Yes' : 'No'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Hearing disability?
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{disability.hearing ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Physical Disability?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {disability.physical ? 'Yes' : 'No'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Intellect disability?
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{disability.intellect ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>

                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Emotion Disability?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {disability.emotion ? 'Yes' : 'No'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Speech disability?
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{disability.speech ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>
                    {disability?.other && (
                        <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                            <Grid size={{xs: 12, md: 6}}>
                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                    Other disability?
                                </Typography>
                            </Grid>
                            <Grid size={{xs: 12, md: 6}}>
                                <Typography
                                    variant="body1"
                                    sx={{color: "text.primary"}}>{disability.other}</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}

DisabilityDetails.propTypes = {
    header: PropTypes.element.isRequired,
    disability: PropTypes.shape({
        sight: PropTypes.bool.isRequired,
        hearing: PropTypes.bool.isRequired,
        physical: PropTypes.bool.isRequired,
        intellect: PropTypes.bool.isRequired,
        emotion: PropTypes.bool.isRequired,
        speech: PropTypes.bool.isRequired,
        other: PropTypes.string,
    })
}

export default DisabilityDetails;