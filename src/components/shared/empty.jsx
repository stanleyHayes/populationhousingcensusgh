import {Card, CardContent, CardMedia, Grid2 as Grid, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Empty = ({title, description, action, image}) => {
    return (
        <Card variant="outlined" sx={{borderWidth: 2, my: 3, borderStyle: "dashed"}}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <CardMedia component="img" src={image} sx={{objectFit: "cover", width: 250, height: 250}}/>
                    </Stack>
                    <Typography variant="h4" align="center"
                                sx={{fontFamily: "Playwrite HR Lijeva", color: "text.primary"}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" align="center" sx={{color: "text.secondary"}}>
                        {description}
                    </Typography>
                    <Grid container={true} spacing={2} justifyContent="center">
                        <Grid size={{xs: 12, md: "auto"}}>
                            {action}
                        </Grid>
                    </Grid>
                </Stack>
            </CardContent>
        </Card>
    )
}

Empty.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.element,
    image: PropTypes.string.isRequired
}

export default Empty;