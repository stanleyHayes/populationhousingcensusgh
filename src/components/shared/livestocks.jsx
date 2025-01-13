import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";

const Livestock = ({livestock, handleLivestockRemove}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Types of Livestock/Fisheries</TableCell>
                        <TableCell>Livestock/ Fishery Code</TableCell>
                        <TableCell>Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {livestock.map((l, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{l.livestock_or_fishery_type}</TableCell>
                                <TableCell>{l.livestock_fishery_code}</TableCell>
                                <TableCell>{l.number}</TableCell>
                                <TableCell>
                                    <DeleteOutlined onClick={() => handleLivestockRemove(l)} color="error"/>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

Livestock.propTypes = {
    livestock: PropTypes.array.isRequired,
    handleLivestockRemove: PropTypes.func.isRequired,
}

export default Livestock;