
import express from 'express';
import { CourseControllers } from './course.controller';
import { ValidateRequest } from '../../middleware/validateRequest';
import { CourseValidation } from './course.validation';


const router = express.Router();

router.post('/create-course', ValidateRequest(CourseValidation.createCourseValidationSchema), CourseControllers.createCourse);

router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSingleCourse);

// router.patch(
//   '/:id',
//   ValidateRequest(CourseValidation.createCourseValidationSchema),
//   CourseControllers.,
// );

router.delete('/:id', CourseControllers.deleteCourse);

export const CourseRoutes = router;