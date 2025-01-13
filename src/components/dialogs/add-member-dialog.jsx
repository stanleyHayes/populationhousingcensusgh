import {Box, Dialog, DialogContent, Divider, Typography} from "@mui/material";
import PropTypes from "prop-types";
import HouseholdRosterForm from "../forms/household-roster-form.jsx";

const AddMemberDialog = ({open, onClose, handleMemberAdd}) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg">
            <DialogContent>
                <Typography variant="h5" align="center" sx={{color: "text.primary", mb: 2}}>
                    Add new member
                </Typography>
                <Box>
                    <Typography variant="body1" align="center" sx={{color: "primary.main", mb: 2, fontWeight: 'bold'}}>
                        Status A: Usual member(s) present on census night
                    </Typography>
                    <Typography variant="body1" align="center" sx={{color: "primary.main", fontWeight: 'bold'}}>
                        Status B: Visitor(s) present on census night
                    </Typography>
                </Box>
                <Divider variant="fullWidth" sx={{my: 4}}/>
                <HouseholdRosterForm handleMemberAdd={handleMemberAdd} onClose={onClose}/>
            </DialogContent>
        </Dialog>
    )
}

AddMemberDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    handleMemberAdd: PropTypes.func.isRequired,
}

export default AddMemberDialog;