import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import NewDeceasedMemberForm from "../forms/new-deceased-member-form.jsx";

const NewDeceasedMemberDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    New Deceased Member
                </Typography>
                <NewDeceasedMemberForm  onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewDeceasedMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default NewDeceasedMemberDialog;