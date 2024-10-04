/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from 'express';
import { StudentServices } from './student.service';
import httpStatus from 'http-status';
import sendResponse from '../../utils/SendRespose';

const getAllStudents: RequestHandler = async (req, res, next) => {
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

const getSingleStudent: RequestHandler = async (req, res, next) => {
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

const deleteStudent: RequestHandler = async (req, res, next) => {
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
