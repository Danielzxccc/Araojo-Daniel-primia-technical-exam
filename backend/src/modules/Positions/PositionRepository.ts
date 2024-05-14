import { db } from '../../config/database'
import { NewPosition, UpdatePosition } from './PositionSchema'

export async function findPositions() {
  return await db
    .selectFrom('positions as p')
    .leftJoin('candidates as c', 'c.position_id', 'p.id')
    .select(({ fn }) => [
      'p.id',
      'p.title',
      'p.description',
      'p.salary_range_start',
      'p.salary_range_end',
      fn.count<number>('c.id').as('candidates'),
    ])
    .groupBy(['p.id'])
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

export async function deletePosition(id: number) {
  return await db
    .deleteFrom('positions')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}
