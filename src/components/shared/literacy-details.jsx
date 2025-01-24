import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";
import React from "react";

const LiteracyDetails = ({literacy, header}) => {
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
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(2))}
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
                                Read / Write language
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{literacy.language}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Highest Grade Attained
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {literacy.highest_grade_attained}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Attended / Attending school now?
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {literacy.period_attended_school}
                            </Typography>
                        </Grid>
                    </Grid>
                    {literacy.period_attended_school !== 'never' && (
                        <React.Fragment>
                            <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography variant="body2" sx={{color: "text.secondary"}}>
                                        Highest level of school attending / attended
                                    </Typography>
                                </Grid>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography
                                        variant="body1"
                                        sx={{color: "text.primary"}}>
                                        {literacy.highest_level_school}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography variant="body2" sx={{color: "text.secondary"}}>
                                        Highest educational grade attained
                                    </Typography>
                                </Grid>
                                <Grid size={{xs: 12, md: 6}}>
                                    <Typography variant="body1" sx={{color: "text.primary"}}>{literacy.highest_grade_attained}</Typography>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}

LiteracyDetails.propTypes = {
    header: PropTypes.element.isRequired,
    literacy: PropTypes.shape({
        highest_grade_attained: PropTypes.number.isRequired,
        highest_level_school: PropTypes.string.isRequired,
        highest_level_school_code: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired,
        language_code: PropTypes.string.isRequired,
        period_attended_school: PropTypes.string.isRequired,
    })
}

export default LiteracyDetails;