import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/SendRespose';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const payload = req.body;
  const result =
    await AcademicFacultyServices.createAcademicFacultyIntoDB(payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Faculty retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const {id} = req.params;

  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Faculty retrieved successfully',
    data: result,
  });
});

const updateAcademicFaculty= catchAsync(async(req,res)=>{
  const {id}= req.params ;
  const payload = req.body;
  const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(id ,payload);
   sendResponse(res, {
     statusCode: httpStatus.OK,
     success: true,
     message: 'Academic Faculty updated successfully',
     data: result,
   });
})


 export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty
}
