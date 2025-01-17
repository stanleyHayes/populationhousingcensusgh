import {Box, SwipeableDrawer} from "@mui/material";
import DrawerContent from "./drawer-content.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleDrawerOpen} from "../../redux/features/ui/ui-slice.js";
import Sidebar from "./sidebar.jsx";
import Header from "./header/header.jsx";
import PropTypes from "prop-types";

const Layout = ({children}) => {
    const {drawerOpen, sidebarOpen} = useSelector(selectUI);
    const dispatch = useDispatch();
    return (
        <Box
            sx={{
                display: "flex",
                maxHeight: "100vh",
                overflowY: "hidden",
                height: "100vh",
                width: "100vw",
            }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%"
                }}>
                <Box
                    sx={{
                        display: {xs: "none", md: "flex"},
                        flexBasis: {xs: "0%", md: sidebarOpen ? "22%" : "5.8%", lg: sidebarOpen ? "25.5%" : "5.8%"},
                        maxHeight: "100vh",
                        justifyContent: {xs: "center", md: "flex-start"},
                        paddingY: 4,
                        paddingX: 4
                    }}>
                    <Sidebar/>
                </Box>
                <Box sx={{
                    display: "block",
                    flexBasis: {xs: "100%", md: sidebarOpen ? "68%" : "84.20%", lg: sidebarOpen ? "75.5%" : "94.2%"},
                    width: "100%",
                    backgroundColor: "background.default",
                    maxHeight: "100vh",
                    overflowY: "scroll"
                }}>
                    <Box sx={{mb: {xs: 6, md: 4.1}}}>
                        <Header/>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
            <Box>
            </Box>

            <SwipeableDrawer
                open={drawerOpen}
                onOpen={() => dispatch(toggleDrawerOpen(true))}
                onClose={() => dispatch(toggleDrawerOpen(false))}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

Layout.propTypes = {
    children: PropTypes.array.isRequired,
}

export default Layout;