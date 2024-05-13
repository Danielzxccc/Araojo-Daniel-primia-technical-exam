import { NextFunction, Request, Response } from 'express'
import HttpError from './HttpError'
import { fromError, fromZodError, fromZodIssue } from 'zod-validation-error'

export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof HttpError) {
    return res.status(error.httpCode || 500).json({
      error: true,
      message: error.message || 'bad request',
      validationErrors: error.validationErrors.map((item) =>
        fromZodIssue(item).toString()
      ),
    })
  }

  if (error instanceof Error) {
    return res.status(500).json({ error: true, message: error.message })
  }

  next(error)
}
