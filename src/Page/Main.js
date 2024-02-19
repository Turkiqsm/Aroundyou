import ResponsiveAppBar from '../Components/ResponsiveAppBar'
import Footer from '../Components/Footer'
import { Container, Typography,Box } from '@mui/material';
import Landing from './Sections/Landing'
import { Fragment } from 'react';
import ContactUs from './Sections/ContactUs';
import Competitors from './Sections/Competitors'
import About from './Sections/About';
import Theme from '../Assets/theme';
import Services from './Sections/Services';
import Visitors from './Sections/Visitors'
import Partners from './Sections/Partners'
import bigBg from '../Assets/big-bg1.svg'

function Main() {
    // console.log(theme)
    const email = 'Aroundyou.ksa@gmail.com';
    const sections = [
        { title: 'About us', url: 'AboutUs' },
        // { title: 'Services and Activities', url: 'ServicesAndActivities' },
        { title: 'Services', url: 'Services' },
        { title: 'Visitors', url: 'RiyadhVisitors' },
        { title: 'Partners', url: 'Partners' },
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
        content: `Provide transportation options
        for your clients, including airport
        pick-up, drop off with tour guid
        or without “ chauffeur”
        .` },
        { title: 'Accommodation', 
        content: `Assist clients in finding and
        booking suitable accommodations
        in Riyadh, ranging from luxury
        hotels and resorts to budget-
        friendly options.` },
        { title: 'Cultural Experiences', 
        content: `Organize immersive cultural
        experiences that allow visitors
        to engage with the local culture
        and traditions. This can include
        arranging visits to traditional
        markets, heritage sites.` },
        { title: 'Culinary Experiences', 
        content: `Showcase the
        rich culinary heritage of Saudi Arabia
        by organizing food tours, or dining
        experiences at traditional restaurants.
        Highlight local specialties and
        introduce clients to the diverse flavors
        of Saudi Arabian cuisine.` },
      ];
     function darkSection(section){
      return section.url === 'RiyadhVisitors'?{backgroundColor:`${Theme.Primary}`}:{backgroundColor:`${Theme.Secondary}`};
      }
     function lightText(section){
      return section.url === 'RiyadhVisitors'?{color:`${Theme.Secondary}`}:{color:`${Theme.Primary}`};
      }
      
    return (
        <Fragment>
            <Box sx={{minWidth:{md:'100%',xs:'180%'},position:'absolute',right:0,top:0,zIndex:-999,opacity:0.4}}>
            <img src={bigBg} ></img>
            </Box>
        <ResponsiveAppBar sections={sections}/>
        <section id='landing'>
        <Landing/>
        </section>
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
                      case 'ContactUs':
                        return <ContactUs email={email}/>
                      case 'RiyadhVisitors':
                        return <Visitors/>
                      case 'Partners':
                        return <Partners/>
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
            <Footer/>
        </Fragment>
    );
  }
  
  export default Main;