'use client';//Tell react to render a component on the client

import * as React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';


export default function SubmitBtn() {
  return ( <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    startIcon={<DoneIcon />}
    size="large"
    onClick={()=> submit()}
    >
   Save
    </Button>
    );
}


  

 

