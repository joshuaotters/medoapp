import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function TaskPriority() {
  const [taskPriority, setTaskPriority] = React.useState('');

  const handleChange = (event) => {
    setTaskPriority(event.target.value);
  };

  return (
      <FormControl sx={{ mt: 2.5, minWidth: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">Task Priority</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={taskPriority}
          label="Task Priority"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={20}>High</MenuItem>
          <MenuItem value={30}>Urgent</MenuItem>
        </Select>
        <FormHelperText>Task Priority</FormHelperText>
      </FormControl>
  );
}