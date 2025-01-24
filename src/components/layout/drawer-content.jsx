import {Avatar, Box, Container, Divider, Stack, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router";
import {
    Coronavirus, CoronavirusOutlined,
    Cottage, CottageOutlined,
    DarkModeOutlined, HolidayVillage, HolidayVillageOutlined,
    Home,
    HomeOutlined,
    LightModeOutlined,
    Logout,
    LogoutOutlined, NaturePeople, NaturePeopleOutlined, PeopleAlt, PeopleAltOutlined, Security, SecurityOutlined,
    Settings,
    SettingsOutlined
} from "@mui/icons-material";
import {selectUI, toggleVariant} from "../../redux/features/ui/ui-slice.js";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../assets/images/logo/logo.png";
import DrawerLink from "../shared/drawer-link.jsx";

const DrawerContent = () => {
    const {pathname} = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {variant} = useSelector(selectUI);

    return (
        <Box
            sx={{
                borderRightStyle: "solid",
                borderRightWidth: 1,
                borderRightColor: "divider",
                maxHeight: "100vh",
                height: "100%",
                py: 4,
                minWidth: {xs: "80vw", md: "30vw"}
            }}>
            <Container>
                <Box sx={{mb: 4}}>
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
                </Box>
                <Stack direction="column">
                    <DrawerLink
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

                    <DrawerLink
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

                    <DrawerLink
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

                    <DrawerLink
                        action={null}
                        right={null}
                        text="Emigrated Members"
                        path="/emigrated-members"
                        icon={
                            pathname === "/emigrated-members" ?
                                <NaturePeople sx={{color: "accent.main"}}
                                              onClick={() => navigate('/emigrated-members')}/> :
                                <NaturePeopleOutlined onClick={() => navigate('/emigrated-members')}/>
                        }
                    />

                    <DrawerLink
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

                    <DrawerLink
                        action={null}
                        right={null}
                        text="Deceased Members"
                        path="/deceased-members"
                        icon={
                            pathname === "/deceased-members" ?
                                <Coronavirus sx={{color: "accent.main"}}
                                             onClick={() => navigate('/deceased-members')}/> :
                                <CoronavirusOutlined onClick={() => navigate('/deceased-members')}/>
                        }
                    />

                    <DrawerLink
                        action={null}
                        right={null}
                        text="Geographical Areas"
                        path="/geographical-areas"
                        icon={
                            pathname === "/geographical-areas" ?
                                <HolidayVillage sx={{color: "accent.main"}}
                                                onClick={() => navigate('/geographical-areas')}/> :
                                <HolidayVillageOutlined onClick={() => navigate('/geographical-areas')}/>
                        }
                    />
                </Stack>

                <Divider variant="fullWidth" sx={{my: 4}}/>

                <Stack direction="column">
                    <Stack
                        onClick={() => dispatch(toggleVariant())}
                        sx={{
                            py: 1,
                            px: 2,
                            mx: 1,
                            cursor: 'pointer',
                            width: '100%',
                        }} direction="row" alignItems="center" spacing={2}>
                        {
                            variant === 'light' ?
                                <DarkModeOutlined/> :
                                <LightModeOutlined/>
                        }
                        <Typography
                            variant="body2"
                            sx={{color: "text.secondary"}}>
                            {variant === 'light' ? 'Dark Theme' : 'Light Theme'}
                        </Typography>
                    </Stack>


                    <DrawerLink
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

                    <DrawerLink
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
            </Container>
        </Box>
    )
}

export default DrawerContent;