import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    Grid2 as Grid,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';
import PropTypes from "prop-types";
import {DeleteForeverOutlined, EditOutlined, VisibilityOutlined} from "@mui/icons-material";

const GeographicAreaCard = ({geographicArea}) => {


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
                                <strong>Region Name:</strong> {geographicArea.region_name}
                            </Typography>
                            <Chip label={geographicArea.region_code} size="small"/>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>District Name:</strong> {geographicArea.district_name}
                            </Typography>
                            <Chip label={geographicArea.district_code} size="small"/>
                        </Stack>

                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                <strong>Locality:</strong> {geographicArea.locality_name}
                            </Typography>
                            <Chip label={geographicArea.locality_code} size="small"/>
                        </Stack>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Stack direction="row" spacing={1}>
                            <Chip label={geographicArea.ea_code} size="small"/>
                            <Chip label={geographicArea.ea_type} size="small"/>
                        </Stack>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider variant="fullWidth" sx={{my: 1}}/>
            <CardActions>
                <Grid container={true} spacing={1}>
                    <Grid size={{xs: 12, md: 4}}>
                        <Tooltip title={`View details of geographic area in ${geographicArea.region_name}`}>
                            <Button
                                onClick={() => {
                                    setAddGeographicAreaDialogOpen(true)
                                }}
                                sx={{borderRadius: 0.25}}
                                fullWidth={true}
                                variant="outlined"
                                size="large"
                                color="error"
                                endIcon={<DeleteForeverOutlined/>}>
                                Delete
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <Tooltip title={`View details of geographic area in ${geographicArea.region_name}`}>
                            <Button
                                onClick={() => {
                                }}
                                sx={{borderRadius: 0.25}}
                                fullWidth={true}
                                variant="outlined"
                                size="large"
                                color="primary"
                                endIcon={<EditOutlined/>}>
                                Update
                            </Button>
                        </Tooltip>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}}>
                        <Tooltip title={`View details of geographic area in ${geographicArea.region_name}`}>
                            <Button
                                onClick={() => {

                                }}
                                sx={{borderRadius: 0.25}}
                                fullWidth={true}
                                variant="outlined"
                                size="large"
                                color="secondary"
                                endIcon={<VisibilityOutlined/>}>
                                View Details
                            </Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>

    );
};

GeographicAreaCard.propTypes = {
    geographicArea: PropTypes.shape({
        id: PropTypes.string.isRequired,
        region_name: PropTypes.string.isRequired,
        region_code: PropTypes.string.isRequired,
        district_name: PropTypes.string.isRequired,
        district_code: PropTypes.string.isRequired,
        sub_district_name: PropTypes.string.isRequired,
        sub_district_code: PropTypes.string.isRequired,
        locality_name: PropTypes.string.isRequired,
        locality_code: PropTypes.string.isRequired,
        ea_code: PropTypes.string.isRequired,
        ea_type: PropTypes.string.isRequired
    }).isRequired
};

export default GeographicAreaCard;
