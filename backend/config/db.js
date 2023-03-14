import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });//we want to await, because mongoose.connect() returns a promise

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);//its going to exit with failure
    }
}; //is async because when we deal with the database, its always going to return a promise

export default connectDB;