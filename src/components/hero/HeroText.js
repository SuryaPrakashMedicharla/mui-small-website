import React from 'react'
import { Box, Typography} from '@mui/material';
export default function HeroText() {
  return (
    <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width:'100%',
              height:'500px'
    }}>
        <Typography variant='h4' fontWeight= '500'>
            Post Graduate Programme in Data Science
        </Typography>
    </Box>
  )
}
