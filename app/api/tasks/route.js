import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from '../../../models/task';
import dateExtractor from "@/utils/dateExtractor";


export async function POST(request) {
    const {title, description, dueDate, category, taskPriority, taskState} = await request.json();
    await connectMongoDB();
    await Task.create({title, description, dueDate, category, taskPriority, taskState});
    return NextResponse.json({message: "Task created"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const tasks = await Task.find();
    const processedTasks = tasks.map((t) => ({
        ...t.toObject(),
        deadLine: dateExtractor(t.dueDate),
    }))
    return NextResponse.json({processedTasks});
}

export async function DELETE (request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Task.findByIdAndDelete(id)
    return NextResponse.json({message: 'Task deleted'}, {status: 200});
}