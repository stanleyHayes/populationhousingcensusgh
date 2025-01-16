import {Box, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUI} from "../../redux/features/ui/ui-slice.js";
import {Link, useLocation} from "react-router";
import PropTypes from "prop-types";

const SidebarLink = ({icon, text, path, right, action = null}) => {
    const {sidebarOpen} = useSelector(selectUI);
    const {pathname} = useLocation()
    return (
        <Box
            onClick={action && action}
            sx={{
                backgroundColor: pathname === path ? 'light.accent' : false,
                borderRadius: 4,
                py: 1,
                px: {xs: 0, md: 2},
                mx: 2,
                cursor: "pointer"
            }}>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}>
                <Stack direction="row" spacing={{xs: 0, md: 2}}>
                    {icon}
                    {
                        sidebarOpen && (
                            <Link to={path} style={{textDecoration: 'none', flexGrow: 1}}>
                                <Typography
                                    display="inline"
                                    sx={{color: pathname === path ? 'accent.main' : 'text.secondary'}}
                                    variant="body2">
                                    {text}
                                </Typography>
                            </Link>
                        )
                    }
                </Stack>
                {sidebarOpen && right}
            </Stack>
        </Box>
    )
}

SidebarLink.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    right: PropTypes.elementType,
    action: PropTypes.func,
}

export default SidebarLink;