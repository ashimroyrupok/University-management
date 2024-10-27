import { Router } from 'express';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { ValidateRequest } from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validatin';

const router = Router();

router.post(
  '/create',
  ValidateRequest(AcademicFacultyValidation.createAcademicFacultyValidation),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/all', AcademicFacultyControllers.getAllAcademicFaculty);

router.get('/single/:id', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/update/:id',
  ValidateRequest(AcademicFacultyValidation.updateAcademicFacultyValidation),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
