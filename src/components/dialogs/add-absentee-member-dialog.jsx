import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import AbsenteeMemberForm from "../forms/absentee-member-form.jsx";

const AddAbsenteeMemberDialog = ({open, onClose, handleMemberAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add new absent member
                </Typography>
                <AbsenteeMemberForm handleMemberAdd={handleMemberAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

AddAbsenteeMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}

export default AddAbsenteeMemberDialog;