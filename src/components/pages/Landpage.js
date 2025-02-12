import { Box, Container } from '@mui/material';
import React from 'react'
import  NavBar from '../navsection/NavBar';
import HeroSection from '../hero/HeroSection';
import  AccordianSection from '../AccordianSection';
function Landpage() {
  return (
    <Container>
    <Box>
        < NavBar/>
        <HeroSection/>
        < AccordianSection/>
    </Box>
    </Container>
  )
}

export default Landpage;