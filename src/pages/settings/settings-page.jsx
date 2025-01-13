import Layout from "../../components/layout/layout.jsx";
import {Box, Container, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";

const SettingsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Settings"));
        dispatch(setSubtitle("Configure your account here."));
    }, [dispatch]);

    return (
        <Layout>
            <Box>
                <Container>
                    <Typography align="center" variant="h5">
                        Settings
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default SettingsPage;