import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";

const DeceasedMembers = ({members, handleMemberRemove}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Sex</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Unnatural Death</TableCell>
                        <TableCell>Birth Related Death</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {members.map((member, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{member.name}</TableCell>
                                <TableCell>{member.sex}</TableCell>
                                <TableCell>{member.age}</TableCell>
                                <TableCell>{member.had_unnatural_death ? 'Yes' : 'No'}</TableCell>
                                <TableCell>{member.birth_related_death ? 'Yes' : 'No'}</TableCell>
                                < TableCell>
                                    < DeleteOutlined onClick={() => handleMemberRemove(member)} color="error"/>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

DeceasedMembers.propTypes = {
    members: PropTypes.array.isRequired,
    handleMemberRemove: PropTypes.func.isRequired,
}

export default DeceasedMembers