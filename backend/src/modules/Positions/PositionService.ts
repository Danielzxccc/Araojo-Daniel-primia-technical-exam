import HttpError from '../../utils/HttpError'
import * as Repository from './PositionRepository'
import { NewPosition } from './PositionSchema'

export async function findPositions(isHiring: boolean) {
  const positions = await Repository.findPositions(isHiring)

  return positions
}

export async function findPosition(id: number) {
  const position = await Repository.findOnePosition(id)

  if (!position) {
    throw new HttpError('Position not found', 404)
  }

  return position
}

export async function createPosition(position: NewPosition) {
  const newPosition = await Repository.createPosition(position)

  if (!newPosition) {
    throw new HttpError(
      'Apologies, we encountered an issue while creating your new position. Please try again later or contact support for assistance',
      400
    )
  }

  return newPosition
}
