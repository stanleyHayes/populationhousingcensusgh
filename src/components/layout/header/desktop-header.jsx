import {Menu, MenuItem, Stack, ToggleButton, ToggleButtonGroup, Toolbar, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectLanguage, selectUI, toggleVariant, toggleView} from "../../../redux/features/ui/ui-slice.js";
import {DarkModeOutlined, GridView, LanguageOutlined, LightModeOutlined, TableRows} from "@mui/icons-material";
import {useState} from "react";
import {selectAuthentication} from "../../../redux/features/authentication/authentication-slice.js";
import {useTranslation} from "react-i18next";

const DesktopHeader = () => {

    const {title, subtitle, variant} = useSelector(selectUI);
    const {authData} = useSelector(selectAuthentication);

    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [el, setEl] = useState(null);

    const {view} = useSelector(selectUI);

    const handleLanguageMenuOpen = (e) => {
        setLanguageMenuOpen(true);
        setEl(e.currentTarget);
    }

    const handleLanguageMenuClose = () => {
        setLanguageMenuOpen(false);
        setEl(null);
    }

    const dispatch = useDispatch();
    const {i18n} = useTranslation();

    const handleLanguageChange = async (language) => {
        dispatch(selectLanguage(language));
        setEl(null);
        setLanguageMenuOpen(false);
        await i18n.changeLanguage(language);
    }

    return (
        <Toolbar
            variant="regular"
            sx={{
                py: 4
            }}>
            <Stack sx={{width: "100%"}} direction="row" spacing={2} alignItems="center" justifyContent="space-between">
                <Stack direction="column">
                    <Typography
                        variant="body1"
                        sx={{
                            color: "text.primary",
                            fontWeight: "bold",
                            fontSize: {xs: 12, md: 16, lg: 20},
                            fontFamily: "Playwrite HR Lijeva"
                        }}>{title}</Typography>
                    <Typography variant="body2" sx={{color: "text.secondary"}}>{subtitle}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography variant="body2" sx={{color: "text.secondary"}}>
                        {authData.first_name}
                    </Typography>
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

export default DesktopHeader;