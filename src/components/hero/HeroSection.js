import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroText from './HeroText';
import HeroImage from '../hero/HeroImage';
export default function HeroSection() {
  return (
   <Stack direction= "row" spacing={2} justifyContent= 'space-between'>
    <Box sx={{flex:'2'}}><HeroText/></Box>
    <Box sx={{flex:'1'}}><HeroImage/></Box>
   </Stack>
  )
}
