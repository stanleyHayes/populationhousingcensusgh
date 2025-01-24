import {Box, Divider, Typography} from "@mui/material";
import PropTypes from "prop-types";

const SectionHeader = ({title}) => {

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{
                    color: "text.primary",
                    fontSize: {xs: 16, md: 20, lg: 24}
                }}>
                {title}
            </Typography>

            <Divider sx={{my: 2}}/>
        </Box>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
}

export default SectionHeader;

