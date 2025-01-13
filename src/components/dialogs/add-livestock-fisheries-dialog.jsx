import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import LivestockFisheriesForm from "../forms/livestock-fisheries-form.jsx";

const AddLivestockOrFisheriesDialog = ({open, onClose, handleFisheriesAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add new livestock
                </Typography>
                <LivestockFisheriesForm handleFisheriesAdd={handleFisheriesAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

AddLivestockOrFisheriesDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleFisheriesAdd: PropTypes.func.isRequired,
}

export default AddLivestockOrFisheriesDialog;