import {Box, Container} from "@mui/material";
import ForgotPasswordForm from "../../components/forms/forgot-password-form.jsx";

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
                    <ForgotPasswordForm/>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginPage;