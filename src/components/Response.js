import {  Typography } from '@mui/material'
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
const Response = ({data}) => {
  let obj= data;
  let readableObj ='{ \n';
  for(let key in obj){
    readableObj += '\t'
    readableObj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`;
    if (Object.keys(obj).pop()!== key.toString()){
      readableObj +=  ',\n'
    }

  }
  readableObj += '\n}'
  return (
    <div>
      <Typography mt={2} mb={2}>Response</Typography>
      <TextareaAutosize
      className='textarea'
      minRows={3}
      maxRows={5}
      disabled="disabled"
      value={readableObj}
    />
    </div>
  )
}

export default Response
