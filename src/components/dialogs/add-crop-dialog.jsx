import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import CropForm from "../forms/crop-form.jsx";

const AddCropDialog = ({open, onClose, handleCropAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add crop
                </Typography>
                <CropForm handleCropAdd={handleCropAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

AddCropDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleCropAdd: PropTypes.func.isRequired,
}

export default AddCropDialog;