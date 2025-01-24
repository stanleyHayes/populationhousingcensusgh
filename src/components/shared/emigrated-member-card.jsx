import {Card, CardContent, Grid2 as Grid, Stack, Typography} from '@mui/material';
import PropTypes from "prop-types";

const EmigratedMemberCard = ({emigratedMember}) => {

    return (
        <Card
            sx={{height: "100%", display: "flex", flexDirection: "column"}}
            variant="contained"
            elevation={0}>
            <CardContent sx={{flexGrow: 1}}>
                <Grid container={true} spacing={1}>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Name:</strong> {emigratedMember.name}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Age:</strong> {`${emigratedMember.age} years old`}
                            </Typography>
                        </Stack>

                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Gender:</strong> {emigratedMember.sex}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Destination Country:</strong> {emigratedMember.destination_country}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Departure Year:</strong> {emigratedMember.year_of_departure}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Activity Abroad:</strong> {emigratedMember.activity_abroad}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

EmigratedMemberCard.propTypes = {
    emigratedMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        year_of_departure: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        destination_country: PropTypes.string.isRequired,
        activity_abroad: PropTypes.string.isRequired,
    }).isRequired
};

export default EmigratedMemberCard;
