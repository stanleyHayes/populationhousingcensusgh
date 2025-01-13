import {Badge, Menu, MenuItem, Stack, Toolbar, Typography} from "@mui/material";
import {LanguageOutlined, MenuOutlined, MoreHoriz, Notifications} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {selectLanguage, selectUI, toggleDrawerOpen} from "../../../redux/features/ui/ui-slice.js";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {title} = useSelector(selectUI);

    const [menuOpen, setMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [el, setEl] = useState(null);

    const handleMenuOpen = (e) => {
        setMenuOpen(true);
        setEl(e.currentTarget);
    }

    const handleClose = () => {
        setMenuOpen(false);
        setEl(null);
    }

    const handleLanguageMenuOpen = (e) => {
        setLanguageMenuOpen(true);
        setEl(e.currentTarget);
    }

    const handleLanguageMenuClose = () => {
        setLanguageMenuOpen(false);
        setEl(null);
    }

    const {i18n} = useTranslation();

    const handleLanguageChange = async (language) => {
        console.log(language);
        dispatch(selectLanguage(language));
        setEl(null);
        setLanguageMenuOpen(false);
        await i18n.changeLanguage(language);
    }


    return (
        <Toolbar
            variant="dense"
            sx={{
                borderBottomStyle: "solid",
                borderBottomWidth: 1,
                borderBottomColor: "divider",
                backgroundColor: "background.transparent",
                backdropFilter: "blur(30px)",
                position: "fixed",
                top: 0,
                right: 0,
                left: 0,
                zIndex: 1000
            }}>
            <Stack sx={{width: "100%"}} direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                    <MenuOutlined
                        sx={{
                            borderRadius: 1,
                            borderColor: "icon.primary",
                            borderStyle: "solid",
                            borderWidth: 0.5,
                            p: 0.5,
                            fontSize: 28,
                            color: "primary.main",
                            backgroundColor: "light.primary"
                        }}
                        onClick={() => dispatch(toggleDrawerOpen(true))}/>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.primary",
                            fontSize: 20,
                            fontFamily: "Playwrite HR Lijeva",
                            fontWeight: "bold"
                        }}>
                        {title}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Badge badgeContent={4} variant="standard">
                        <Notifications/>
                    </Badge>
                    <LanguageOutlined sx={{cursor: "pointer"}} onClick={handleLanguageMenuOpen}/>

                    <Menu open={languageMenuOpen} onClose={handleLanguageMenuClose} anchorEl={el}>
                        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange('fr')}>French</MenuItem>
                    </Menu>

                    <MoreHoriz onClick={handleMenuOpen}/>

                    <Menu open={menuOpen} onClose={handleClose} anchorEl={el}>

                    </Menu>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;