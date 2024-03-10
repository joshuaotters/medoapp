import mongoose,  {Schema} from 'mongoose';

const taskSchema = new Schema (
    {
        title: {type: String, required: true},
        description: {type: String, required: true},
        dueDate: {type: Date, required: true},
        category: { type: String, enum: ['Work', 'Personal', 'Family', 'Other'], required: true},
        taskPriority: {type: String, enum: ['Low', 'High', 'Urgent'], required: true},
        taskState: { type: String, enum: ['Pending', 'Complete'], default: 'Pending', required: true}
    },
    {
        timestamps: true
    }
);

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema);
export default Task;