//Conditionally show either the Task component or the NoTask component depending
//whether there are any added tasks or not.

//App Dashboard
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NoTask from "@/components/NoTasks";
import NewTaskBtn from "@/components/NewTaskBtn";
import Task from "@/components/Task";


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
      
      <Container
        sx={{
          borderRadius: "10px",
          backgroundColor: "aliceblue",
        }}
      >
        {/* Display NoTask component if no tasks added */}
        {/* <NoTask/> */}
        <Task/>
        <Box>
          <NewTaskBtn/>
        </Box>
      </Container>
    </Container>
  );
}
