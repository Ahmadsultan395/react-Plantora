import { Button } from '@mui/material'
import React from 'react'

const Btn = ({children , sx={} , ...props}) => {
  return (
    <Button sx={{...sx}} {...props}>
        {children}
    </Button>
  )
}

export default Btn
