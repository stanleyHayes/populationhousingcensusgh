import {Card, CardContent, Stack, Typography} from "@mui/material";
import PropTypes from "prop-types";

const Stat = ({icon, title, value}) => {
    return (
        <Card variant="outlined" sx={{borderRadius: 4}}>
            <CardContent>
                <Stack direction="column" spacing={2}>
                    {icon}
                    <Typography
                        variant="body2"
                        sx={{fontFamily: "Playwrite HR Lijeva", color: "text.secondary", fontWeight: "bold"}}>
                        {title}
                    </Typography>
                    <Typography variant="h4" sx={{color: "text.primary"}}>
                        {value}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

Stat.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
}

export default Stat;