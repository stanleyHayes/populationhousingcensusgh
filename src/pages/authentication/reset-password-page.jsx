import {Box, Container} from "@mui/material";
import ResetPasswordForm from "../../components/forms/reset-password-form.jsx";

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
                    <ResetPasswordForm/>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginPage;