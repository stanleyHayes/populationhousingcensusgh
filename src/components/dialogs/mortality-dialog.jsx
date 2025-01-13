import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import MortalityForm from "../forms/mortality-form.jsx";

const MortalityDialog = ({open, onClose, handleMemberAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add new deceased member
                </Typography>
                <MortalityForm handleMemberAdd={handleMemberAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

MortalityDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}

export default MortalityDialog;