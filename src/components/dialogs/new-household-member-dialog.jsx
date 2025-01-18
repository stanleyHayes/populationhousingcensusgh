import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import NewDwellingForm from "../forms/new-dwelling-form.jsx";

const NewHouseholdMemberDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add New Household Member
                </Typography>
                <NewDwellingForm onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewHouseholdMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default NewHouseholdMemberDialog;