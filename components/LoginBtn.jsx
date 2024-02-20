import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';

export default function LoginBtn() {
  return (
    <Stack direction="row" spacing={2} sx={{mb: '1rem'}}>
      <Button 
        variant="contained"
        sx={{ width: 4/4}}
        startIcon={<LoginIcon/>}
        size="large"
        >
        SIGN-IN
      </Button>
    </Stack>
  );
}