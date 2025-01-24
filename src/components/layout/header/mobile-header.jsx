import {Menu, MenuItem, Stack, ToggleButton, ToggleButtonGroup, Toolbar, Typography} from "@mui/material";
import {
    DarkModeOutlined,
    GridView,
    LanguageOutlined,
    LightModeOutlined,
    MenuOutlined,
    TableRows
} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {
    selectLanguage,
    selectUI,
    toggleDrawerOpen,
    toggleVariant,
    toggleView
} from "../../../redux/features/ui/ui-slice.js";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {title, view, variant} = useSelector(selectUI);

    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [el, setEl] = useState(null);

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
                            borderColor: "icon.primary",
                            borderStyle: "solid",
                            borderWidth: 1,
                            p: 0.5,
                            fontSize: 32,
                            color: "primary.main",
                            backgroundColor: "light.primary",
                            borderRadius: 1,
                        }}
                        onClick={() => dispatch(toggleDrawerOpen(true))}/>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "primary.main",
                            fontFamily: "Playwrite HR Lijeva",
                            fontWeight: "bold"
                        }}>
                        {title}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">

                    {
                        variant === 'light' ?
                            <DarkModeOutlined sx={{cursor: "pointer"}} onClick={() => dispatch(toggleVariant())}/> :
                            <LightModeOutlined sx={{cursor: "pointer"}} onClick={() => dispatch(toggleVariant())}/>
                    }

                    <LanguageOutlined sx={{cursor: "pointer"}} onClick={handleLanguageMenuOpen}/>

                    <Menu open={languageMenuOpen} onClose={handleLanguageMenuClose} anchorEl={el}>
                        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange('fr')}>French</MenuItem>
                    </Menu>

                    <ToggleButtonGroup
                        size="small"
                        value={view}>
                        <ToggleButton
                            onClick={(event, newView) => dispatch(toggleView(newView))}
                            value="grid">
                            <GridView/>
                        </ToggleButton>
                        <ToggleButton
                            onClick={(event, newView) => dispatch(toggleView(newView))}
                            value="table">
                            <TableRows/>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;