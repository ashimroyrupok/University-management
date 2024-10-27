import { z } from "zod";

const createAcademicFacultyValidation= z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:"Academic Faculty must be String"
        })
    })
})

const updateAcademicFacultyValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Faculty must be String',
    }),
  }),
});


export const AcademicFacultyValidation={
    createAcademicFacultyValidation,updateAcademicFacultyValidation
}

