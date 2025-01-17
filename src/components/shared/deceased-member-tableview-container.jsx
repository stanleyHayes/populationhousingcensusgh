import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import DeceasedMemberTableView from "./deceased-member-tableview.jsx";

const DeceasedMembersTableViewContainer = ({deceasedMembers}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Cause of Death</TableCell>
                        <TableCell>Birth Related Death</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {deceasedMembers.map((deceasedMember, index) => (
                        <DeceasedMemberTableView deceasedMember={deceasedMember} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

DeceasedMembersTableViewContainer.propTypes = {
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


export default DeceasedMembersTableViewContainer;
