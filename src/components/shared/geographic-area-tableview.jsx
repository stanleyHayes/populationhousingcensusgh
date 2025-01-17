import {TableCell, TableRow, Tooltip} from '@mui/material';
import PropTypes from "prop-types";
import {VisibilityOutlined} from "@mui/icons-material";

const GeographicAreaRow = ({geographicalArea}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{geographicalArea.region_name}</TableCell>
            <TableCell>{geographicalArea.district_name}</TableCell>
            <TableCell>{geographicalArea.sub_district_code}</TableCell>
            <TableCell>{geographicalArea.locality_name}</TableCell>
            <TableCell>
                <Tooltip title={`View details of geographic area of ${geographicalArea.region_name}`}>
                    <VisibilityOutlined
                        onClick={() => {

                        }}
                        color="primary"
                        sx={{
                            borderRadius: 0.25,
                            fontSize: 32,
                            backgroundColor: "light.primary",
                            borderWidth: 1,
                            borderColor: "icon.primary",
                            padding: 0.5,
                            borderStyle: "solid",
                            cursor: "pointer"
                        }}
                    />
                </Tooltip>
            </TableCell>
        </TableRow>
    );
};

GeographicAreaRow.propTypes = {
    geographicalArea: PropTypes.shape({
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
    }).isRequired
};


export default GeographicAreaRow;
