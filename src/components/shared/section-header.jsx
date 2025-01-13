import {Box, Divider, Typography} from "@mui/material";
import PropTypes from "prop-types";

const SectionHeader = ({title}) => {

    return (
        <Box>
            <Typography variant="h4" sx={{color: "text.primary", fontFamily: "Playwrite HR Lijeva"}}>
                {title}
            </Typography>

            <Divider sx={{my: 4}}/>
        </Box>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default SectionHeader;

