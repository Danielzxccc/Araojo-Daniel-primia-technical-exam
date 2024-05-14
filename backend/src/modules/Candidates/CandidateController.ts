import { NextFunction, Request, Response } from 'express'
import zParse from '../../utils/zParse'
import * as Service from './CandidateService'
import * as Schema from './CandidateSchema'

export async function createCandidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { body } = await zParse(Schema.NewCandidateSchema, req)
    const files = req.files as Express.Multer.File[]

    const newCandidate = await Service.createCandidate(body)

    res.status(201).json(newCandidate)
  } catch (error) {
    next(error)
  }
}

export async function updateCandidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params, body } = await zParse(Schema.UpdateCandidateSchema, req)

    const updatedCandidate = await Service.updateCandidate(params.id, body)

    res.status(201).json(updatedCandidate)
  } catch (error) {
    next(error)
  }
}

export async function findCandidates(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const candidates = await Service.findCandidates()

    res.status(200).json(candidates)
  } catch (error) {
    next(error)
  }
}

export async function findCandidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params } = await zParse(Schema.CandidateQuery, req)
    const candidates = await Service.findCandidate(params.id)

    res.status(200).json(candidates)
  } catch (error) {
    next(error)
  }
}

export async function findCandidatesByPosition(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params, query } = await zParse(Schema.CandidateQuery, req)
    const candidates = await Service.findCandidatesByPosition(
      params.id,
      query.status
    )

    res.status(200).json(candidates)
  } catch (error) {
    next(error)
  }
}

export async function deleteCandidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params } = await zParse(Schema.CandidateQuery, req)
    const deletedCandidate = await Service.deleteCandidate(params.id)

    res.status(200).json(deletedCandidate)
  } catch (error) {
    next(error)
  }
}

export async function hireCandidate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { params, body } = await zParse(Schema.HireCandidateSchema, req)
    const hiredCandidate = await Service.hireCandidate(
      params.id,
      body.final_salary
    )

    res.status(200).json(hiredCandidate)
  } catch (error) {
    next(error)
  }
}
