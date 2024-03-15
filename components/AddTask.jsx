//Index Page.
"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextArea from "@/components/TextArea";
import CustomTextField from "@/components/Textfield";
import { FormControl } from "@mui/base";
import SubmitBtn from "@/components/SubmitButton";
import { useState } from "react";

//Date Picker Imports
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//Select Component Imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

//Select Component Imports
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";

export default function AddTask() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskPriority, setTaskPriority] = useState("");

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        borderRadius: "10px",
        backgroundColor: "aliceblue",
        paddingBottom: "2rem",
        border: "1px solid #d5e3ef",
        mt: "1.5rem",
        boxShadow: "0 2px 7px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "opacity 0.9s ease-in-out",
        },
      }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontWeight: "500", textAlign: "center", mt: 2 }}>
        Add New Task
      </Typography>
      <Container
        sx={{
          borderRadius: "10px",
          backgroundColor: "aliceblue",
        }}>
        <FormControl sx={{ mt: 3, minWidth: "100%" }}>
          {/* Task Name */}
          <CustomTextField
            id="taskName"
            label="Task Name"
            name="taskName"
            placeholder="e.g., Study"
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
          />

          {/* Task Description */}
          <TextArea
            id="description"
            label="Description"
            placeholder="Task description"
            onChange={(e) => setDescription(e.target.value)}
          />
          {/* Due Date Picker */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "DatePicker",
                "MobileDatePicker",
                "DesktopDatePicker",
                "StaticDatePicker",
              ]}>
              <DemoItem>
                <DatePicker
                  id="dueDate"
                  label="Due Date"
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>

          {/* Task Category */}
          <InputLabel id="taskCategory-label" sx={{ mt: 3 }}>
            Category
          </InputLabel>
          <Select
            labelId="taskCategory-label"
            id="taskCategory"
            value={taskCategory}
            label="Category"
            onChange={(e) => setTaskCategory(e.target.value)}
            sx={{ minWidth: "100%" }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Work"}>Work</MenuItem>
            <MenuItem value={"Family"}>Family</MenuItem>
            <MenuItem value={"Personal"}>Personal</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
          <FormHelperText>Task Category</FormHelperText>

          {/* Task Priority */}
          <InputLabel id="taskPriority-label" sx={{ mt: 3 }}>
            Task Priority
          </InputLabel>
          <Select
            labelId="taskPriority-label"
            id="taskPriority"
            value={taskPriority}
            label="Task Priority"
            onChange={(e) => setTaskPriority(e.target.value)}
            sx={{ minWidth: "100%" }}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Low"}>Low</MenuItem>
            <MenuItem value={"Medium"}>Medium</MenuItem>
            <MenuItem value={"High"}>High</MenuItem>
            <MenuItem value={"Urgent"}>Urgent</MenuItem>
          </Select>
          <FormHelperText>Task Priority</FormHelperText>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            startIcon={<DoneIcon />}
            size="large"
            onClick={() => submit()}>
            Save
          </Button>
        </FormControl>
      </Container>
    </Container>
  );
}
