import * as React from 'react';
import { Box, Container,Button ,Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Theme from '../Assets/theme';
import { styled } from '@mui/material/styles';
import { ContentCopy } from '@mui/icons-material';


function Footer(props) {
  const {text,variant} = props;

  return (  
    <React.Fragment>
    <section style={{backgroundColor:`${Theme.Primary}`}}>
      <Container sx={{paddingY:"0.2em",width:'100%'}}>  
        <Box sx={{height:'4rem',display:'flex',alignItems:'center',color:`${Theme.Text.Light}`,pl:'2rem'}}>
        © Copyright 2024 - Around You
        </Box>
      </Container>
    </section>
    </React.Fragment>
  );
}
Footer.prototypes = {
  text: PropTypes.string,
};
export default Footer;
