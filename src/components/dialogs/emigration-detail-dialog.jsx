import {Dialog, DialogContent} from "@mui/material";
import PropTypes from "prop-types";

const EmigrationDetailDialog = ({open, onClose}) => {
    // name: '',
    //     relationship_to_head: '',
    //     sex: '',
    //     status: '',
    //     age: '',
    //     destination: '',
    //     departure_year: '',
    //     dob: '',
    //     ethnicity: '',
    //     nationality: '',
    //     birthplace: '',
    //     religion: '',
    //     marital_status: '',
    //     place_of_residence: '',
    //     is_living_in_town_since_birth: false,
    //     years_lived_in_village: ''
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>

            </DialogContent>
        </Dialog>
    )
}


EmigrationDetailDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default EmigrationDetailDialog;