import mongoose from "mongoose";

export const connectDB = async()=>{
    const conn = await mongoose.connect(process.env.MONGODB,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log(`MongoDB connected : ${conn.connection.host}`)
}
