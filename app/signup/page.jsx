'use client'
import * as React from 'react';
import {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
//import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import SignupBtn from '../../components/SignupBtn';
import appLoginBackgroundImage from '../../public/images/appLoginBackgroundImage.jpg';
import avatar1 from '../../public/images/avatar1.jpg';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InputPhotoUpload from '../../components/PhotoUploadBtn';
import CustomTextField from '../../components/Textfield';



export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmailname] = useState("");
  const [password, setPassword] = useState("");
  
  return (

    <Container component="main" maxWidth="xs">
      <Container sx={{
            borderRadius: '10px',
            backgroundColor: 'aliceblue',
            paddingBottom: '2rem',
            border: '1px solid #d5e3ef',
            boxShadow: '0 2px 7px rgba(0,0,0,0.1)',
            '&:hover': {
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              transition: 'opacity 0.9s ease-in-out'
            }
    }}>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
        <Box component="section" maxWidth="xs" sx={{
           paddingTop: "1.5rem",
           paddingBottom: "1.5rem",
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center'
          }}>
              <Avatar alt="Remy Sharp" src={avatar1.src} sx={{ width: 100, height: 100 }} />
          </Box>
          <InputPhotoUpload/>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <CustomTextField
              id="firstname"
              label="First Name"
              name="firstname"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <CustomTextField
              id="lastname"
              label="Last Name"
              name="lastname"
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <CustomTextField
              id="email"
              label="Email"
              name="Email"
              placeholder="Your Email"
              autoComplete="email"
              onChange={(e) => setEmailname(e.target.value)}
            />
            <CustomTextField
              id="password"
              required
              label="Password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <SignupBtn/>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}