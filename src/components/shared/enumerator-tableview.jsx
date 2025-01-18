import {Link, Stack, TableCell, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import {EditOutlined, VisibilityOutlined} from "@mui/icons-material";

const EmigratedMemberTableView = ({enumerator}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{`${enumerator.first_name} ${enumerator.last_name}`}</TableCell>
            <TableCell>
                <Link href={`tel://${enumerator.phone}`}>{enumerator.phone}</Link>
            </TableCell>
            <TableCell>{`${enumerator.supervisor_first_name} ${enumerator.supervisor_last_name}`}</TableCell>
            <TableCell>
                <Link href={`tel://${enumerator.supervisor_phone}`}>{enumerator.supervisor_phone}</Link>
            </TableCell>
            <TableCell>
                <Stack direction="row">
                    <VisibilityOutlined/>
                    <EditOutlined/>
                </Stack>
            </TableCell>
        </TableRow>
    );
};


EmigratedMemberTableView.propTypes = {
    enumerator: PropTypes.shape({
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        enumerator_code: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        supervisor_first_name: PropTypes.string.isRequired,
        supervisor_last_name: PropTypes.string.isRequired,
        supervisor_code: PropTypes.string.isRequired,
        supervisor_phone: PropTypes.string.isRequired,
        supervisor_date: PropTypes.string.isRequired,
    }).isRequired
};


export default EmigratedMemberTableView;
