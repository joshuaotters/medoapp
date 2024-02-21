import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomTextField(props) {
  return (
      <TextField 
          id={props.id}
          label={props.label}
          required
          onChange={props.onChange} 
          fullWidth
          margin="normal"
          autoFocus
          placeholder={props.placeholder}
          autoComplete={props.autoComplete}
          type={props.type}
          multiline
          variant="outlined" />
  );
}