import mongoose from "mongoose"
const conectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error, "Failed to connect to MongoDB")
    }
}

export default connectMongoDB;