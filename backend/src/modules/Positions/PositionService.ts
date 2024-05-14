import HttpError from '../../utils/HttpError'
import * as Repository from './PositionRepository'
import { NewPosition, UpdatePosition } from './PositionSchema'

export async function findPositions() {
  const positions = await Repository.findPositions()

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

export async function updatePosition(id: number, position: UpdatePosition) {
  const findPosition = await Repository.findOnePosition(id)

  if (!findPosition) {
    throw new HttpError('Position not found', 404)
  }

  const updatedPosition = await Repository.updatePosition(id, position)

  return updatedPosition
}

export async function deletePosition(id: number) {
  const findPosition = await Repository.findOnePosition(id)

  if (!findPosition) {
    throw new HttpError('Position not found', 404)
  }

  const deletedPosition = await Repository.deletePosition(id)
  return deletedPosition
}
