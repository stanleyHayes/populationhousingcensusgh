import Layout from "../../components/layout/layout";
import {Box, Button, Container, Grid2 as Grid, Stack, Typography} from "@mui/material";
import notFoundImage from "../../assets/images/not-found.png";
import {Link} from "react-router";

const NotFoundPage = () => {

    return (
        <Layout>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '98vh'}}>
                <Container sx={{my: 4}}>
                    <Stack justifyContent="center" mb={2} alignItems="center">
                        <img
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: 'auto',
                                height: 350
                            }}
                            src={notFoundImage}
                            alt="Page Not Found"
                            title="Page Not Found"
                        />
                    </Stack>
                    <Typography mb={2} sx={{color: 'text.primary'}} align="center" variant="h5">
                        Page not found
                    </Typography>
                    <Typography sx={{color: 'text.secondary', mb: 4}} align="center" variant="body1">
                        The page you requested for could not be found on the server
                    </Typography>
                    <Grid container={true} justifyContent="center">
                        <Grid item={true} xs={12} md="auto">
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <Button
                                    color="secondary"
                                    fullWidth={true}
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                    variant="outlined"
                                    disableElevation={true}>
                                    Back Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default NotFoundPage;
