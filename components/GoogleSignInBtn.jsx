import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import GoogleIcon from '@mui/icons-material/Google';

export default function GoogleSignInBtn() {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
      variant="outlined" 
      startIcon={<GoogleIcon />}
      type="submit"
      fullWidth
      sx={{ mt: 3, mb: 2 }}
    //   color="#757575"
      size="large">
        SignIn with Google
      </Button>
    </Stack>
  );
}