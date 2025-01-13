import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";

const HouseholdRoster = ({ members, handleMemberRemove }) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Relationship to Head</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.relationship_to_head}</TableCell>
                                <TableCell>{member.sex}</TableCell>
                                <TableCell>{member.status}</TableCell>
                                <TableCell>
                                    <DeleteOutlined onClick={() => handleMemberRemove(member)} color="error" />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

HouseholdRoster.propTypes = {
    members: PropTypes.array.isRequired,
    handleMemberRemove: PropTypes.func.isRequired,
}

export default HouseholdRoster