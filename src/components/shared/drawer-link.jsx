import {Box, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleDrawerOpen} from "../../redux/features/ui/ui-slice.js";
import {Link, useLocation} from "react-router";
import PropTypes from "prop-types";

const DrawerLink = ({icon, text, path, right, action}) => {
    const {sidebarOpen} = useSelector(selectUI);

    const dispatch = useDispatch();
    const {pathname} = useLocation();

    return (
        <Box
            onClick={action && action}
            sx={{
                backgroundColor: pathname === path ? 'light.primary' : false,
                borderRadius: 1,
                py: 1,
                px: 2,
                mx: 1
            }}>
            <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                spacing={2}>
                <Stack direction="row" spacing={2}>
                    {icon}
                    <Link onClick={() => dispatch(toggleDrawerOpen(false))} to={path}
                          style={{textDecoration: 'none', flexGrow: 1}}>
                        <Typography
                            display="inline"
                            sx={{
                                color: pathname === path ? 'text.primary' : 'text.secondary',
                                textTransform: "capitalize"
                            }}
                            variant="body2">
                            {text}
                        </Typography>
                    </Link>

                </Stack>
                {sidebarOpen && right}
            </Stack>
        </Box>
    )
}

DrawerLink.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    right: PropTypes.elementType,
    action: PropTypes.func,
}
export default DrawerLink;