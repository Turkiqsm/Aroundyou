import * as React from 'react';
import ServiceCard from '../../Components/ServiceCard';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Services(props) {
  const {services} = props;

  return (
    <React.Fragment>
    <Box sx={{display:{md:'flex',sx:'block'},flexWrap:{md:'wrap',sx:'nowrap',justifyContent:'flex-start'}}}>
    {services.map((service)=>(
    <ServiceCard service={service}/>
    ))}
    </Box>
    </React.Fragment>
  );
}
Services.prototypes = {
  services: PropTypes.array,
};
export default Services;
