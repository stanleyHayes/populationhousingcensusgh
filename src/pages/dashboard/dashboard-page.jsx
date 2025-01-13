import Layout from "../../components/layout/layout.jsx";
import {Box, Container, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";

const DashboardPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Dashboard"));
        dispatch(setSubtitle("Summary of your work"));
    }, [dispatch]);

    return (
        <Layout>
            <Box>
                <Container>
                    <Typography align="center" variant="h5">
                        Dashboard
                    </Typography>
                </Container>
            </Box>
        </Layout>
    )
}

export default DashboardPage;