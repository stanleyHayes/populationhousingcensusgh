import {TableCell, TableRow} from '@mui/material';
import PropTypes from "prop-types";

const DeceasedMemberTableView = ({deceasedMember}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{deceasedMember.name}</TableCell>
            <TableCell>{`${deceasedMember.age}`}</TableCell>
            <TableCell>{deceasedMember.sex}</TableCell>
            <TableCell>{deceasedMember.had_unnatural_death ? 'Died of accident' : 'Died of natural causes'}</TableCell>
            <TableCell>{deceasedMember.birth_related_death ? 'Died of birth related issues' : 'N/A'}</TableCell>
        </TableRow>
    );
};

DeceasedMemberTableView.propTypes = {
    deceasedMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        had_unnatural_death: false,
        sex: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        birth_related_death: false,
    }).isRequired
};


export default DeceasedMemberTableView;
