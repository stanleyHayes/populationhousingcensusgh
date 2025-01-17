import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import DeceasedMemberTableView from "./deceased-member-tableview.jsx";

const EmigratedMemberTableViewContainer = ({emigratedMembers}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Household</TableCell>
                        <TableCell>Year of Departure</TableCell>
                        <TableCell>Destination Country</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {emigratedMembers.map((deceasedMember, index) => (
                        <DeceasedMemberTableView deceasedMember={deceasedMember} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

EmigratedMemberTableViewContainer.propTypes = {
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


export default EmigratedMemberTableViewContainer;
