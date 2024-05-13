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

export async function findPosition(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params } = await zParse(Schema.FindPositionSchema, req)

    const positions = await Service.findPosition(params.id)

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

    const positions = await Service.createPosition(body)

    res.status(201).json(positions)
  } catch (error) {
    next(error)
  }
}

export async function updatePosition(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params, body } = await zParse(Schema.UpdatePositionSchema, req)

    const updatedPosition = await Service.updatePosition(params.id, body)

    res.status(200).json(updatedPosition)
  } catch (error) {
    next(error)
  }
}

export async function deletePosition(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params } = await zParse(Schema.FindPositionSchema, req)

    const updatedPosition = await Service.deletePosition(params.id)

    res.status(200).json(updatedPosition)
  } catch (error) {
    next(error)
  }
}
