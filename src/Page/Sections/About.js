import { Fragment } from 'react';
import theme from '../../Assets/theme'
import { Box, Container, Typography } from '@mui/material';
import img from '../../Assets/AboutUsImage.jpg'

function About() {
    const content = `Riyadh, the capital city of Saudi Arabia, is a captivating destination undergoing a transformation under the Vision 2030 plan led by Crown Prince Mohammed bin Salman. This plan aims to diversify the economy, boost tourism, and improve the quality of life for residents and visitors.`
    const subcontent = `Riyadh, the bustling capital of Saudi Arabia, serves as the gateway to
    the country's diverse offerings. The city is experiencing a dynamic
    transformation under the Vision 2030 plan, spearheaded by Crown
    Prince Mohammed bin Salman. This ambitious initiative aims to
    diversify the economy, boost tourism, and enhance the quality of life
    for both residents and visitors.` 

    return(
        <Fragment>
        <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column-reverse'},mt:'2em',}}>
            <Box sx={{width:{md:'50%',xs:'100%'},display:'flex',alignItems:'center',flexDirection:'column'}}>
            <Typography variant='body1' sx={{color:`${theme.Text.Dark}`,marginBottom:'2em'}}>{content}</Typography>
            {/* <Typography variant='body1' sx={{color:`${theme.Text.Dark}`}}>{subcontent}</Typography> */}
            </Box>     
            <Box sx={{width:{md:'50%',xs:'100%'},display:'flex',justifyContent:'flex-end'}}>
            <img className='Aboutimage'  src={img}></img>
            </Box>     
        </Box>
        </Fragment>
        );
    }

export default About;