import {Card, CardContent, Grid2 as Grid, Stack, Typography} from '@mui/material';
import PropTypes from "prop-types";

const DwellingCard = ({dwelling}) => {
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
                                <strong>Structure Number:</strong> {dwelling.structure_number}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Outer Wall Material:</strong>
                                {dwelling.outer_wall_material}
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Roof Material:</strong> {dwelling.roof_material}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Geographical Area:</strong> {dwelling.geographical_area_id}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    );
};

DwellingCard.propTypes = {
    dwelling: PropTypes.shape({
        id: PropTypes.string.isRequired,
        structure_number: PropTypes.string.isRequired,
        outer_wall_material: PropTypes.string.isRequired,
        roof_material: PropTypes.string.isRequired,
        floor_material: PropTypes.string.isRequired,
        geographical_area_id: PropTypes.string.isRequired
    }).isRequired
};

export default DwellingCard;
