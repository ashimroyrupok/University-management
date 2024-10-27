import { Router } from 'express';
import { ValidateRequest } from '../../middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router = Router();

router.post(
  '/create',
  ValidateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidation),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get('/all', AcademicDepartmentControllers.getAllAcademicDepartment);

router.get('/single/:id', AcademicDepartmentControllers.getSingleAcademicDepartment);

router.patch(
  '/update/:id',
  ValidateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidation),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
