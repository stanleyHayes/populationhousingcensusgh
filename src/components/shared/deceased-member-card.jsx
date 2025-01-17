import {Card, CardContent, Chip, Grid2 as Grid, Stack, Typography} from '@mui/material';
import PropTypes from "prop-types";

const DeceasedMember = ({deceasedMember}) => {

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
                                <strong>Name:</strong> {deceasedMember.name}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Age:</strong> {`${deceasedMember.age} years old`}
                            </Typography>
                        </Stack>

                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Gender:</strong> {deceasedMember.sex}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={deceasedMember.had_unnatural_death ? 'Died of accident' : 'Died of natural causes'}
                                size="small"/>
                            {deceasedMember.birth_related_death && (
                                <Chip
                                    label={deceasedMember.birth_related_death ? 'Died of birth related issues' : ''}
                                    size="small"
                                />
                            )}
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

DeceasedMember.propTypes = {
    deceasedMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        had_unnatural_death: PropTypes.bool.isRequired,
        sex: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        birth_related_death: PropTypes.bool.isRequired,
    }).isRequired
};

export default DeceasedMember;
