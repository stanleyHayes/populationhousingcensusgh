import {Box, Container} from "@mui/material";
import RegistrationForm from "../../components/forms/registration-form.jsx";

const LoginPage = () => {
    return (
        <Box>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflowY: "hidden",
                        minHeight: "100vh",
                    }}>
                    <RegistrationForm/>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginPage;