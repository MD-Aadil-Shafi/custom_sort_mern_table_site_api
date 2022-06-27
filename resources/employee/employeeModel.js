import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please add a name']
    },
    department:{
        type:String,
        required:[true, 'Please add department']
    },
    salary:{
        type:Number,
        required:[true, 'Please add salary']
    }
},{timestamps:true})

export const Employee = mongoose.model('employees',employeeSchema);