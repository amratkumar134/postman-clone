import {  Typography } from '@mui/material'
import { useContext } from 'react';
import './CreateJson.css'
import TextareaAutosize from 'react-textarea-autosize';
import React from 'react'
import { DataContext } from '../context/DataProvider';
const CreateJsonText = () => {
  const {setJsonText}=useContext(DataContext);
const onValueChange=(e)=>{
  setJsonText(e.target.value)
}
  return (
    <>
      <Typography mt={2} mb={2}>JSON</Typography>
      <TextareaAutosize
      className='textarea'
      minRows={3}
      maxRows={5}
      onChange={(e)=>{
        onValueChange(e)
      }}
    />
                
            
    </>
  )
}

export default CreateJsonText
