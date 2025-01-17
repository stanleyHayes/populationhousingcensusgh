import {Grid2 as Grid} from '@mui/material';
import PropTypes from "prop-types";
import EmigratedMemberCard from "./emigrated-member-card.jsx";

const EmigratedMemberCardViewContainer = ({emigratedMembers}) => {
    return (
        <Grid container spacing={2}>
            {emigratedMembers.map((emigratedMember, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <EmigratedMemberCard emigratedMember={emigratedMember}/>
                </Grid>
            ))}
        </Grid>
    );
};

EmigratedMemberCardViewContainer.propTypes = {
    emigratedMembers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            year_of_departure: PropTypes.string.isRequired,
            sex: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            destination_country: PropTypes.string.isRequired,
            activity_abroad: PropTypes.string.isRequired,
        })
    ).isRequired
};

export default EmigratedMemberCardViewContainer;
