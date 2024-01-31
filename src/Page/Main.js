import ResponsiveAppBar from '../Components/ResponsiveAppBar'
import { Container, Typography,Box } from '@mui/material';
import Landing from './Sections/Landing'
import { Fragment } from 'react';
import ContactUs from './Sections/ContactUs';
import Competitors from './Sections/Competitors'
import About from './Sections/About';
import Theme from '../Assets/theme';
import Services from './Sections/Services';
import bigBg from '../Assets/big-bg1.svg'

function Main() {
    // console.log(theme)
    var sectionStyle = {};
    const sections = [
        { title: 'About us', url: 'AboutUs' },
        // { title: 'Services and Activities', url: 'ServicesAndActivities' },
        { title: 'Services', url: 'Services' },
        { title: 'Visitors', url: 'RiyadhVisitors' },
        { title: 'Competitors', url: 'Competitors' },
        { title: 'Contact Us', url: 'ContactUs' },
      ];
    const services = [
        { title: 'Tour', 
        content: `Design and offer curated tour
        package that highlight the best
        attractions and experiences in
        Riyadh and its surrounding
        areas.` },
        // { title: 'Services and Activities', url: 'ServicesAndActivities' },
        { title: 'Transportation', 
        content: `Design and offer curated tour
        package that highlight the best
        attractions and experiences in
        Riyadh and its surrounding
        areas.` },
        { title: 'Accommodation', 
        content: `Design and offer curated tour
        package that highlight the best
        attractions and experiences in
        Riyadh and its surrounding
        areas.` },
        { title: 'Cultural Experiences', 
        content: `Design and offer curated tour
        package that highlight the best
        attractions and experiences in
        Riyadh and its surrounding
        areas.` },
        { title: 'Culinary Experiences', 
        content: `Design and offer curated tour
        package that highlight the best
        attractions and experiences in
        Riyadh and its surrounding
        areas.` },
      ];
     function darkSection(section){
      return section.url === 'Competitors'?{backgroundColor:`${Theme.Primary}`}:{backgroundColor:`${Theme.Secondary}`};
      }
     function lightText(section){
      return section.url === 'Competitors'?{color:`${Theme.Secondary}`}:{color:`${Theme.Primary}`};
      }
      
    return (
        <Fragment>
            <Box sx={{minWidth:'100%',position:'absolute',right:0,top:0,zIndex:-999,opacity:0.4}}>
            <img src={bigBg} ></img>
            </Box>
        <ResponsiveAppBar sections={sections}/>
        <Landing/>
            {sections.map((section)=>(
                <section style={darkSection(section)} id={section.url}>
                <Container sx={{paddingY:"4em"}}>                    
                    <Typography style={lightText(section)} sx={{mb:'1em'}} fontWeight={600} variant="h4" gutterBottom>
                    {section.title}
                    </Typography>
                    {(() => {
                    switch(section.url) {
                      case 'AboutUs':
                        return <About/>
                      case 'Services':
                        return <Services services={services}/>
                      case 'Competitors':
                        return <Competitors/>
                      case 'ContactUs':
                        return <ContactUs/>
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