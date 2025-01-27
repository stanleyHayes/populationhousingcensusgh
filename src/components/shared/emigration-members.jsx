import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined, VisibilityOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";
import EmigrationDetailDialog from "../dialogs/emigration-detail-dialog.jsx";
import {useState} from "react";

const EmigrationMembers = ({members, handleMemberRemove}) => {

    const [open, setOpen] = useState(false);
    const [member, setMember] = useState(null);

    const handleMemberDetailClick = (member) => {
        setOpen(true);
        setMember(member);
    }

    return (
        <Box>
            <TableContainer component={Paper} elevation={0}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Sex</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Departure Year</TableCell>
                            <TableCell>Activity Abroad</TableCell>
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
                                    <TableCell>{member.destination}</TableCell>
                                    <TableCell>{member.departure_year}</TableCell>
                                    <TableCell>{member.activity_abroad}</TableCell>
                                    <TableCell>
                                        <VisibilityOutlined
                                            sx={{cursor: "pointer"}}
                                            onClick={() => handleMemberDetailClick(member)}
                                            color="primary"
                                        />
                                        <DeleteOutlined
                                            sx={{cursor: "pointer"}}
                                            onClick={() => handleMemberRemove(member)}
                                            color="error"
                                        />
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            {open && (
                <EmigrationDetailDialog
                    member={member}
                    open={open} onClose={() => setOpen(false)}
                />
            )}
        </Box>
    )
}

EmigrationMembers.propTypes = {
    members: PropTypes.array.isRequired,
    handleMemberRemove: PropTypes.func.isRequired,
}

export default EmigrationMembers