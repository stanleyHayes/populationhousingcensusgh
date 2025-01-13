import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Container, LinearProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {selectHousehold} from "../../redux/features/households/household-slice.js";
import HouseholdDetail from "../../components/shared/household-detail.jsx";

const HouseholdDetailPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Household Detail"));
        dispatch(setSubtitle(`Detailed information of a household`));
    }, [dispatch]);

    const {household, loading, error} = useSelector(selectHousehold);

    return (
        <Layout>
            <Box>
                {loading && <LinearProgress variant="query" color="secondary"/>}
                <Container sx={{mb: 4}}>
                    {error && (
                        <Alert sx={{mb: 4}} variant="standard" severity="error">
                            <AlertTitle>{error}</AlertTitle>
                        </Alert>
                    )}
                    {!loading && household && (
                        <HouseholdDetail household={household}/>
                    )}
                </Container>
            </Box>
        </Layout>
    )
}

export default HouseholdDetailPage;