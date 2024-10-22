/* eslint-disable no-unused-vars */
import { Router } from 'express';
import { userControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';
import { ValidateRequest } from '../../middleware/validateRequest';

const router = Router();

router.post(
  '/create-student',
  ValidateRequest(studentValidations.CreateStudentValidationSchema),
  userControllers.createStudent,
);

export const UserRoutes = router;
