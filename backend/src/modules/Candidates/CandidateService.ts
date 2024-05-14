import HttpError from '../../utils/HttpError'
import { findOnePosition } from '../Positions/PositionRepository'
import * as Repository from './CandidateRepository'
import { NewCandidate } from './CandidateSchema'
import { PositionStatus } from '../../types/db'

export async function createCandidate(candidate: NewCandidate) {
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

  return newCandidate
}

export async function findCandidates() {
  const data = await Repository.findCandidates()

  return data
}

export async function findCandidatesByPosition(
  id: number,
  status: PositionStatus
) {
  const position = await findOnePosition(id)

  if (!position) {
    throw new HttpError('Position Not Found', 404)
  }

  const data = await Repository.findCandidatesByPosition(id, status)

  return data
}
