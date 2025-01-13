import Layout from "../../components/layout/layout.jsx";
import {Box} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";

const HouseholdDetailPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("Household Detail"));
        dispatch(setSubtitle(`Detailed information of a household`));
    }, [dispatch]);
    return (
        <Layout>
            <Box>

            </Box>
        </Layout>
    )
}

export default HouseholdDetailPage;