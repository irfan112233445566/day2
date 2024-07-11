import React, { useState } from 'react'   
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
    // const [count,setcount]=useState(0);
    // let valueAdd=()=>{
    //   setcount(count+1)
    // }
    const[form,setform]=useState(
      {
      fname:'',
      odi:'',
      test:'',
      t20:'',
      domestic:'',
      }
    )
    function valueCap(e)
    {
      // console.log(e)
      setform({...form,[e.target.name]:e.target.value})

    }
    let valueAdd=()=>{
      console.log(form)
    }

  return (
    <div>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        required
        id="outlined-required"
        label="Required-Name"
        //defaultValue="Hello World"
        name="fname"
        onChange={valueCap}
      />
      <br/>
      <TextField
        required
        id="outlined-required"
        label="Required-odi"
        //defaultValue="Hello World"
        name="odi"
        onChange={valueCap}
      />
      <br/>
      <TextField
        id="outlined-required"
        label="Required-test"
        name="test"
        onChange={valueCap}
      />
        <br/>
      
        <TextField
        id="outlined-required"
        label="Required-t20"
        name="t20"
        onChange={valueCap}
        />
        <br/>
      
      <TextField
      id="outlined-required"
      label="Required-domestic"
      name="domestic"
      onChange={valueCap}
      />
      <br />

        <Button variant='contained' color='success' onClick={valueAdd}>Submit</Button>
        <br/>
        {/* <small>count is {count}</small> */}
      </div>

    </Box>
    </div>

  )
}
export default Add