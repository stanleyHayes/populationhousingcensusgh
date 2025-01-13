import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import EmigrationMemberForm from "../forms/emigration-member-form.jsx";

const AddEmigrationMemberDialog = ({open, onClose, handleMemberAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add new emigration member
                </Typography>
                <EmigrationMemberForm handleMemberAdd={handleMemberAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

AddEmigrationMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}

export default AddEmigrationMemberDialog;