import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";

const BasicInfoDetails = ({roster, header}) => {
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
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(0))}
                            color="accent"
                            variant="text"
                            size="large">
                            Edit
                        </Button>
                    </Grid>
                </Grid>
                <Divider variant="fullWidth" sx={{my: 2}}/>
                <Stack direction="column" spacing={1}>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Name</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{roster.name}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Relationship to Head</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1"
                                        sx={{color: "text.primary"}}>{roster.relationship_to_head}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Sex</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{roster.sex}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Status</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{roster.status}</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

BasicInfoDetails.propTypes = {
    header: PropTypes.element.isRequired,
    roster: PropTypes.shape({
        name: PropTypes.string.isRequired,
        relationship_to_head: PropTypes.string.isRequired,
        relationship_code: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
    })
}

export default BasicInfoDetails;