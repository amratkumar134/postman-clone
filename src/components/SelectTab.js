import React, { useState,useContext } from 'react'
import './SelectTab.css'
import { Tab, Tabs } from '@mui/material'
import CreateTable from './CreateTable';
import CreateJsonText from './CreateJsonText';
import { DataContext } from '../context/DataProvider';
const SelectTab = () => {
    const[value,setValue]= useState(0);
    const {paramData,setParamData,headerData,setHeaderData}=useContext(DataContext);
    const handleChange=(event,newValue)=>{
        setValue(newValue)

    }
  return (
    <div className='tabs'>
      <Tabs value={value} onChange={handleChange}
      TabIndicatorProps={{sx:{backgroundColor: '#F26B3A',height:4,bottom:2}}}
      textColor='none'
       >
          <Tab className='Tab' label="Params" />
          <Tab className='Tab' label="Headers" />
          <Tab className='Tab' label="Body" />
        </Tabs>
        <div
      role="tabpanel"
      hidden={value !== 0}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
      
    >
      <CreateTable text={'Query Params'} data={paramData} setData={setParamData} />
    </div>
    <div
      role="tabpanel"
      hidden={value !== 1}
      id={`simple-tabpanel-${1}`}
      aria-labelledby={`simple-tab-${1}`}
      
    >
      <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
    </div>
    <div
      role="tabpanel"
      hidden={value !== 2}
      id={`simple-tabpanel-${2}`}
      aria-labelledby={`simple-tab-${2}`}
      
    >
      <CreateJsonText />
    </div>
    </div>
  )
}

export default SelectTab
