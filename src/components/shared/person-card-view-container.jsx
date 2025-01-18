import {Grid2 as Grid} from '@mui/material';
import PropTypes from "prop-types";
import PersonCard from "./person-card.jsx";

const PersonCardViewContainer = ({persons}) => {
    return (
        <Grid container spacing={2}>
            {persons.map((person, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <PersonCard person={person}/>
                </Grid>
            ))}
        </Grid>
    );
};

PersonCardViewContainer.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
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
    ).isRequired
};

export default PersonCardViewContainer;
