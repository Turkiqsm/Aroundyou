import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Theme from '../Assets/theme';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {  PinDropRounded } from '@mui/icons-material';

function ServiceCard(props) {
  const {service} = props;

  return (
    <Card elevation={0} sx={{ maxWidth: {sx:'24em',md:'23em'},borderRadius:'20px',pt:'16px',mr:{md:'1em',sx:0},mt:'1em' }}>
        <PinDropRounded sx={{width:'4em',height:'4em', color:`${Theme.Primary}`}}></PinDropRounded>
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

