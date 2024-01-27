import { Fragment } from 'react';
import theme from '../../Assets/theme'
import { Box, Typography } from '@mui/material';

function aboutus() {
    const content = `Riyadh, the bustling capital of Saudi Arabia, serves as the gateway to
    the country's diverse offerings. The city is experiencing a dynamic
    transformation under the Vision 2030 plan, spearheaded by Crown
    Prince Mohammed bin Salman. This ambitious initiative aims to
    diversify the economy, boost tourism, and enhance the quality of life
    for both residents and visitors.`

    return(
        <Fragment>
        <Box sx={{minWidth:'50%', mt:'5em'}}>
        <Typography sx={{color:`${theme.Primary}`}}>{content}</Typography>
        </Box>     
        </Fragment>
        );
    }

export default aboutus;