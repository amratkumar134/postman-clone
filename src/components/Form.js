import React, { useContext } from 'react'
import './Form.css'
import {Select,MenuItem, TextField, Button} from '@mui/material'
import {DataContext} from '../context/DataProvider'
const Form = ({ onSendClick}) => {
  const {formData,setFormData}= useContext(DataContext);
  const handleChange=(e)=>{
    setFormData({...formData,type: e.target.value})

  }
  const onUrlChange=(e)=>{
    setFormData({...formData,url: e.target.value})
    
  }
  return (
    <div className='form'>
      <Select value={formData.type} label="POST" 
      onChange={(e)=>handleChange(e)}
       className='dropdown'>
    <MenuItem value={'PUT'}>PUT</MenuItem>
    <MenuItem value={'GET'}>GET</MenuItem>
    <MenuItem value={'POST'}>POST</MenuItem>
    <MenuItem value={'DELETE'}>DELETE</MenuItem>
    <MenuItem value={'PATCH'}>PATCH</MenuItem>
    <MenuItem value={'OPTIONS'}>OPTIONS</MenuItem>
    <MenuItem value={'HEAD'}>HEAD</MenuItem>
  </Select>
  <TextField
   className='text-field' 
   size='small' 
   onChange={(e)=>onUrlChange(e)}
   >

  </TextField>
  <Button className='btn' variant='contained' 
  onClick={()=> onSendClick()


  }
    > Send</Button>
    </div>
  )
}

export default Form
