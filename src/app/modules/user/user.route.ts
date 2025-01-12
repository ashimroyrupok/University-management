/* eslint-disable no-unused-vars */
import { Router } from 'express';
import { userControllers } from './user.controller';
import { studentValidations } from '../student/student.validation';
import { ValidateRequest } from '../../middleware/validateRequest';
import { facultyValidations } from '../Faculty/faculty.validation';
import { AdminValidations } from '../Admin/admin.validation';

const router = Router();

router.post(
  '/create-student',
  ValidateRequest(studentValidations.CreateStudentValidationSchema),
  userControllers.createStudent,
);
router.post(
  '/create-faculty',
  ValidateRequest(facultyValidations.createFacultyValidationSchema),
  userControllers.createFaculty,
);

router.post(
  '/create-admin',
  ValidateRequest(AdminValidations.createAdminValidationSchema),
  userControllers.createAdmin,
);


export const UserRoutes = router;
