import { Fragment } from 'react';
import theme from '../../Assets/theme'
import { Box, Container, Typography } from '@mui/material';
import img from '../../Assets/AboutUsImage.jpg'

function About() {
    const content = `Saudi Arabia, with its capital city Riyadh, is a captivating
    destination that has been gaining significant attention in recent years.
    Known for its rich cultural heritage, stunning landscapes, and
    ambitious development projects..`
    const subcontent = `Riyadh, the bustling capital of Saudi Arabia, serves as the gateway to
    the country's diverse offerings. The city is experiencing a dynamic
    transformation under the Vision 2030 plan, spearheaded by Crown
    Prince Mohammed bin Salman. This ambitious initiative aims to
    diversify the economy, boost tourism, and enhance the quality of life
    for both residents and visitors.` 

    return(
        <Fragment>
        <Box sx={{display:'flex',mt:'2em'}}>
            <Box sx={{Width:'50%',display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Typography variant='body1' sx={{color:`${theme.Text.Dark}`,marginBottom:'2em'}}>{content}</Typography>
            <Typography variant='body1' sx={{color:`${theme.Text.Dark}`}}>{subcontent}</Typography>
            </Box>     
            <Box sx={{Width:'50%',display:'flex',justifyContent:'end'}}>
            <img style={{maxWidth:'80%', borderRadius:'20px'}}  src={img}></img>
            </Box>     
        </Box>
        </Fragment>
        );
    }

export default About;