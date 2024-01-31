import React from "react"
import theme from '../../Assets/theme'
import { Box, Container,Button ,Typography } from '@mui/material';
import bgImage from '../../Assets/Illu.svg';
import MainButton from '../../Components/MainButton';
import Fade from '@mui/material/Fade';


function Landing() {

    return(
        // <Box sx={{ height:'90vh', justifyContent:'center' ,display: 'flex',backgroundImage:`url(${bgImage})`,backgroundSize:'cover',backgroundPositionY:'-20em' }}>
        <Container>
        <Box sx={{ height:'90vh', mt:'15em'}}>
        <Fade timeout={2000} in={true}>
        <Box sx={{minWidth:'60%',position:'absolute',right:0,top:'10vh'}}>
                <img src={bgImage} ></img>
            </Box>
        </Fade>
            {/* <Box sx={{maxWidth:'50%',px:'2em',pt:'2em',pb:'1em',border:`1px solid ${theme.Primary}1a`, borderRadius:'20px',background:'linear-gradient(35deg, rgba(31,31,31,0.1) 0%, rgba(67,146,241,0.1) 29%, rgba(230,230,230,0.1) 100%)',  backdropFilter:'blur(3px)'}}> */}
            <Box sx={{maxWidth:'50%'}}>
                <Typography fontWeight={700} variant="h2" sx={{color:`${theme.Primary}`}}>
                Around You
                </Typography>
                <Typography  variant="h5" sx={{color:`${theme.Primary}`}}>
                “WHAT’S TRENDING”        
                </Typography>
                <Typography variant="subtitle1" sx={{color:`${theme.Primary}`}}>
                is a captivating
                destination that has been gaining significant attention in recent years.
                Known for its rich cultural heritage, stunning landscapes, and
                ambitious development projects..        
                </Typography>
                <Box sx={{display:'flex', width:'100%', justifyContent:'flex-end',right:'2px',marginY:'2em'}}>
                <MainButton text="Contact us now"/>
                </Box>
            </Box> 
        </Box>
        </Container>
        );
    }

export default Landing;