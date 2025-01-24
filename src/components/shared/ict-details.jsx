import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";

const ICTDetails = ({ict, header}) => {
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
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Has Phone</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{ict.has_phone ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Has Internet?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>{ict.has_internet ? 'Yes' : 'No'}</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

ICTDetails.propTypes = {
    header: PropTypes.element.isRequired,
    ict: PropTypes.shape({
        has_phone: PropTypes.bool.isRequired,
        has_internet: PropTypes.bool.isRequired,
    })
}

export default ICTDetails;