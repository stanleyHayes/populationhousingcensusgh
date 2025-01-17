import {Grid2 as Grid} from '@mui/material';
import PropTypes from "prop-types";
import DeceasedMemberCard from "./deceased-member-card.jsx";

const DeceasedMemberCardViewContainer = ({deceasedMembers}) => {
    return (
        <Grid container spacing={2}>
            {deceasedMembers.map((deceasedMember, index) => (
                <Grid item size={{xs: 12, md: 6, lg: 4}} key={index}>
                    <DeceasedMemberCard deceasedMember={deceasedMember}/>
                </Grid>
            ))}
        </Grid>
    );
};

DeceasedMemberCardViewContainer.propTypes = {
    deceasedMembers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            had_unnatural_death: false,
            sex: PropTypes.string.isRequired,
            age: PropTypes.string.isRequired,
            birth_related_death: false,
        })
    ).isRequired
};

export default DeceasedMemberCardViewContainer;
