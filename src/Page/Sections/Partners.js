import * as React from 'react';
import { Box, Container,Button ,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Theme from '../../Assets/theme';
import br from '../../Assets/Partners/png-clipart-braira-hotel-olaya-by-boudl-resort-apartment-hotel-bars-on-ocean-drive-braira-hotel-hotel.svg'
import pu from '../../Assets/Partners/20221229_purefe-logo-en.svg'
import car from '../../Assets/Partners/logo.svg'


function Partners(props) {
  const {text,variant} = props;
  const images = [car,br,pu]
  return (  
    <React.Fragment>
    <Box sx={{display:'flex',flexDirection:{md:'row',xs:'column',justifyContent:{md:'flex-start',xs:'center',}}}}>
  {images.map((img)=>(
    <Box sx={{ display:'flex',justifyContent:'center',mb:{md:0,xs:'4rem'}}} >
      <img src={img} height="100" width="250" alt="" />
    </Box>
  ))}
    </Box>

    </React.Fragment>
  );
}
Partners.prototypes = {
  text: PropTypes.string,
};
export default Partners;
