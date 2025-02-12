import {Box, CircularProgress, Container, LinearProgress, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectAuthentication} from "../../redux/features/authentication/authentication-slice";

const Splash = () => {
    const {loading} = useSelector(selectAuthentication);

    return (
        <Box sx={{height: '100vh', backgroundColor: 'background.default'}}>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Container sx={{height: '100%'}}>
                <Box sx={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Stack direction="column" spacing={3}>
                        <Typography sx={{color: 'text.primary'}} variant="h5" align="center">
                            Setting up account
                        </Typography>
                        <Stack direction="row" justifyContent="center">
                            <CircularProgress color="secondary" variant="indeterminate" />
                        </Stack>
                        <Typography sx={{color: 'text.secondary'}} variant="body1" align="center">
                            Please wait...
                        </Typography>
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}

export default Splash;