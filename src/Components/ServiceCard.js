import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Theme from '../Assets/theme';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {  FlagRounded, LocalTaxiRounded, NightShelterRounded, StadiumRounded,NatureRounded } from '@mui/icons-material';

function ServiceCard(props) {
  const {service} = props;

  return (
    <Card className='interaction' elevation={0} sx={{ maxWidth: {sx:'24em',md:'23em'},borderRadius:'20px',pt:'16px',mr:{md:'1em',xs:0},mt:'1em' }}>
           {(() => {
                    switch(service.title) {
                      case 'Tour':
                        return         <FlagRounded sx={{width:'4em',height:'4em', color:`${Theme.Primary}`}}></FlagRounded>
                      case 'Transportation':
                        return         <LocalTaxiRounded sx={{width:'4em',height:'4em', color:`${Theme.Primary}`}}></LocalTaxiRounded>
                      case 'Accommodation':
                        return        <NightShelterRounded sx={{width:'4em',height:'4em', color:`${Theme.Primary}`}}></NightShelterRounded>
                      case 'Cultural Experiences':
                        return         <StadiumRounded sx={{width:'4em',height:'4em', px:'16px', color:`${Theme.Primary}`}}></StadiumRounded>
                      case 'Culinary Experiences':
                        return         <NatureRounded sx={{width:'4em',height:'4em', px:'16px', color:`${Theme.Primary}`}}></NatureRounded>
                      default:
                  }
                })()}
        {/* <PinDropRounded sx={{width:'4em',height:'4em', color:`${Theme.Primary}`}}></PinDropRounded> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:`${Theme.Primary}`}}>
            {service.title}
          </Typography>
          <Typography variant="body2" sx={{color:`${Theme.Primary}`}}>
            {service.content}
          </Typography>
        </CardContent>
    </Card>
  );
}
ServiceCard.prototypes = {
  service: PropTypes.object,
};
export default ServiceCard;

