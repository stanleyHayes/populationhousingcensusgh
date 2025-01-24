import {Button, Card, CardContent, Divider, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {PERSON_ACTION_CREATORS} from "../../redux/features/household-members/household-members-slice.js";

const EconomicActivityDetails = ({economicActivity, header}) => {
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
                            onClick={() => dispatch(PERSON_ACTION_CREATORS.goto(3))}
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
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Working for past 7 days?</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {economicActivity?.is_working ? 'Yes': 'No'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Main engagement
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography
                                variant="body1"
                                sx={{color: "text.primary"}}>
                                {economicActivity?.engagement_form}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Reasons not seeking work
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.reason_not_seeking_work ? economicActivity.reason_not_seeking_work: 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>Establishment Name</Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.establishment_name ? economicActivity.establishment_name: 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Establishment Location
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.establishment_location ? economicActivity.establishment_location : 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Main product or service
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.main_product_or_service ? economicActivity.main_product_or_service : 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Employment Status
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.employment_status ? economicActivity.employment_status : 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Employment Sector
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.employment_sector ? economicActivity.employment_sector : 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container={true} spacing={1} alignItems="center" justifyContent="space-between">
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body2" sx={{color: "text.secondary"}}>
                                Occupation
                            </Typography>
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Typography variant="body1" sx={{color: "text.primary"}}>
                                {economicActivity.occupation ? economicActivity.occupation : 'N/A'}
                            </Typography>
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

EconomicActivityDetails.propTypes = {
    header: PropTypes.element.isRequired,
    economicActivity: PropTypes.shape({
        is_working: PropTypes.bool.isRequired,
        reason_not_seeking_work: PropTypes.string,
        engagement_form: PropTypes.string.isRequired,
        establishment_name: PropTypes.string,
        establishment_location: PropTypes.string,
        main_product_or_service: PropTypes.string,
        main_product_or_service_code: PropTypes.string,
        employment_status: PropTypes.string,
        employment_status_code: PropTypes.string,
        employment_sector: PropTypes.string,
        employment_sector_code: PropTypes.string,
        occupation: PropTypes.string,
        occupation_description: PropTypes.string,
    })
}

export default EconomicActivityDetails;