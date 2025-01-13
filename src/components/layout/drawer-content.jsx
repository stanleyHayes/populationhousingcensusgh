import {Avatar, Box, Container, Divider, Stack, Typography} from "@mui/material";
import {useLocation, useNavigate} from "react-router";
import {
    DarkModeOutlined,
    Home,
    HomeOutlined,
    LightModeOutlined,
    Logout,
    LogoutOutlined,
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

                </Stack>

                <Divider variant="fullWidth" sx={{my: 4}}/>

                <Stack direction="column">
                    <Stack
                        sx={{
                            py: 1,
                            px: 2,
                            mx: 1
                        }} direction="row" alignItems="center" spacing={2}>
                        {
                            variant === 'light' ?
                                <DarkModeOutlined onClick={() => dispatch(toggleVariant())}/> :
                                <LightModeOutlined onClick={() => dispatch(toggleVariant())}/>
                        }
                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                            {
                                variant === 'light' ? 'Dark Theme' : 'Light Theme'
                            }
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