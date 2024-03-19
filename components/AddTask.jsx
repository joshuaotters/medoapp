//Index Page.
"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextArea from "@/components/TextArea";
import CustomTextField from "@/components/Textfield";
import { FormControl } from "@mui/base";
import SubmitBtn from "@/components/SubmitButton";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

//Date Picker Imports
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePicker } from "@mui/x-date-pickers";

//Select Component Imports
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";

//Select Component Imports
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";

//Radio Component Imports
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function AddTask() {
  const [title, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskState, setTaskState] = useState("Pending");

  const router = useRouter();

  useEffect(() => {
    setTaskState("Pending");
  }, []);

  const handleDateChange = (date) => {
    setDueDate(date);
    // Handle any other logic related to the date component
  };

  const handleSubmit = async (e) => {
    //Temporal Code

    e.preventDefault();
    console.log(
      "Task Name:",
      title,
      "Description:",
      description,
      "Due Date",
      dueDate,
      "Task Category: ",
      category,
      "Task Priority: ",
      taskPriority,
      "Task State: ",
      taskState
    );
    // if (
    //   !title ||
    //   !description ||
    //   !dueDate ||
    //   !category ||
    //   !taskPriority ||
    //   !taskState
    // ) {
    //   alert("One or more needs to be supplied");
    //   return;
    // }
    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          dueDate,
          category,
          taskPriority,
          taskState,
        }),
      });
      if (res.ok) {
        router.push("/dashboard");
      } else {
        throw new Error("Failed to create a task");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ mt: 3, minWidth: "100%" }}>
            {/* Task Name */}
            <CustomTextField
              id="title"
              label="Task Title"
              name="title"
              placeholder="e.g., Study"
              type="text"
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            {/* Task Description */}
            <TextArea
              id="description"
              label="Description"
              name="description"
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
                    name="dueDate"
                    inputFormat="DD-MM-YYYY"
                    onChange={handleDateChange}
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
              value={category}
              label="Category"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
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
              name="taskPriority"
              onChange={(e) => setTaskPriority(e.target.value)}
              sx={{ mb: 3, minWidth: "100%" }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Low"}>Low</MenuItem>
              <MenuItem value={"Medium"}>Medium</MenuItem>
              <MenuItem value={"High"}>High</MenuItem>
              <MenuItem value={"Urgent"}>Urgent</MenuItem>
            </Select>
            {/* Task State */}
            <FormLabel id="taskState-label">Task State</FormLabel>
            <RadioGroup
              aria-labelledby="taskState-label"
              defaultValue="Pending"
              name="taskState"
              onChange={(e) => setTaskState(e.target.value)}>
              <FormControlLabel
                value="Pending"
                control={<Radio />}
                label="Pending"
              />
              <FormControlLabel
                value="In-progress"
                control={<Radio />}
                label="In-progress"
              />
              <FormControlLabel
                value="Completed"
                control={<Radio />}
                label="Completed"
              />
            </RadioGroup>
            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              startIcon={<DoneIcon />}
              size="large">
              Save
            </Button>
          </FormControl>
        </form>
      </Container>
    </Container>
  );
}
