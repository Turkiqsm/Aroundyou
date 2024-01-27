import ResponsiveAppBar from '../Components/ResponsiveAppBar'
import { Container, Typography } from '@mui/material';
import Landing from './Sections/Landing'
import { Fragment } from 'react';
function Main() {
    // console.log(theme)
    const sections = [
        { title: 'About Us', url: 'AboutUs' },
        { title: 'Services and Activities', url: 'ServicesAndActivities' },
        { title: 'Services', url: 'Services' },
        { title: 'Visitors', url: 'RiyadhVisitors' },
        { title: 'Competitors', url: 'Competitors' },
        { title: 'Contact Us', url: 'ContactUs' },
      ];
    return (
        <Fragment>
        <ResponsiveAppBar sections={sections}/>
        <Landing/>
            {sections.map((section)=>(
                <section  id={section.url}>
                <Container sx={{marginY:"6em"}}>                    
                    <Typography  variant="h4" gutterBottom>
                    {section.title}
                    </Typography>
                    {(() => {
                    switch(section.url) {
                      case 'AboutUs':
                      console.log("aboutus")
                        return <aboutus/>
                      {/* case 'HowDoWeWork':
                        return <HowDoWeWork/>
                      case 'ContactUs':
                        return <Contactus/> */}
                      default:
                  }
                })()}
                </Container>
                </section>
            ))}
        </Fragment>
    );
  }
  
  export default Main;