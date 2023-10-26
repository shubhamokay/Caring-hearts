//import { Container } from '@mui/material'
import React from 'react'

function Alert ( props ) {
  return (
    <div sx={{ my:15, height:'2px' }}>
    <div className="alert alert-success z-[1]" role="alert">
        <h1>Successfully Logged in as </h1>
    </div>
    </div>
  )
}

export default Alert
