import React from 'react'
import { Stack } from '@mui/material'
import FirstCard from './FirstCard'
import SecondCard from './SecondCard'
import ThirdCard from './ThirdCard'
export default function CardDisplay() {
  return (
    <Stack direction= 'row' gap={3} m={4}>
     <FirstCard/>
     <SecondCard/>
     <ThirdCard/>
    </Stack>
  )
}
