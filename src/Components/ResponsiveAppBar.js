import * as React from 'react';
import theme from '../Assets/theme'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ALogo from '../Assets/Untitled-1.svg'
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Theme from '../Assets/theme';



function ResponsiveAppBar(props) {
  const {sections} = props;
  const [setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const containerRef = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
      <Slide timeout={400} in={true} container={containerRef.current}>
    <AppBar sx={{
      backdropFilter:'blur(5px)',
      borderRadius: "50px",
      backgroundColor:'rgba(0,0,0,0.4)',
      width:'75vw',
      top:'1em',
      margin:'auto',
      right: '12vw'
    }} 
    position="fixed"
    component="nav"
    elevation='0'
    >
      <Container sx={{paddingX:{xs:'2em',md:'5em'}}} maxWidth="xl">
        <Toolbar sx={{justifyContent:{xs:'space-between',}}} disableGutters>
          <AnchorLink 
          offset='300' 
          href={'#landing'}>
          <div key={'landing'}  className='LogoContainer'>
          <img  src={ALogo} className='Logo'></img>
          </div>
          </AnchorLink>
          <Box sx={{ flexGrow: 1, display: {xs:'none', md: 'flex' }, ml:2 }}>
          {sections.map((section) => (
            <AnchorLink
            offset='100'
            href={`#${section.url}`}
            className='navElemnt'
            >
              <Button
                key={section}
                // onClick={handleCloseNavMenu}
                // href={`#${section.url}`}
                sx={{ my: 2, color: `${theme.Text.Light}`, display: 'block' }}
              >
                {section.title}
              </Button>
          </AnchorLink>
            ))

             }

          </Box>
          <Box sx={{ flexGrow: 0, display:{md:'none',xs:'block'} }}>
            <Tooltip title="Open Menue">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuRoundedIcon sx={{color:`${theme.Text.Light}`}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              elevation={0}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {sections.map((section) => (
                <AnchorLink
                offset='100'
                href={`#${section.url}`}
                className='navElemnt'
                >
                <MenuItem key={section} onClick={handleCloseUserMenu}>
                  <Typography sx={{color:`${Theme.Primary}` }} textAlign="center">{section.title}</Typography>
                </MenuItem>
                </AnchorLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
        </Slide>
  );
}
ResponsiveAppBar.prototypes = {
  sections: PropTypes.array,
};
export default ResponsiveAppBar;
