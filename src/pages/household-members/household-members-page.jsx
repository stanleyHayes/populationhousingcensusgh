import Layout from "../../components/layout/layout.jsx";
import {Alert, AlertTitle, Box, Container, LinearProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectDeceasedHouseholds} from "../../redux/features/deceased-members/deceased-members-slice.js";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";

const DeceasedMembersPage = () => {
    const {error, loading} = useSelector(selectDeceasedHouseholds);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Household Members"));
        dispatch(setSubtitle("Efie nipa s3e wo a saaaa"));
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

export default DeceasedMembersPage;