import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DeleteOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";

const Crops = ({crops, handleCropRemove}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Type of Crop and Tree Planting</TableCell>
                        <TableCell>Crop Code</TableCell>
                        <TableCell>Farm Size</TableCell>
                        <TableCell>Measurement Unit</TableCell>
                        <TableCell>Type of Cropping</TableCell>
                        <TableCell>Months Absent</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {crops.map((crop, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{crop.crop_type}</TableCell>
                                <TableCell>{crop.crop_code}</TableCell>
                                <TableCell>{crop.farm_size}</TableCell>
                                <TableCell>{crop.measurement_unit}</TableCell>
                                <TableCell>{crop.cropping_type}</TableCell>
                                <TableCell>{crop.measurement_unit_code}</TableCell>
                                <TableCell>{crop.cropping_type_code}</TableCell>
                                <TableCell>
                                    <DeleteOutlined onClick={() => handleCropRemove(crop)} color="error"/>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

Crops.propTypes = {
    crops: PropTypes.array.isRequired,
    handleCropRemove: PropTypes.func.isRequired,
}

export default Crops