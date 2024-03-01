import mongoose,  {Schema} from mongoose;

const taskSchema = new Schema (
    {
        title: String,
        description: String,
        dueDate: {type: Date, default: Date.now},
        category: { type: String, enum: ['Work', 'Personal', 'Family', 'Other']},
        taskPriority: {type: String, enum: ['Low', 'High', 'Urgent']},
        taskState: { type: String, enum: ['Pending', 'Complete'], default: 'Pending'}
    },
    {
        timestamps: true
    }
);

const task = mongoose.models.Task || mongoose.model('Task', taskSchema, 'tasks');
export default Task();