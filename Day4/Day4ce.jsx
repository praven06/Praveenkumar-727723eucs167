import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const Day4CE = () => {
    const fruits = [
        { label: 'Apple' },
        { label: 'Banana' },
        { label: 'Orange' },
        { label: 'Strawberry' },
        { label: 'Pineapple' },
        { label: 'Grapes' },
        { label: 'Mango' },
        { label: 'Watermelon' },
      ];
  return (
    <>
        <div>
            <h1>Enter your name favourite fruit</h1>
            <Autocomplete
      options={fruits}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="Choose a fruit" variant="outlined" />
      )}
      style={{ width: 300 }}
    />
    <Button variant="contained">submit</Button>

        </div>
    </>
  )
}

export default Day4CE
