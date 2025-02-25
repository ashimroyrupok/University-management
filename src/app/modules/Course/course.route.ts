import express from 'express';
import { CourseControllers } from './course.controller';
import { ValidateRequest } from '../../middleware/validateRequest';
import { CourseValidation } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  ValidateRequest(CourseValidation.createCourseValidationSchema),
  CourseControllers.createCourse,
);

router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSingleCourse);

router.patch(
  '/:id',
  ValidateRequest(CourseValidation.updateCourseValidationsSchema),
  CourseControllers.updateCourse,
);
router.put(
  '/:courseId/assign-faculties',
  ValidateRequest(CourseValidation.facultiesWithCourseValidatoinSchema),
  CourseControllers.assignFacultiesWithCourse,
);
router.delete(
  '/:courseId/remove-faculties',
  ValidateRequest(CourseValidation.facultiesWithCourseValidatoinSchema),
  CourseControllers.removeFacultiesWithCourse,
);
router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;
