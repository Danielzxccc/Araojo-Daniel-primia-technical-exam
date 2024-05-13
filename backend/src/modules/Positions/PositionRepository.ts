import { db } from '../../config/database'
import { NewPosition, UpdatePosition } from './PositionSchema'

export async function findPositions(isHiring: boolean) {
  return await db
    .selectFrom('positions')
    .selectAll()
    .where('is_hiring', '=', isHiring)
    .execute()
}

export async function createPosition(position: NewPosition) {
  return await db
    .insertInto('positions')
    .values(position)
    .returningAll()
    .executeTakeFirst()
}

export async function updatePosition(id: number, position: UpdatePosition) {
  return await db
    .updateTable('positions')
    .set(position)
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export async function findOnePosition(id: number) {
  return await db
    .selectFrom('positions')
    .selectAll()
    .where('id', '=', id)
    .executeTakeFirst()
}
