import {Stack, TableCell, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import {DeleteOutlined, EditOutlined, VisibilityOutlined} from "@mui/icons-material";

const PersonTableView = ({person}) => {

    return (
        <TableRow hover={true}>
            <TableCell>{person.full_name}</TableCell>
            <TableCell>
                {person.sex}
            </TableCell>
            <TableCell>{person.marital_status}</TableCell>
            <TableCell>{`${person.age} years old`}</TableCell>
            <TableCell>{person.nationality}</TableCell>
            <TableCell>{person.education}</TableCell>
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


PersonTableView.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string.isRequired,
        full_name: PropTypes.string.isRequired,
        sex: PropTypes.string.isRequired,
        marital_status: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        nationality: PropTypes.string.isRequired,
        education: PropTypes.string.isRequired,
        employment_status: PropTypes.string.isRequired,
        relationship_to_head: PropTypes.string.isRequired,
        household: PropTypes.shape({
            household_number: PropTypes.string.isRequired,
            structure_number: PropTypes.string.isRequired
        }).isRequired,
    }).isRequired
};


export default PersonTableView;
