/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/error.interface';
import config from '../config';
import { handleZodError } from '../errors/handleZodError';

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err?.message || 'Something went wrong';

  let errorSources: TErrorSource = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    message = simplifiedError?.message;
    statusCode = simplifiedError?.statusCode;
    errorSources = simplifiedError.errorSources;
  }

  // main return for error messages
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    // error: err,
    stack: config.node_env === 'development' ? err.stack : null,
  });
};

export default globalErrorHandler;
