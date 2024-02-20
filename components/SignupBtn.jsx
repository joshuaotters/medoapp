import * as React from 'react';
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Stack from '@mui/material/Stack';

export default function SignupBtn() {
  return (
    <Stack direction="row" spacing={2} sx={{mb: '1em'}}>
      <Button 
        variant="contained"
        sx={{ width: 4/4}}
        startIcon={<PersonAddAlt1Icon/>}
        size="large"
        >
        SIGN-UP
      </Button>
    </Stack>
  );
}