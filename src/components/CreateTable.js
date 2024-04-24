import React, { useState } from "react";
import "./CreateTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import AddRow from "./AddRow";
const CreateTable = ({ text,data,setData }) => {
const [rows,addRows]=useState([0])

  return (
    <div>
      <Typography mt={2} mb={2}>
        {text}
      </Typography>
      <Table sx={{ minWidth: '100%',border:'1px solid rgba(224,224,224,1 )' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell"></TableCell>
            <TableCell className="tablecell" >KEY</TableCell>
            <TableCell className="tablecell" >VALUE</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {
          rows.map((row,index)=>(
<AddRow addRows={addRows} rowId={index} key={index} data={data} setData={setData}

 />
          ))

          
        }
        <TableRow>
             
            </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );
};

export default CreateTable;
