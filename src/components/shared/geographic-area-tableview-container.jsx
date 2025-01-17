import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import GeographicAreaRow from "./geographic-area-tableview.jsx";

const GeographicAreaTableViewContainer = ({geographicAreas}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Region</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>Members</TableCell>
                        <TableCell>Housing Type</TableCell>
                        <TableCell>Farming</TableCell>
                        <TableCell>Date Completed</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {geographicAreas.map((geographicArea, index) => (
                        <GeographicAreaRow geographicalArea={geographicArea} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

GeographicAreaTableViewContainer.propTypes = {
    geographicAreas: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            region_name: PropTypes.string.isRequired,
            region_code: PropTypes.string.isRequired,
            district_name: PropTypes.string.isRequired,
            district_code: PropTypes.string.isRequired,
            sub_district_name: PropTypes.string.isRequired,
            sub_district_code: PropTypes.string.isRequired,
            locality_name: PropTypes.string.isRequired,
            locality_code: PropTypes.string.isRequired,
            ea_code: PropTypes.string.isRequired,
            ea_type: PropTypes.string.isRequired
        })
    ).isRequired
};


export default GeographicAreaTableViewContainer;
