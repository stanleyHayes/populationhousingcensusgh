import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";
import moment from "moment";

const DemographyDetails = ({demography, header}) => {
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
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(1))}
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
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Date of Birth</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {moment(demography.dob).format('Do MMMM, YYYY')}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Age</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {`${demography.age} years old`}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Ethnicity</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.ethnicity}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Nationality</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.nationality}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Birthplace</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.birthplace}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Religion</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.religion}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Marital Status</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.marital_status}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Living in village / town since birth?
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {demography.is_living_in_town_since_birth ? 'Yes': 'No'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Born in village / town?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.born_in_village ? 'Yes': 'No'}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Years lived in village / Town</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.years_lived_in_village}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Living in village / Town since birth?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>{demography.is_living_in_town_since_birth ? 'Yes': 'No'}</Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

DemographyDetails.propTypes = {
    header: PropTypes.element.isRequired,
    demography: PropTypes.shape({
        dob: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        ethnicity: PropTypes.string.isRequired,
        ethnicity_code: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        nationality_code: PropTypes.string.isRequired,
        birthplace: PropTypes.string.isRequired,
        religion: PropTypes.string.isRequired,
        religion_code: PropTypes.string.isRequired,
        marital_status: PropTypes.string.isRequired,
        marital_status_code: PropTypes.string.isRequired,
        is_living_in_town_since_birth: PropTypes.bool.isRequired,
        born_in_village: PropTypes.string.isRequired,
        years_lived_in_village: PropTypes.string.isRequired,
    })
}

export default DemographyDetails;