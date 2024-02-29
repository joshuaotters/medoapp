//Index Page.
'use client'
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
import TextArea from "@/components/TextArea";
import CustomTextField from "@/components/Textfield";
import ResponsiveDatePickers from "@/components/DateTimePicker";
import TaskCategory from "@/components/TaskCategory";
import { FormControl } from "@mui/base";
import TaskPriority from "@/components/TaskPriority";
import SubmitBtn from "@/components/SubmitButton";



export default function AddTask() {
  return (
    <Container component="main" maxWidth="xs" sx={{
      borderRadius: '10px',
      backgroundColor: 'aliceblue',
      paddingBottom: '2rem',
      border: '1px solid #d5e3ef',
      mt: '1.5rem',
      boxShadow: '0 2px 7px rgba(0,0,0,0.1)',
      '&:hover': {
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        transition: 'opacity 0.9s ease-in-out'
      }
}}>
      <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "500", textAlign: "center", mt: 2}}>
          Add New Task
        </Typography>
      <Container
        sx={{
          borderRadius: "10px",
          backgroundColor: "aliceblue",
        }}
      >
        <FormControl>
            <CustomTextField
              id="taskName"
              label="Task Name"
              name="taskName"
              placeholder="e.g., Study"
              type="text"
              onChange={(e) => setTaskName(e.target.value)}
            />
            <TextArea 
                 id="description"
                 label="Description"
                 placeholder="Task description"
                 onChange={(e) => setTaskName(e.target.value)}
            />
            <ResponsiveDatePickers/>
            <TaskCategory/>
            <TaskPriority/>
            <SubmitBtn/>
          </FormControl>
      </Container>
    </Container>
  );
}
