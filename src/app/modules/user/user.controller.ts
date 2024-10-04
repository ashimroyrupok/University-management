/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userServices } from './user.services';
import sendResponse from '../../utils/SendRespose';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  // console.log(studentData, 'student');
  // const zodParsedData = studentValidationSchema.parse(studentData);

  const result = await userServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    success: true,
    message: 'Student is created succesfully',
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const userControllers = {
  createStudent,
};
