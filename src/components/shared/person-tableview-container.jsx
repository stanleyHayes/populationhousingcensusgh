import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import PropTypes from "prop-types";
import PersonTableView from "./person-tableview.jsx";

const PersonTableViewContainer = ({persons}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>Marital Status</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Nationality</TableCell>
                        <TableCell>Education</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {persons.map((person, index) => (
                        <PersonTableView person={person} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

PersonTableViewContainer.propTypes = {
    persons: PropTypes.arrayOf(
        PropTypes.shape({
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
    )
};


export default PersonTableViewContainer;
