import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Theme from '../../Assets/theme';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import MainButton from '../../Components/MainButton';


function ContactUs(props) {
  const {email} = props;

  return (
    <React.Fragment>
        {/* <Box sx={{display:'flex',mt:'2em',justifyContent:'space-between'}}> */}
            {/* <Box sx={{Width:'30%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                <Typography color={Theme.Text.Dark} variant='subtitle1'>
                If you Have any quastions, or for more information,
                You can contact us via E-mail
                </Typography>
            </Box>      */}
            <Box sx={{backgroundColor:'#fff',borderRadius:'20px',px:'2em',py:'2em'}}>
            <Box>
            <Typography color={(Theme.Text.Dark+'a1')} variant='subtitle1'>
                If you Have any inquiries, or for more information,
                You can contact us via E-mail
                </Typography>
            <Typography color={(Theme.Text.Dark+'a1')} variant='subtitle2'>
                Please mention <strong>period</strong> and <strong>Date</strong> for those who want to book a services
                </Typography>
            <Typography fontWeight={500} variant='body1'>
                </Typography>
                <Box sx={{width:'100%',display:'flex',justifyContent:'center',mt:'2em'}}>
                <MainButton variant='Secondary' text={email} />
                </Box>
            </Box>
            </Box>     
        {/* </Box> */}
    </React.Fragment>
  );
}
ContactUs.prototypes = {
  text: PropTypes.string,
};
export default ContactUs;
