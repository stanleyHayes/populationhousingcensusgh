import {Card, CardContent, Grid2 as Grid, Stack, Typography} from '@mui/material';
import PropTypes from "prop-types";

const PersonCard = ({person}) => {

    return (
        <Card
            sx={{height: "100%", display: "flex", flexDirection: "column", borderRadius: 0.25}}
            variant="contained"
            elevation={0}>
            <CardContent sx={{flexGrow: 1}}>
                <Grid container={true} spacing={1}>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Name:</strong> {person.full_name}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Gender:</strong>
                                {person.sex}
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Marital Status:</strong> {person.marital_status}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Nationality:</strong> {person.nationality}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Education:</strong> {person.education}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
}


PersonCard.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        full_name: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        marital_status: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        education: PropTypes.string.isRequired,
        employment_status: PropTypes.string.isRequired,
        relationship_to_head: PropTypes.string.isRequired,
        household: PropTypes.shape({
            household_number: PropTypes.string.isRequired,
            structure_number: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired
};

export default PersonCard;
