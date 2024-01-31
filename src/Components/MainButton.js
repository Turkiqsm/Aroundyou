import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Theme from '../Assets/theme';
import { styled } from '@mui/material/styles';
import { ContentCopy } from '@mui/icons-material';

const PrimaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  // padding: '6px 12px',
  border: '1px solid',
  // lineHeight: 1.5,
  backgroundColor:  Theme.Accent,
  borderColor:  Theme.Accent,
  '&:hover': {
    backgroundColor: Theme.Accent,
    // borderColor: Theme.Primary,
    boxShadow: `${Theme.AccentLight} 0px 4px 12px 2px`,
    fontWeight:'bold',
  },
});
const SecondaryButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  // padding: '6px 12px',
  border: '1px solid',
  // lineHeight: 1.5,
  color:Theme.Accent,
  backgroundColor:  '#fff',
  borderColor:  (Theme.Accent+29),
  '&:hover': {
    backgroundColor: Theme.AccentLighter,
    borderColor: Theme.Accent,
    boxShadow: 'none',
    fontWeight:'bold',
  },
});

function MainButton(props) {
  const {text,variant} = props;

  return (
    <React.Fragment>
    {/* <Button  variant="contained" sx={{backgroundColor:`${Theme.Accent}`,boxShadow:'none'}}>{text}</Button> */}
    { variant == 'Secondary'?    
    <SecondaryButton  variant="contained">{text} <ContentCopy sx={{ml:'0.8em',maxWidth:'0.8em'}}></ContentCopy> </SecondaryButton> :    
    <PrimaryButton  variant="contained">{text} </PrimaryButton>

}
    </React.Fragment>
  );
}
MainButton.prototypes = {
  text: PropTypes.string,
};
export default MainButton;
