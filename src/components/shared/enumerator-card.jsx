import {Card, CardContent, Chip, Grid2 as Grid, Stack, Typography, Link} from '@mui/material';
import PropTypes from "prop-types";

const EnumeratorCard = ({enumerator}) => {

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
                                <strong>Name:</strong> {`${enumerator.first_name} ${enumerator.last_name}`}
                            </Typography>
                            <Chip label={enumerator.enumerator_code} size="small"/>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Phone:</strong>
                                <Link
                                    underline="always"
                                    href={`tel://${enumerator.phone}`}>
                                    {enumerator.phone}
                                </Link>
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Supervisor:</strong> {`${enumerator.supervisor_first_name} ${enumerator.supervisor_last_name}`}
                            </Typography>
                            <Chip label={enumerator.supervisor_code} size="small"/>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Supervisor Phone:</strong>
                                <Link
                                    underline="always"
                                    href={`tel://${enumerator.supervisor_phone}`}>
                                    {enumerator.supervisor_phone}
                                </Link>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

EnumeratorCard.propTypes = {
    enumerator: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        enumerator_code: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        supervisor_first_name: PropTypes.string.isRequired,
        supervisor_last_name: PropTypes.string.isRequired,
        supervisor_code: PropTypes.string.isRequired,
        supervisor_phone: PropTypes.string.isRequired,
        supervisor_date: PropTypes.string.isRequired,
    }).isRequired
};

export default EnumeratorCard;
