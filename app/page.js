//Index Page.
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import appLoginBackgroundImage from "../public/pexels-anna-shvets-4586902.jpg";
import meDoLogoVerticle from "../public/meDoLogoVerticle.png";
import LoginBtn from "@/components/LoginBtn";
import SignupBtn from "@/components/SignupBtn";

export default function Index() {
  return (
    <Container component="main" maxWidth="xs" sx={{
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
      <Container maxWidth="xs">
        <Box
          component="section"
          maxWidth="xs"
          sx={{
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={meDoLogoVerticle.src} width="40%" />
        </Box>
      </Container>
      <Container
        sx={{
          borderRadius: "10px",
          backgroundColor: "aliceblue",
        }}
      >
        <Box
          sx={{
            // marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="section"
            maxWidth="xs"
            sx={{
              paddingTop: "1.5rem",
            }}
          >
            <img src={appLoginBackgroundImage.src} width="100%" />
          </Box>
          <Typography
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: "1.5rem",
              mb: "1.5rem",
            }}
          >
            MeDo is a productivity app that helps you organize your tasks and
            get your work done.
          </Typography>
        </Box>
        <Box>
          <Link href={"/signin"}><LoginBtn /></Link>
        </Box>
        <Box sx={{
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
          <hr/>
        </Box>
        <Typography
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: "0.5rem",
              mb: '0.5rem',
              color: "#545454",
            }}
          >
            No. I'm new here
          </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
        <Link href={"/signup"}><SignupBtn /></Link>
        </Box>
      </Container>
    </Container>
  );
}
