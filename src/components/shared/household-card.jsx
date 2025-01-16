import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Chip,
    Divider,
    Grid2 as Grid, Tooltip,
    Typography
} from '@mui/material';
import PropTypes from "prop-types";
import {KeyboardArrowRightOutlined} from "@mui/icons-material";
import moment from "moment";
import {useNavigate} from "react-router";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";
import {useDispatch} from "react-redux";

const HouseholdCard = ({household}) => {
    const {front_page, roster, housing_conditions, agriculture} = household;
    const head = roster.find(member => member.relationship_code === "01") || {};
    const totalMembers = roster.length;
    const males = roster.filter(member => member.sex === "male").length;
    const females = roster.filter(member => member.sex === "female").length;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Card
            sx={{height: "100%", display: "flex", flexDirection: "column", borderRadius: 0.25}}
            variant="contained"
            elevation={0}>
            <CardHeader
                title={
                    <Typography sx={{color: "text.secondary", fontWeight: "bold"}} variant="body1">
                        {head.name || 'Household Head'}
                    </Typography>
                }
                subheader={
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        {`${front_page.house_address}, ${front_page.locality.name}, ${front_page.region.name}`}
                    </Typography>
                }
            />
            <Divider variant="fullWidth" sx={{my: 1}}/>
            <CardContent sx={{flexGrow: 1}}>
                <Grid container={true} spacing={1}>
                    <Grid size={{xs: 12}}>
                        <Typography sx={{color: "text.secondary"}} variant="body2">
                            <strong>Type:</strong> {front_page.residence_type}, {housing_conditions.type}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Typography sx={{color: "text.secondary"}} variant="body2">
                            <strong>Members:</strong> {totalMembers} (Males: {males}, Females: {females})
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Typography sx={{color: "text.secondary"}} variant="body2">
                            <strong>Farming:</strong> {agriculture.farms_crops ? 'Yes' : 'No'}
                        </Typography>
                        {agriculture.farms_crops && (
                            <Chip label={`Main Crop: ${agriculture.crops[0]?.crop_type || 'N/A'}`} size="small"/>
                        )}
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Typography sx={{color: "text.secondary"}} variant="body2">
                            <strong>Lighting:</strong> {housing_conditions.lighting}
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12}}>
                        <Typography sx={{color: "text.secondary"}} variant="body2">
                            <strong>Completed:</strong> {moment(front_page.date_completed).fromNow()}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider variant="fullWidth" sx={{my: 1}}/>
            <CardActions>
                <Tooltip title={`View details of household of ${head.name}`}>
                    <Button
                        onClick={() => {
                            navigate(`/households/${household.id}`);
                            dispatch(HOUSEHOLD_ACTIONS.setHousehold(household))
                        }}
                        sx={{borderRadius: 0.25}}
                        fullWidth={true}
                        variant="outlined"
                        size="large"
                        color="primary"
                        endIcon={<KeyboardArrowRightOutlined/>}>
                        View Details
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

HouseholdCard.propTypes = {
    household: PropTypes.shape({
        id: PropTypes.string.isRequired,
        front_page: PropTypes.shape({
            hometown: PropTypes.string.isRequired,
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
            lighting: PropTypes.string.isRequired
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
            )
        }).isRequired
    }).isRequired
};

export default HouseholdCard;
