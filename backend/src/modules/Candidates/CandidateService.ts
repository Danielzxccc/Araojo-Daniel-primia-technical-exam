import { number } from 'zod'
import HttpError from '../../utils/HttpError'
import { findOnePosition } from '../Positions/PositionRepository'
import * as Repository from './CandidateRepository'
import { NewCandidate, NewFileAttachments } from './CandidateSchema'

export async function createCandidate(
  candidate: NewCandidate,
  files: Express.Multer.File[]
) {
  const position = await findOnePosition(candidate.position_id)

  if (!position) {
    throw new HttpError('Position Not Found', 404)
  }

  const newCandidate = await Repository.createCandidate(candidate)

  if (!newCandidate) {
    throw new HttpError(
      'Failed to create new candidate. Please try again or contact support.',
      400
    )
  }

  let fileObjects: NewFileAttachments[] = []

  if (files?.length) {
    fileObjects = files.map((item) => {
      return {
        candidate_id: newCandidate.id,
        filename: item.filename,
      }
    })
    await Repository.createFileAttachemnts(fileObjects)
  }

  return newCandidate
}

export async function findCandidates() {
  const data = await Repository.findCandidates()

  return data
}

export async function findCandidatesByPosition(id: number) {
  const position = await findOnePosition(id)

  if (!position) {
    throw new HttpError('Position Not Found', 404)
  }

  const data = await Repository.findCandidatesByPosition(id)

  return data
}
