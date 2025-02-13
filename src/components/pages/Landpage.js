import { Box, Container } from '@mui/material';
import React from 'react'
import  NavBar from '../navsection/NavBar';
import HeroSection from '../hero/HeroSection';
import  AccordianSection from '../AccordianSection';
import  CardDisplay from '../cardsection/CardDisplay';
function Landpage() {
  return (
    <Container>
    <Box>
        < NavBar/>
        <HeroSection/>
        < AccordianSection/>
        < CardDisplay/>
    </Box>
    </Container>
  )
}

export default Landpage;