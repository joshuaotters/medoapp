import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function NewTaskButton() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab aria-label="add" sx={{
        '&:hover': {
            color: "#ffffff",
            backgroundColor: "#259EA1"
        },
        color: "#ffffff",
        backgroundColor: "#006361",
        position: 'fixed',
        bottom: 16,
        right: 16
      }}>
        <AddIcon />
      </Fab>
    </Box>
  );
}