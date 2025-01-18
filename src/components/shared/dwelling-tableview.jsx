import {Stack, TableCell, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import {DeleteOutlined, EditOutlined, VisibilityOutlined} from "@mui/icons-material";

const DwellingTableView = ({dwelling}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{dwelling.structure_number}</TableCell>
            <TableCell>
                {dwelling.outer_wall_material}
            </TableCell>
            <TableCell>{dwelling.roof_material}</TableCell>
            <TableCell>
                {dwelling.floor_material}
            </TableCell>
            <TableCell>
                {dwelling.floor_material}
            </TableCell>
            <TableCell>
                <Stack spacing={1} alignItems="center" direction="row">
                    <DeleteOutlined />
                    <VisibilityOutlined/>
                    <EditOutlined/>
                </Stack>
            </TableCell>
        </TableRow>
    );
};


DwellingTableView.propTypes = {
    dwelling: PropTypes.shape({
        id: PropTypes.string.isRequired,
        structure_number: PropTypes.string.isRequired,
        outer_wall_material: PropTypes.string.isRequired,
        roof_material: PropTypes.string.isRequired,
        floor_material: PropTypes.string.isRequired,
        geographical_area_id: PropTypes.string.isRequired
    }).isRequired
};


export default DwellingTableView;
