import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'

export default function NewTaskButton() {
  return (
    <Box style={{ '& > :not(style)': { m: 1 } }}>
      <Link href={"/dashboard/addTask"}>
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
      </Link>
    </Box>
  );
}