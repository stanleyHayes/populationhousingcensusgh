import {Box, Card, CardContent, Divider, Grid2 as Grid, Typography} from '@mui/material';
import PropTypes from "prop-types";

const DetailedHouseholdView = ({household}) => {
    const {front_page, roster, housing_conditions, agriculture, absentees, emigration} = household;

    const totalMembers = roster.length;
    const males = roster.filter(member => member.sex === 'male').length;
    const females = roster.filter(member => member.sex === 'female').length;
    const totalCrops = agriculture.crops?.length || 0;
    const totalLivestock = agriculture.livestock_or_fisheries?.reduce((sum, livestock) => sum + livestock.number, 0) || 0;

    return (
        <Box>
            {/* Stats Section */}
            <Box sx={{marginBottom: 4}}>
                <Typography variant="body1" sx={{color: "text.primary", mb: 2, textTransform: "uppercase"}}>
                    Household Statistics
                </Typography>
                <Grid container={true} spacing={2}>
                    <Grid size={{xs: 12, md: 4, lg: 3}}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography sx={{color: "text.secondary", mb: 2}} variant="body1">
                                    Total Members
                                </Typography>
                                <Typography sx={{color: "text.primary"}} variant="h4">{totalMembers}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 4, lg: 3}}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography sx={{color: "text.secondary", mb: 2}} variant="body1">
                                    Males
                                </Typography>
                                <Typography variant="h4">{males}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 4, lg: 3}}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography sx={{color: "text.secondary", mb: 2}} variant="body1">
                                    Females
                                </Typography>
                                <Typography variant="h4">{females}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 4, lg: 3}}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography sx={{color: "text.secondary", mb: 2}} variant="body1">
                                    Total Crops
                                </Typography>
                                <Typography variant="h4">{totalCrops}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, md: 4, lg: 3}}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography sx={{color: "text.secondary", mb: 2}} variant="body1">
                                    Total Livestock
                                </Typography>
                                <Typography variant="h4">{totalLivestock}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            {/* Household Details */}
            <Typography variant="body1" sx={{color: "text.primary", textTransform: "uppercase"}}>
                Household Details
            </Typography>

            <Divider variant="fullWidth" sx={{my: 2}}/>

            {/* General Information */}
            <Grid container spacing={2} sx={{marginBottom: 4}}>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Household
                            Head:</Typography> {roster.find(member => member.relationship_code === '01')?.name || 'N/A'}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Address:</Typography> {front_page.house_address}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Region:</Typography> {front_page.region.name}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>District:</Typography> {front_page.district.name} ({front_page.district_type.name})
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Residence Type:</Typography> {front_page.residence_type}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Date Started:</Typography> {front_page.date_started}
                    </Typography>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Date Completed:</Typography> {front_page.date_completed}
                    </Typography>
                </Grid>
            </Grid>

            {/* Household Roster */}
            <Typography variant="body1" sx={{color: "text.primary", mb: 2, textTransform: "uppercase"}}>
                Household Members
            </Typography>
            <Grid container spacing={2} sx={{marginBottom: 4}}>
                {roster.map((member, index) => (
                    <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography variant="body1">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Name:</Typography> {member.name}
                                </Typography>
                                <Typography variant="body2">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Age:</Typography> {member.age}
                                </Typography>
                                <Typography variant="body2">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Sex:</Typography> {member.sex}
                                </Typography>
                                <Typography variant="body2">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Relationship:</Typography> {member.relationship_code}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{mb: 4}}>
                {/* Stats Section */}
                <Box>
                    <Typography variant="body1" sx={{color: "text.primary", mb: 2, textTransform: "uppercase"}}>
                        Household Statistics
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid size={{xs: 12, md: 4, lg: 4}}>
                            <Card variant="contained" elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Total Members
                                    </Typography>
                                    <Typography variant="h4">{totalMembers}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{xs: 12, md: 4, lg: 4}}>
                            <Card variant="contained" elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Males
                                    </Typography>
                                    <Typography variant="h4">{males}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={{xs: 12, md: 4, lg: 4}}>
                            <Card variant="contained" elevation={0}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Females
                                    </Typography>
                                    <Typography variant="h4">{females}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Absentees */}
                {absentees.length > 0 && (
                    <>
                        <Typography variant="body1" sx={{color: "text.primary", mb: 4, textTransform: "uppercase"}}>
                            Absentees
                        </Typography>
                        <Grid container spacing={2} sx={{marginBottom: 3}}>
                            {absentees.map((absentee, index) => (
                                <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                    <Card variant="contained" elevation={0}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Name:</Typography> {absentee.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Age:</Typography> {absentee.age}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Sex:</Typography> {absentee.sex}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Destination:</Typography> {absentee.destination.town}, {absentee.destination.region}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Months Absent:</Typography> {absentee.months_absent}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}

                {/* Emigration */}
                {emigration.length > 0 && (
                    <>
                        <Typography variant="body1" sx={{color: "text.primary", mb: 4, textTransform: "uppercase"}}>
                            Emigrated Members
                        </Typography>
                        <Grid container spacing={2}>
                            {emigration.map((emigrant, index) => (
                                <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                    <Card variant="contained" elevation={0}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Name:</Typography> {emigrant.name}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Age:</Typography> {emigrant.age}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Sex:</Typography> {emigrant.sex}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Country:</Typography> {emigrant.country_name}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Year of Departure:</Typography> {emigrant.year_of_departure}
                                            </Typography>
                                            <Typography variant="body2">
                                                <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Activity Abroad:</Typography> {emigrant.activity_abroad}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Box>

            {/* Housing Conditions */}
            <Typography variant="body1" sx={{color: "text.primary", mb: 4, textTransform: "uppercase"}}>
                Housing Conditions
            </Typography>
            <Grid container={true} spacing={2} sx={{mb: 4}}>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography variant="body1">
                        <Typography>Type:</Typography> {housing_conditions.type}
                    </Typography>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Outer Wall:</Typography> {housing_conditions.outer_wall}
                    </Typography>
                    <Typography variant="body1">
                        <Typography  display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Floor:</Typography> {housing_conditions.floor}
                    </Typography>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Roof:</Typography> {housing_conditions.roof}
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 6}}>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Lighting:</Typography> {housing_conditions.lighting}
                    </Typography>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Water (Drinking):</Typography> {housing_conditions.water_supply.source_drinking_water}
                    </Typography>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Water (Domestic):</Typography> {housing_conditions.water_supply.source_domestic_activities}
                    </Typography>
                    <Typography variant="body1">
                        <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Toilet:</Typography> {housing_conditions.toilet_facility.type} (Shared: {housing_conditions.toilet_facility.shared ? 'Yes' : 'No'})
                    </Typography>
                </Grid>
            </Grid>

            {/* Agriculture Section */}
            <Typography variant="body1" sx={{color: "text.primary", mb: 4, textTransform: "uppercase"}}>
                Agriculture
            </Typography>
            <Grid container={true} spacing={2}>
                {agriculture.crops?.map((crop, index) => (
                    <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                        <Card variant="contained" elevation={0}>
                            <CardContent>
                                <Typography variant="body1">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Crop Type:</Typography> {crop.crop_type}
                                </Typography>
                                <Typography variant="body2">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Farm Size:</Typography> {crop.farm_size} {crop.measurement_unit}
                                </Typography>
                                <Typography variant="body2">
                                    <Typography display="inline" component="span" variant="body2" sx={{fontWeight: "bold", color: "text.secondary"}}>Cropping Type:</Typography> {crop.cropping_type}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

DetailedHouseholdView.propTypes = {
    household: PropTypes.shape({
        front_page: PropTypes.shape({
            hometown: PropTypes.string.isRequired,
            date_started: PropTypes.string.isRequired,
            region: PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.string.isRequired
            }).isRequired,
            house_address: PropTypes.string.isRequired,
            district: PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.string.isRequired
            }).isRequired,
            district_type: PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.string.isRequired
            }).isRequired,
            locality: PropTypes.shape({
                name: PropTypes.string.isRequired,
                code: PropTypes.string.isRequired
            }).isRequired,
            residence_type: PropTypes.string.isRequired,
            date_completed: PropTypes.string.isRequired
        }).isRequired,
        roster: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                sex: PropTypes.string.isRequired,
                relationship_code: PropTypes.string.isRequired
            })
        ).isRequired,
        housing_conditions: PropTypes.shape({
            type: PropTypes.string.isRequired,
            outer_wall: PropTypes.string.isRequired,
            floor: PropTypes.string.isRequired,
            roof: PropTypes.string.isRequired,
            lighting: PropTypes.string.isRequired,
            water_supply: PropTypes.shape({
                source_drinking_water: PropTypes.string.isRequired,
                source_domestic_activities: PropTypes.string.isRequired
            }).isRequired,
            toilet_facility: PropTypes.shape({
                type: PropTypes.string.isRequired,
                shared: PropTypes.bool.isRequired,
                total: PropTypes.number,
                total_household_use: PropTypes.number
            }).isRequired
        }).isRequired,
        agriculture: PropTypes.shape({
            farms_crops: PropTypes.bool.isRequired,
            crops: PropTypes.arrayOf(
                PropTypes.shape({
                    crop_type: PropTypes.string,
                    crop_code: PropTypes.string,
                    farm_size: PropTypes.number,
                    measurement_unit: PropTypes.string,
                    cropping_type: PropTypes.string
                })
            ),
            livestock_or_fisheries: PropTypes.arrayOf(
                PropTypes.shape({
                    crop_type: PropTypes.string,
                    crop_code: PropTypes.string,
                    farm_size: PropTypes.number,
                    measurement_unit: PropTypes.string,
                    cropping_type: PropTypes.string
                })
            )
        }).isRequired,
        absentees: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                sex: PropTypes.string.isRequired,
                destination: PropTypes.shape({
                    town: PropTypes.string.isRequired,
                    region: PropTypes.string.isRequired,
                    code: PropTypes.string.isRequired
                }).isRequired,
                months_absent: PropTypes.number.isRequired
            })
        ),
        emigration: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                age: PropTypes.number.isRequired,
                sex: PropTypes.string.isRequired,
                relationship_code: PropTypes.string.isRequired,
                country_name: PropTypes.string.isRequired,
                country_code: PropTypes.string.isRequired,
                year_of_departure: PropTypes.number.isRequired,
                activity_abroad: PropTypes.string.isRequired
            })
        )
    }).isRequired
};

export default DetailedHouseholdView;
