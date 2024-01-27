import React from "react"
import theme from '../../Assets/theme'
import { Box, Container,Button ,Typography } from '@mui/material';
import bgImage from '../../Assets/Illu.svg'
import mainButton from '../../Components/mainButton'

function Landing() {
    return(
        // <Box sx={{ height:'90vh', justifyContent:'center' ,display: 'flex',backgroundImage:`url(${bgImage})`,backgroundSize:'cover',backgroundPositionY:'-20em' }}>
        <Container>
        <Box sx={{ height:'90vh', mt:'15em'}}>
            <Box sx={{maxWidth:'50%'}}>
                <Typography fontWeight={700} variant="h1" sx={{color:`${theme.Primary}`}}>
                Around You
                </Typography>
                <Typography  variant="h4" sx={{color:`${theme.Primary}`}}>
                “WHAT’S TRENDING”        
                </Typography>
                <Typography variant="h6" sx={{color:`${theme.Primary}`}}>
                is a captivating
                destination that has been gaining significant attention in recent years.
                Known for its rich cultural heritage, stunning landscapes, and
                ambitious development projects..        
                </Typography>
                <Button variant="contained" color="primary">text</Button>
                <mainButton text="contactUs"/>
            </Box> 
            <Box sx={{minWidth:'50%',position:'absolute',right:0,top:'20vh'}}>
                <img src={bgImage} ></img>
            </Box>
        </Box>
        </Container>
        );
    }

export default Landing;