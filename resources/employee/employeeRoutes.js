import { Router } from "express";
import { addEmployee,getEmployees,
updateEmployee,deleteEmployee } from "./employeeCtrl";

const router = Router();

router.route('/').get(getEmployees).post(addEmployee);
router.route('/:id').patch(updateEmployee).delete(deleteEmployee);


export default router;