//Conditionally show either the Task component or the NoTask component depending
//whether there are any added tasks or not.

//App Dashboard
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function NoTask() {
  return (
      
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
  );
}
