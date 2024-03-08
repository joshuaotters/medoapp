import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from '../../../../models/task';

export async function PUT(request, {params}){
    const {id} = params;
    const {
        newTitle: title, 
        newDescription: description, 
        newDueDate: dueDate, 
        newCategory: category, 
        newTaskPriority: taskPriority, 
        newTaskState: taskState,
        } = await request.json();
    await connectMongoDB();
    await Task.findByIdAndUpdate(id, {title, description, dueDate, category, taskPriority, taskState});
    return NextResponse.json({message: "Task updated"}, {status: 200});
}