/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/SendRespose';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      success: true,
      message: 'Students are retrieved succesfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      success: true,
      message: 'Student is retrieved succesfully',
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
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
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
