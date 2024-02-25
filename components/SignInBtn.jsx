'use client';//Tell react to render a component on the client

import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';


export default function LoginButton() {
  return ( <Button
    type="submit"
    fullWidth
    variant="contained"
    sx={{ mt: 3, mb: 2 }}
    startIcon={<LoginIcon />}
    size="large"
    onClick={()=> signIn()}
    >
    Sign In
    </Button>
    );
}


  

 

