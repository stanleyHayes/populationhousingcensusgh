import {Grid2 as Grid} from '@mui/material';
import PropTypes from "prop-types";
import GeographicAreaCard from "./geographic-area-card.jsx";

const GeographicAreaCardViewContainer = ({geographicAreas}) => {
    return (
        <Grid container spacing={2}>
            {geographicAreas.map((geographicArea, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <GeographicAreaCard geographicArea={geographicArea}/>
                </Grid>
            ))}
        </Grid>
    );
};

GeographicAreaCardViewContainer.propTypes = {
    geographicAreas: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired
};

export default GeographicAreaCardViewContainer;
