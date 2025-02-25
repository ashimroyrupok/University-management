/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/SendRespose';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res, next) => {

  const query =req?.query;

  const result = await StudentServices.getAllStudentsFromDB(query);

  sendResponse(res, {
    success: true,
    message: 'Students are retrieved succesfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentServices.getSingleStudentFromDB(studentId);

  sendResponse(res, {
    success: true,
    message: 'Student is retrieved succesfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      success: true,
      message: 'Student is deleted succesfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);
  sendResponse(res, {
    success: true,
    message: 'Student is updated succesfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
