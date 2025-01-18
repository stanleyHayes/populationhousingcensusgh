import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import EnumeratorTableview from "./enumerator-tableview.jsx";

const EnumeratorTableViewContainer = ({enumerators}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Enumerator</TableCell>
                        <TableCell>Enumerator Phone</TableCell>
                        <TableCell>Supervisor</TableCell>
                        <TableCell>Supervisor Phone</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {enumerators.map((enumerator, index) => (
                        <EnumeratorTableview enumerator={enumerator} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

EnumeratorTableViewContainer.propTypes = {
    enumerators: PropTypes.arrayOf(
        PropTypes.shape({
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            enumerator_code: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            supervisor_first_name: PropTypes.string.isRequired,
            supervisor_last_name: PropTypes.string.isRequired,
            supervisor_code: PropTypes.string.isRequired,
            supervisor_phone: PropTypes.string.isRequired,
            supervisor_date: PropTypes.string.isRequired,
        })
    ).isRequired
};


export default EnumeratorTableViewContainer;
