import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemeseter.controller';
import { ValidateRequest } from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  ValidateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidation,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

export const AcademicSemesterRoutes = router;
