import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from '../../../models/task';

export async function POST(request) {
    const {title, description, dueDate, category, taskPriority, taskState} = await request.json();
    await connectMongoDB();
    await Task.create({title, description, dueDate, category, taskPriority, taskState});
    return NextResponse.json({message: "Task created"}, {status: 201});
}