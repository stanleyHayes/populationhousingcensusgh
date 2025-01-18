import {Dialog, DialogContent, Typography} from "@mui/material";
import PropTypes from "prop-types";
import NewEnumeratorForm from "../forms/new-enumerator-form.jsx";

const NewEnumeratorDialog = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add New Enumerator
                </Typography>
                <NewEnumeratorForm onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

NewEnumeratorDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default NewEnumeratorDialog;