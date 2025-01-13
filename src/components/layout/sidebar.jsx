import {Avatar, Box, Divider, Fab, Stack, Typography} from "@mui/material";
import {
    ChevronLeft,
    ChevronRight,
    Dashboard,
    DashboardOutlined,
    Home,
    HomeOutlined,
    Logout,
    LogoutOutlined,
    Settings,
    SettingsOutlined
} from "@mui/icons-material";
import SidebarLink from "../shared/sidebar-link.jsx";
import {useLocation, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectUI, toggleSidebarOpen} from "../../redux/features/ui/ui-slice.js";
import logo from "./../../assets/images/logo/logo.png";

const Sidebar = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {sidebarOpen} = useSelector(selectUI);

    return (
        <Box
            sx={{
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "divider",
                maxHeight: "100vh",
                height: "100%",
                py: 2,
                backgroundColor: "background.sidebar",
                position: "relative",
                overflowX: "hidden",
                overflowY: "auto",
                borderRadius: 8,
                elevation: 10000
            }}>
            <Fab
                onClick={() => dispatch(toggleSidebarOpen(!sidebarOpen))}
                size="small"
                color="primary"
                sx={{
                    zIndex: 1000,
                    position: "fixed",
                    bottom: 20,
                    left: sidebarOpen ? 190 : 57,
                    cursor: "pointer",
                }}>
                {sidebarOpen ? <ChevronLeft/> : <ChevronRight/>}
            </Fab>

            <Box
                sx={{
                    mb: 2,
                    py: 1,
                    px: {xs: 0, md: 2},
                    mx: 1
                }}>
                {!sidebarOpen && (
                    <Stack justifyContent="center" alignItems="center" direction="row" spacing={2}>
                        <Avatar
                            variant="outlined"
                            src={logo}
                            sx={{width: 30, height: 30}}
                        />
                    </Stack>
                )}
                {sidebarOpen && (
                    <Stack justifyContent="flex-start" alignItems="center" direction="row" spacing={2}>
                        <Avatar
                            variant="outlined"
                            src={logo}
                            sx={{width: 30, height: 30}}
                        />
                        <Typography
                            variant="body1"
                            sx={{color: "text.primary", fontFamily: "Playwrite HR Lijeva", fontWeight: 700}}>
                            PHC
                        </Typography>
                    </Stack>
                )}
            </Box>
            <Stack direction="column">
                <SidebarLink
                    action={null}
                    right={null}
                    text="Dashboard"
                    path="/"
                    icon={
                        pathname === "/" ?
                            <Dashboard sx={{color: "accent.main"}} onClick={() => navigate('/')}/> :
                            <DashboardOutlined onClick={() => navigate('/')}/>
                    }
                />

                <SidebarLink
                    action={null}
                    right={null}
                    text="Households"
                    path="/households"
                    icon={
                        pathname === "/households" ?
                            <Home sx={{color: "accent.main"}} onClick={() => navigate('/households')}/> :
                            <HomeOutlined onClick={() => navigate('/households')}/>
                    }
                />

            </Stack>

            <Divider variant="fullWidth" sx={{my: 4}}/>

            <Stack sx={{mb: 4}} direction="column">

                <SidebarLink
                    action={null}
                    right={null}
                    text="Settings"
                    path="/settings"
                    icon={
                        pathname === "/settings" ?
                            <Settings sx={{color: "accent.main"}} onClick={() => navigate('/settings')}/> :
                            <SettingsOutlined onClick={() => navigate('/settings')}/>
                    }
                />

                <SidebarLink
                    action={() => navigate('/auth/login')}
                    text="Logout"
                    path="/auth/login"
                    icon={
                        pathname === "/auth/login" ?
                            <Logout sx={{color: "accent.main"}}/> :
                            <LogoutOutlined/>
                    }
                />
            </Stack>
        </Box>
    )
}

export default Sidebar;