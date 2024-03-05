import mongoose from 'mongoose';

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("SUCCESS! Connected to MongoDB");
    } catch (error) {
        console.log(error.message, "CONNECTION ERROR: Failed to connect to MongoDB")
    }
}

export default connectMongoDB;