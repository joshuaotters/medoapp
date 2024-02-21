
//App Dashboard
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewTaskBtn from "../../components/NewTaskBtn";
import Typography from "@mui/material/Typography";


export default function Index() {
  return (
    <Container component="main" maxWidth="xs" sx={{
      borderRadius: '10px',
      mt: '2rem',
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

          <Typography
            component="p"
            sx={{
              textAlign: "center",
              paddingTop: "1.5rem",
              mb: "1rem",
              fontWeight: "600",
              color: "#006361",
            }}
          >
             No tasks found
          </Typography>
          <Typography
            component="p"
            sx={{
              textAlign: "center",
            }} >
            You have not added any tasks yet.
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: "center",
              color: "#6c6a6f"
            }} >
           Tap the <span style={{fontWeight: "500", fontSize: "1.7rem", color: "rgb(0 99 97)"}}>+</span> button to add a task.
          </Typography>
        </Box>
        <Box>
          <NewTaskBtn />
        </Box>
      </Container>
    </Container>
  );
}
