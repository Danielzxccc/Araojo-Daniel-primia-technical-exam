import { Insertable, Updateable } from 'kysely'
import { Positions } from '../../types/db'
import { z } from 'zod'

export type NewPosition = Insertable<Positions>
export type UpdatePosition = Updateable<Positions>

export const PositionQuery = z.object({
  query: z.object({
    is_hiring: z
      .string()
      .transform((arg) => Boolean(arg))
      .optional()
      .default('true'),
  }),
})

export const FindPositionSchema = z.object({
  params: z.object({
    id: z.string().transform((arg) => Number(arg)),
  }),
})

export const NewPositionSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    salary_range_start: z.number(),
    salary_range_end: z.number(),
  }),
})
