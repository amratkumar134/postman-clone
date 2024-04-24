import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";
import React, { useState } from "react";
import "./AddRow.css";
const AddRow = ({ addRows, rowId, data, setData }) => {
  const [checkCheckbox, setCheckCheckbox] = useState(false);
  const handleChange = (e) => {
    let result = data.filter(entry => entry.id === Number( e.target.name))[0];
    if (!checkCheckbox) {
      setCheckCheckbox(true);
      addRows(oldArr => [...oldArr, rowId])
      result={ ...result, id: rowId, check: true};
    } else {
      setCheckCheckbox(false);
      result = { ...result, id: rowId, check: false};
    }

    
  
    let index = data.findIndex((value) => value.id === Number(e.target.name));
    if(index === -1){
setData(oldArr =>[ ...oldArr, result]);
    }else{
const newArray = Object.assign([ ...data],{
  [index]:result
});
setData(newArray);
    }



  }
 
  const onTextChange = (e) => {
    
    let result = data.filter(entry => entry.id === rowId)[0];
    result={ ...result, id: rowId, [e.target.name]: e.target.value};
    let index = data.findIndex((value) => value.id === rowId);
    if(index === -1){
setData(oldArr =>[ ...oldArr, result]);
    }else{
const newArray = Object.assign([ ...data],{
  [index]:result
})
setData(newArray);
    }
    console.log(data);
  }
  return (
    <TableRow>
      <TableCell className="tablecell">
        <Checkbox
          className="checkbox"
          checked={checkCheckbox}
          size="large"
          onChange={(e) => handleChange(e)}
          name={rowId}
        />
      </TableCell>
      <TableCell className="tablecell">
        <TextField
          className="textfield"
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          onChange={(e) => onTextChange(e)}
          name="key"
        />
      </TableCell>
      <TableCell className="tablecell">
        <TextField
          className="textfield"
          inputProps={{ style: { height: 30, padding: "0 5px" } }}
          onChange={(e) => onTextChange(e)}
          name="value"
        />
      </TableCell>
    </TableRow>
  )
};

export default AddRow;
