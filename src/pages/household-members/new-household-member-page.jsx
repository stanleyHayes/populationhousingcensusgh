import Layout from "../../components/layout/layout.jsx";
import {Box} from "@mui/material";
import {setSubtitle, setTitle} from "../../redux/features/ui/ui-slice.js";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const NewHouseholdMemberPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTitle("New Household Member"));
        dispatch(setSubtitle("Congratulations on your latest addition"));
    }, [dispatch]);

    return (
        <Layout>
            <Box>

            </Box>
        </Layout>
    )
}

export default NewHouseholdMemberPage