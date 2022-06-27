import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import {connectDB} from './config/db'
import EmployeeRouter from './resources/employee/employeeRoutes'

config();
connectDB();
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.get('/',(req,res)=>{
    res.json({message:'Server is running.'})
})

app.use('/employee',EmployeeRouter);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,()=>console.log('server is running at port : ',PORT))

process.on('unhandledRejection',(err, promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=> process.exit(1));
});