import mongoose,  {Schema} from 'mongoose';

const taskSchema = new Schema (
    {
        title: String,
        description: String,
        dueDate: {type: Date},
        category: { type: String, enum: ['Work', 'Personal', 'Family', 'Other']},
        taskPriority: {type: String, enum: ['Low', 'High', 'Urgent']},
        taskState: { type: String, enum: ['Pending', 'Complete'], default: 'Pending'}
    },
    {
        timestamps: true
    }
);

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
export default Task;