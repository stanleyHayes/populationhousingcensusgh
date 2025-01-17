import {TableCell, TableRow} from '@mui/material';
import PropTypes from "prop-types";

const EmigratedMemberTableView = ({emigratedMember}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{emigratedMember.name}</TableCell>
            <TableCell>{`${emigratedMember.age} years old`}</TableCell>
            <TableCell>{emigratedMember.sex}</TableCell>
            <TableCell>{emigratedMember.year_of_departure}</TableCell>
            <TableCell>{emigratedMember.destination_country}</TableCell>
            <TableCell>{emigratedMember.activity_abroad}</TableCell>
        </TableRow>
    );
};

EmigratedMemberTableView.propTypes = {
    emigratedMember: PropTypes.shape({
        name: PropTypes.string.isRequired,
        year_of_departure: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        destination_country: PropTypes.string.isRequired,
        activity_abroad: PropTypes.string.isRequired,
    }).isRequired
};


export default EmigratedMemberTableView;
