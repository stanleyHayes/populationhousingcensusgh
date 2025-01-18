import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import GeographicAreaForm from "../forms/geographic-area-form.jsx";
import NewDwellingForm from "../forms/new-dwelling-form.jsx";

const NewDwellingDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add New Dwelling
                </Typography>
                <NewDwellingForm onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewDwellingDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default NewDwellingDialog;