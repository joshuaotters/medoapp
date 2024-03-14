import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from '../../../../models/task';
import dateExtractor from "@/utils/dateExtractor";

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
    await Task.findByIdAndUpdate(id, {$set: {title, description, dueDate, category, taskPriority, taskState}}, {new: true});
    return NextResponse.json({message: "Task updated"}, {status: 200});
}

export async function GET(request, {params}) {
    const {id} = params;
    await connectMongoDB();
    const task = await Task.findById({_id: id});
    return NextResponse.json({task}, {status: 200});
}