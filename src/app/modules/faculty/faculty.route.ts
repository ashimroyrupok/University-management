import { ValidateRequest } from '../../middleware/validateRequest';
import { FacultyControllers } from './faculty.controller';
import { facultyValidations } from './faculty.validation';
import express from 'express';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  ValidateRequest(facultyValidations.updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
