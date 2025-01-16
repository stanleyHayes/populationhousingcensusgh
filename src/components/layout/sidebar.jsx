import {Avatar, Box, Divider, Fab, Stack, Typography} from "@mui/material";
import {
    ChevronLeft,
    ChevronRight, Coronavirus, CoronavirusOutlined, Cottage, CottageOutlined, HolidayVillage, HolidayVillageOutlined,
    Home,
    HomeOutlined,
    Logout,
    LogoutOutlined, NaturePeople, NaturePeopleOutlined,
    PeopleAlt,
    PeopleAltOutlined, Security, SecurityOutlined,
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
                borderRadius: 2,
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
                            variant="h4"
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
                    text="Households"
                    path="/"
                    icon={
                        pathname === "/" ?
                            <Home sx={{color: "accent.main"}} onClick={() => navigate('/')}/> :
                            <HomeOutlined onClick={() => navigate('/')}/>
                    }
                />
                <SidebarLink
                    action={null}
                    right={null}
                    text="People"
                    path="/people"
                    icon={
                        pathname === "/people" ?
                            <PeopleAlt sx={{color: "accent.main"}} onClick={() => navigate('/people')}/> :
                            <PeopleAltOutlined onClick={() => navigate('/people')}/>
                    }
                />

                  <SidebarLink
                    action={null}
                    right={null}
                    text="Enumerators"
                    path="/enumerators"
                    icon={
                        pathname === "/enumerators" ?
                            <Security sx={{color: "accent.main"}} onClick={() => navigate('/enumerators')}/> :
                            <SecurityOutlined onClick={() => navigate('/enumerators')}/>
                    }
                />

                  <SidebarLink
                    action={null}
                    right={null}
                    text="Emigrated Members"
                    path="/emigrated-members"
                    icon={
                        pathname === "/emigrated-members" ?
                            <NaturePeople sx={{color: "accent.main"}} onClick={() => navigate('/emigrated-members')}/> :
                            <NaturePeopleOutlined onClick={() => navigate('/emigrated-members')}/>
                    }
                />

                  <SidebarLink
                    action={null}
                    right={null}
                    text="Dwellings"
                    path="/dwellings"
                    icon={
                        pathname === "/dwellings" ?
                            <Cottage sx={{color: "accent.main"}} onClick={() => navigate('/dwellings')}/> :
                            <CottageOutlined onClick={() => navigate('/dwellings')}/>
                    }
                />

                <SidebarLink
                    action={null}
                    right={null}
                    text="Deceased Members"
                    path="/deceased-members"
                    icon={
                        pathname === "/deceased-members" ?
                            <Coronavirus sx={{color: "accent.main"}} onClick={() => navigate('/deceased-members')}/> :
                            <CoronavirusOutlined onClick={() => navigate('/deceased-members')}/>
                    }
                />

                <SidebarLink
                    action={null}
                    right={null}
                    text="Geographical Areas"
                    path="/geographical-areas"
                    icon={
                        pathname === "/geographical-areas" ?
                            <HolidayVillage sx={{color: "accent.main"}} onClick={() => navigate('/geographical-areas')}/> :
                            <HolidayVillageOutlined onClick={() => navigate('/geographical-areas')}/>
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