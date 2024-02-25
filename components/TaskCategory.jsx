import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TaskCategory() {
  const [taskCategory, setTaskCategory] = React.useState('');

  const handleChange = (event) => {
    setTaskCategory(event.target.value);
  };

  return (
      <FormControl sx={{ mt: 3, minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={taskCategory}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Work</MenuItem>
          <MenuItem value={20}>Personal</MenuItem>
          <MenuItem value={30}>Family</MenuItem>
        </Select>
        <FormHelperText>Task Category</FormHelperText>
      </FormControl>
  );
}