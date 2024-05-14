import { sql } from 'kysely'
import { db } from '../../config/database'
import { PositionStatus } from '../../types/db'
import { NewCandidate, UpdateCandidate } from './CandidateSchema'

export async function createCandidate(candidate: NewCandidate) {
  return await db
    .insertInto('candidates')
    .values(candidate)
    .returningAll()
    .executeTakeFirst()
}

export async function updateCandidate(id: number, candidate: UpdateCandidate) {
  return await db
    .updateTable('candidates')
    .set({ ...candidate, updatedat: sql`CURRENT_TIMESTAMP` })
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export async function findCandidates() {
  return await db
    .selectFrom('candidates as c')
    .leftJoin('positions as p', 'c.position_id', 'p.id')
    .select([
      'c.id',
      'p.title',
      'c.position_id',
      'c.fullname',
      'c.email',
      'c.phone',
      'c.current_salary',
      'c.expected_salary',
      'c.final_salary',
      'c.createdat',
      'c.updatedat',
      'c.status',
    ])
    .where('status', '=', 'candidate')
    .execute()
}

export async function findCandidatesByPosition(
  id: number,
  status: PositionStatus
) {
  return await db
    .selectFrom('candidates as c')
    .leftJoin('positions as p', 'c.position_id', 'p.id')
    .select([
      'c.id',
      'p.title',
      'c.position_id',
      'c.fullname',
      'c.email',
      'c.phone',
      'c.current_salary',
      'c.expected_salary',
      'c.final_salary',
      'c.createdat',
      'c.updatedat',
      'c.status',
    ])
    .where('c.position_id', '=', id)
    .where('c.status', '=', status)
    .execute()
}

export async function findOneCandidate(id: number) {
  return await db
    .selectFrom('candidates as c')
    .leftJoin('positions as p', 'c.position_id', 'p.id')
    .select([
      'c.id',
      'p.title',
      'c.position_id',
      'c.fullname',
      'c.email',
      'c.phone',
      'c.current_salary',
      'c.expected_salary',
      'c.final_salary',
      'c.createdat',
      'c.updatedat',
      'c.status',
    ])
    .where('c.id', '=', id)
    .executeTakeFirst()
}

export async function deleteCandidate(id: number) {
  return await db
    .deleteFrom('candidates')
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}

export async function hireCandidate(id: number, final_salary: number) {
  return await db
    .updateTable('candidates')
    .set({
      status: 'hired',
      final_salary: final_salary,
      updatedat: sql`CURRENT_TIMESTAMp`,
    })
    .where('id', '=', id)
    .returningAll()
    .executeTakeFirst()
}
