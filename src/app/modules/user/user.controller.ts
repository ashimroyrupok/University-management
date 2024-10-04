/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.services';
import sendResponse from '../../utils/SendRespose';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    // console.log(studentData, 'student');
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await userServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      success: true,
      message: 'Student is created succesfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const userControllers = {
  createStudent,
};
