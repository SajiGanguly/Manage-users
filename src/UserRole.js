import * as React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const [openUserRolesDialog, setOpenUserRolesDialog] = useState(false);
  const handleOpenUserRolesDialog = () => {
    console.log('Opening User Roles Dialog'); // Check if this log is triggered
    setOpenUserRolesDialog(true);
  };

  const handleCloseUserRolesDialog = () => {
    console.log('Closing User Roles Dialog'); // Check if this log is triggered
    setOpenUserRolesDialog(false);
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">User Roles</InputLabel>
       <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Html/CSS</MenuItem>
          <MenuItem value={20}>React JS</MenuItem>
          <MenuItem value={30}>Frontend Developer</MenuItem>
          <MenuItem value={30}>Backend Developer</MenuItem>
        </Select>
      </FormControl>
      <SelectVariants open={openUserRolesDialog} onClose={handleOpenUserRolesDialog} />
      
    </div>
  );
}