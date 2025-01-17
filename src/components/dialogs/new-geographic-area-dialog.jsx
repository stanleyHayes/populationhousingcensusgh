import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import GeographicAreaForm from "../forms/geographic-area-form.jsx";

const NewGeographicAreaDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add Geographic Area
                </Typography>
                <GeographicAreaForm  onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewGeographicAreaDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default NewGeographicAreaDialog;