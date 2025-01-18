import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import NewEmigrationMemberForm from "../forms/new-emigration-member-form.jsx";

const NewEmigratedMemberDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add Emigration Member
                </Typography>
                <NewEmigrationMemberForm onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewEmigratedMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default NewEmigratedMemberDialog;