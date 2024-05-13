import { NextFunction, Request, Response } from 'express'
import zParse from '../../utils/zParse'
import * as Schema from './PositionSchema'
import * as Service from './PositionService'

export async function findPositions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { query } = await zParse(Schema.PositionQuery, req)

    const positions = await Service.findPositions(query.is_hiring)

    res.status(200).json(positions)
  } catch (error) {
    next(error)
  }
}

export async function createPosition(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = await zParse(Schema.NewPositionSchema, req)
    const attachments = req.files as Express.Multer.File[]

    const positions = await Service.createPosition(body)

    res.status(201).json(positions)
  } catch (error) {
    next(error)
  }
}
