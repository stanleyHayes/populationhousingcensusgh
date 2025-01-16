import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Container, LinearProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {selectDwellings} from "../../redux/features/dwellings/dwellings-slice.js";

const DwellingsPage = () => {
    const {error, loading} = useSelector(selectDwellings);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Dwellings"));
        dispatch(setSubtitle("Learn about the dwellings in this locality"));
    }, [dispatch]);

    return (
        <Layout>
            <Box sx={{mb: 4}}>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    <Box>

                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default DwellingsPage;