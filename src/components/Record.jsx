import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Steyn', 300, 260, 700, 290),
  createData('Malinga', 237, 400, 370, 430),
  createData('Starc', 262, 160, 240, 600),
  createData('Muralitharan', 305, 370, 670, 430),
  createData('Sreeshanth', 356, 160, 490, 390),
];

const Records = () => {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell>Bowlers</TableCell>
            <TableCell align="right">ODI</TableCell>
            <TableCell align="right">TEST</TableCell>
            <TableCell align="right">T20</TableCell>
            <TableCell align="right">DOMESTIC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Records