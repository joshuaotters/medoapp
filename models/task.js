import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    category: {
      type: String,
      enum: ["Work", "Family", "Personal", "Other"],
      default: "Work",
      required: true,
    },
    taskPriority: {
      type: String,
      enum: ["Low", "Medium", "High", "Urgent"],
      default: "High",
      required: true,
    },
    taskState: {
      type: String,
      enum: ["Pending", "In-progress", "Complete"],
      default: "Pending",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
