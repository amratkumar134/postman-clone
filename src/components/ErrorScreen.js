import { Typography } from '@mui/material';
import React from 'react'
import error from './assets/error.png'
import './ErrorScreen.css'
// import TextareaAutosize from 'react-textarea-autosize';
const ErrorScreen = () => {
    
  return (
    <div>
      <Typography mt={2} mb={2}>Response</Typography>
      <div  style={{display:'flex'}}>
        <img className='error-img' src={error} alt=''></img>
      </div>
    </div>
  )
}

export default ErrorScreen
