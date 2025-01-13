import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import HouseholdRow from './household-row.jsx';
import PropTypes from "prop-types";

const TableViewContainer = ({households}) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Household Head</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Members</TableCell>
                        <TableCell>Housing Type</TableCell>
                        <TableCell>Farming</TableCell>
                        <TableCell>Date Completed</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {households.map((household, index) => (
                        <HouseholdRow household={household} key={index}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

TableViewContainer.propTypes = {
    households: PropTypes.arrayOf(
        PropTypes.shape({
            front_page: PropTypes.shape({
                hometown: PropTypes.string.isRequired,
                region: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    code: PropTypes.string.isRequired
                }).isRequired,
                locality: PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    code: PropTypes.string.isRequired
                }).isRequired,
                residence_type: PropTypes.string.isRequired,
                date_completed: PropTypes.string.isRequired
            }).isRequired,
            roster: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    age: PropTypes.number.isRequired,
                    sex: PropTypes.string.isRequired,
                    relationship_code: PropTypes.string.isRequired
                })
            ).isRequired,
            housing_conditions: PropTypes.shape({
                type: PropTypes.string.isRequired
            }).isRequired,
            agriculture: PropTypes.shape({
                farms_crops: PropTypes.bool.isRequired
            }).isRequired
        })
    ).isRequired
};


export default TableViewContainer;
