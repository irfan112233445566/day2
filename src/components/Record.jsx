import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
//
// const Demoaxios = () => {
//     const[rows, setRows] = useState();
//     useEffect(()=>
//       axios.get('https://dummyjson.com/users').then((res)=>
//         {
//             setRows(res.data.users)
//         }
//     ))
const Demoaxios = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      axios.get('https://dummyjson.com/users')
        .then((res) => {
          setRows(res.data.users);
        })
        .catch((err) => {
          console.error("Error fetching data: ", err);
        });
    }, []);
  return (
    <div>
        <TableContainer component={Paper} sx={{'& td, & th':{border:2}}}>
      <Table sx={{ minWidth: 650 , backgroundColor:'brown'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>First Name</b></TableCell>
            <TableCell align="right"><b>Last Name</b></TableCell>
            <TableCell align="right"><b>Gender</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.firstName}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Demoaxios