/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response, Router } from "express";
import { userControllers } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.validation";


const router = Router();


const studentValidate =(schema:AnyZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const zodParsedData = await schema.parseAsync({ body: req.body });
            next();
        } catch (error) {
            next(error)
        }
    }
}

router.post('/create-student',studentValidate(studentValidations.CreateStudentValidationSchema), userControllers.createStudent);


export const UserRoutes = router;