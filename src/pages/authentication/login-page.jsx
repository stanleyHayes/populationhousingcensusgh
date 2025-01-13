import {Box, Container} from "@mui/material";
import LoginForm from "../../components/forms/login-form.jsx";

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
                    <LoginForm/>
                </Box>
            </Container>
        </Box>
    )
}

export default LoginPage;