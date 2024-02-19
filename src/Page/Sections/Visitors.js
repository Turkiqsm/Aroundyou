import * as React from 'react';
import { Box, Container,Button ,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Theme from '../../Assets/theme'
import map from "../../Assets/map.svg"


function Visitors(props) {
  const {text} = props;
  const content = [        
  { year: '2021', visitors: '1.2 million',spending:'7.47 billion' },
  { year: '2022', visitors: '+3 million',spending:'+18 billion' },
  { year: '2023', visitors: '+5 million',spending:'+25 billion' },
];
  return (  
    <React.Fragment>
    <Container sx={{display:'flex',flexDirection:{xs:'column'}}}>
    <Box sx={{width:{md:'40%',xs:'100%'},mb:{xs:'3rem'}}}>
    <img src={map}></img>
    </Box>
    <Box sx={{width:{md:'60%',xs:'100%'},display:'flex',flexDirection:'column',alignItems:'center'}}>
    {content.map((elem)=>(
        <Box sx={{width:{md:'40%',xs:'90%'},mb:'1rem',p:'1.3rem',borderRadius:'20px', backgroundColor:`${Theme.PrimaryLight}`}}>
        <Typography variant='h5' sx={{color:`${Theme.Secondary}`,display:'flex',alignItems:'baseline'}}>
        {elem.year}
        </Typography>
        <Typography variant='h6' sx={{color:`${Theme.Secondary}`,display:'flex',alignItems:'baseline'}}>
        {elem.visitors}  <Typography variant='subtitle2' sx={{opacity:'0.7',ml:'0.5em'}}>visitor</Typography> 
        </Typography>
        <Typography variant='subtitle1' sx={{color:`${Theme.Secondary}`,display:'flex',alignItems:'baseline'}}>
             {elem.spending} <Typography variant='subtitle2' sx={{opacity:'0.7',ml:'0.5em'}}>SAR</Typography> 
        </Typography>
        </Box>
    ))}
    {/* <Typography sx={{color:`${Theme.Secondary}`}}>
    2021 - visitors : 1.2 million
    Spending : 7.47 billion SAR
    </Typography>
    <Typography sx={{color:`${Theme.Secondary}`}}>
    2022 - visitors: +3 million
    Spending : +18 billion SAR
    </Typography>
    <Typography sx={{color:`${Theme.Secondary}`}}>
    2023 - first Q - visitors: +5 million
    Spending : +25 billion  
    </Typography> */}
    </Box>
    </Container>    
    </React.Fragment>
  );
}
Visitors.prototypes = {
  text: PropTypes.string,
};
export default Visitors;
