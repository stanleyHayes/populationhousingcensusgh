import {Grid2 as Grid} from '@mui/material';
import PropTypes from "prop-types";
import EnumeratorCard from "./enumerator-card.jsx";

const DwellingCardViewContainer = ({dwellings}) => {
    return (
        <Grid container spacing={2}>
            {dwellings.map((enumerator, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <EnumeratorCard enumerator={enumerator}/>
                </Grid>
            ))}
        </Grid>
    );
};

DwellingCardViewContainer.propTypes = {
    dwellings: PropTypes.arrayOf(
        PropTypes.shape({
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
    ).isRequired
};

export default DwellingCardViewContainer;
