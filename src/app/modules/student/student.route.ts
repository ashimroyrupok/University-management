import express from 'express';
;
import { ValidateRequest } from '../../middleware/validateRequest';
import { StudentControllers } from './student.controller';
import { studentValidations } from './student.validation';

const router = express.Router();

// router.post('/create-student', StudentControllers.createStudent);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/delete/:studentId', StudentControllers.deleteStudent);

router.get('/', StudentControllers.getAllStudents);

router.get(
  '/update/:studentId',
  ValidateRequest(studentValidations.UpdateStudentValidationSchema),
  StudentControllers.updateStudent,
);

export const StudentRoutes = router;
