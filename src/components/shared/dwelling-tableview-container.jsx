import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import DwellingTableView from "./dwelling-tableview.jsx";

const DwellingTableViewContainer = ({dwellings}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Structure Number</TableCell>
                        <TableCell>Outer Wall Material</TableCell>
                        <TableCell>Roof Material</TableCell>
                        <TableCell>Floor Material</TableCell>
                        <TableCell>Geographical Area</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dwellings.map((dwelling, index) => (
                        <DwellingTableView dwelling={dwelling} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

DwellingTableViewContainer.propTypes = {
    dwellings: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            structure_number: PropTypes.string.isRequired,
            outer_wall_material: PropTypes.string.isRequired,
            roof_material: PropTypes.string.isRequired,
            floor_material: PropTypes.string.isRequired,
            geographical_area_id: PropTypes.string.isRequired
        })
    ).isRequired
};


export default DwellingTableViewContainer;
