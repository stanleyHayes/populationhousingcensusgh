import {Box, Typography} from "@mui/material";
import SectionFooter from "../shared/section-footer.jsx";
import SectionHeader from "../shared/section-header.jsx";

const WelcomeSection = () => {
    return (
        <Box>
            <SectionHeader title="Welcome"/>

            <Typography variant="h3" sx={{color: "text.primary", mb: 4}}>
                Welcome to the Population and Housing Census
            </Typography>
            <Typography variant="body1" sx={{color: "text.secondary", mb: 2}}>
                Welcome to the <Typography component="span" display="inline" variant="body1" sx={{fontWeight: "bold"}}>Population
                and Housing Census</Typography>. This crucial exercise, conducted by the <Typography component="span"
                                                                                                     display="inline"
                                                                                                     variant="body1"
                                                                                                     sx={{fontWeight: "bold"}}>Ghana
                Statistical Service</Typography> under the auspices of the <Typography component="span" display="inline"
                                                                                       variant="body1"
                                                                                       sx={{fontWeight: "bold"}}>Republic
                of Ghana</Typography>, is designed to gather essential
                data to shape the future of our nation.
            </Typography>
            <Typography variant="body1" sx={{color: "text.secondary", mb: 2}}>
                Your participation is vital because <Typography component="span" display="inline" variant="body1"
                                                                sx={{fontWeight: "bold"}}>&#34;You Count. So Get
                Counted!&#34;</Typography>By completing this questionnaire,
                you are contributing to the development of policies and programs that will enhance the well-being of all
                Ghanaians.
            </Typography>

            <Typography variant="body1" sx={{color: "text.secondary", mb: 2}}>
                Thank you for being an active part of building Ghana’s future. Let’s work together to make this census a
                success!
            </Typography>
            <SectionFooter/>
        </Box>
    )
}

export default WelcomeSection;