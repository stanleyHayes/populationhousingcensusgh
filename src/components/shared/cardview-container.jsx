import { Grid2 as Grid } from '@mui/material';
import HouseholdCard from './household-card.jsx';
import PropTypes from "prop-types";

const CardViewContainer = ({ households }) => {
    return (
        <Grid container spacing={2}>
            {households.map((household, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <HouseholdCard household={household} />
                </Grid>
            ))}
        </Grid>
    );
};

CardViewContainer.propTypes = {
    households: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired
};

export default CardViewContainer;
