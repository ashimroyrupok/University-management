import { Router } from 'express';
import { AcademicSemesterControllers } from './academicSemeseter.controller';
import { ValidateRequest } from '../../middleware/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = Router();

router.post(
  '/create-academic-semester',
  ValidateRequest(AcademicSemesterValidations.createAcademicSemesterValidation),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/all', AcademicSemesterControllers.getAllAcademicSemester);
router.get(
  '/single/:id',
  AcademicSemesterControllers.getSingleAcademicSemester,
);
router.patch(
  '/update/:id',
  ValidateRequest(AcademicSemesterValidations.updateAcademicSemesterValidation),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
