import HttpError from '../../utils/HttpError'
import { findOnePosition } from '../Positions/PositionRepository'
import * as Repository from './CandidateRepository'
import { NewCandidate, UpdateCandidate } from './CandidateSchema'
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

export async function updateCandidate(id: number, candidate: UpdateCandidate) {
  const findCandidate = await Repository.findOneCandidate(id)

  if (!findCandidate) {
    throw new HttpError('Candidate not found', 404)
  }

  const updatedCandidate = await Repository.updateCandidate(id, candidate)
  return updatedCandidate
}

export async function findCandidates() {
  const data = await Repository.findCandidates()

  return data
}

export async function findCandidate(id: number) {
  const candidate = await Repository.findOneCandidate(id)
  if (!candidate) {
    throw new HttpError('Candidate not found', 404)
  }

  return candidate
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

export async function deleteCandidate(id: number) {
  const candidate = await Repository.findOneCandidate(id)

  if (!candidate) {
    throw new HttpError('Candidate not found', 404)
  }

  const deletedCandidate = await Repository.deleteCandidate(id)

  return deletedCandidate
}

export async function hireCandidate(id: number, final_salary: number) {
  const candidate = await Repository.findOneCandidate(id)

  if (!candidate) {
    throw new HttpError('Candidate not found', 404)
  }

  const hiredCandidate = await Repository.hireCandidate(id, final_salary)

  return hiredCandidate
}
