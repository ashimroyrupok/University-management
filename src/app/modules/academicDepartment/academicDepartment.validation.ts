import { z } from 'zod';

const createAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be String',
      required_error: 'Academic Department must be required',
    }),
    academicFaculty: z.string({
      invalid_type_error: ' academicFaculty must be string',
      required_error: 'Academic Department must be required',
    }),
  }),
});
const updateAcademicDepartmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be String',
      required_error: 'Academic Department must be required',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: ' academicFaculty must be string',
      required_error: 'Academic Department must be required',
    }).optional(),
  }),
});



export const AcademicDepartmentValidation = {
  createAcademicDepartmentValidation,
  updateAcademicDepartmentValidation,
};
