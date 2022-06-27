import { Employee } from "./employeeModel";

//add employee
//=>{API}/employee
const addEmployee = async(req,res)=>{
    const {name, department, salary} = req.body;

    if(!name || !department || !salary){
        return res.status(400).json({success:false, message:'All fields are required.'})
    }
    try{
        const employee = await Employee.create(req.body);
        res.status(201).json({success:true,data:employee});

    }catch(err){
        return res.status(500).json({success:false,message:'Unable to add employee.'});
    }
    
}

//get employees
//=>{API}/employee
const getEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.status(200).json({success:true,data:employees});
    }catch(err){
        return res.status(500).json({success:false,message:'Unable to get employees.'});
    }
}

//update employee
//=>{API}/employee/:id
const updateEmployee = async(req,res)=>{
    const employeeFind = await Employee.findById(req.params.id);
    if(!employeeFind){
        return res.status(400).json({success:false,message:'Unable to find employee.'});
    }
    try{
    const employee = await Employee.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    })
    res.status(200).json({success:true,data:employee})
    }catch(err){
        return res.status(500).json({success:false,message:'Unable to update employee.'});
    }
}

//delete employee
//=>{API}/employee/:id
const deleteEmployee = async(req,res)=>{
    const employeeFind = await Employee.findById(req.params.id);
    if(!employeeFind){
        return res.status(400).json({success:false,message:'Unable to find employee.'});
    }
    try{
        await employeeFind.remove();
        res.status(200).json({success:true,message:'Employee deleted successfully'})
    }catch(err){
        return res.status(500).json({success:false,message:'Unable to delete employee.'});
    }
}


export {addEmployee,getEmployees,updateEmployee,deleteEmployee}