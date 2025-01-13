import {TableRow, TableCell, Tooltip} from '@mui/material';
import PropTypes from "prop-types";
import moment from "moment";
import {VisibilityOutlined} from "@mui/icons-material";
import {useNavigate} from "react-router";
import {HOUSEHOLD_ACTIONS} from "../../redux/features/households/household-slice.js";
import {useDispatch} from "react-redux";

const HouseholdRow = ({household}) => {
    const {front_page, roster, housing_conditions, agriculture} = household;
    const head = roster.find(member => member.relationship_code === "01") || {};
    const totalMembers = roster.length;
    const males = roster.filter(member => member.sex === "male").length;
    const females = roster.filter(member => member.sex === "female").length;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <TableRow hover={true}>
            <TableCell>{head.name || 'Household Head'}</TableCell>
            <TableCell>{`${front_page.locality.name}, ${front_page.region.name}`}</TableCell>
            <TableCell>{`${totalMembers} (Males: ${males}, Females: ${females})`}</TableCell>
            <TableCell>{housing_conditions.type}</TableCell>
            <TableCell>{agriculture.farms_crops ? 'Yes' : 'No'}</TableCell>
            <TableCell>{moment(front_page.date_completed).fromNow()}</TableCell>
            <TableCell>
                <Tooltip title={`View details of household of ${head.name || 'Household head'}`}>
                    <VisibilityOutlined
                        onClick={() => {
                            navigate(`/households/${household.id} `);
                            dispatch(HOUSEHOLD_ACTIONS.setHousehold(household))
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

HouseholdRow.propTypes = {
    household: PropTypes.shape({
        id: PropTypes.string.isRequired,
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
    }).isRequired
};


export default HouseholdRow;
