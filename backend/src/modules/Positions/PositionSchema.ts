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
  body: z
    .object({
      title: z.string().min(3),
      description: z.string().min(5),
      salary_range_start: z.coerce.number().min(10_000),
      salary_range_end: z.coerce.number().min(10_000),
    })
    .refine((data) => data.salary_range_end > data.salary_range_start, {
      path: ['salary_range_end'],
      message:
        'Salary range end must be greater than or equal to salary range start',
    }),
})

export const UpdatePositionSchema = z.object({
  params: z.object({
    id: z.string().transform((arg) => Number(arg)),
  }),
  body: z
    .object({
      title: z.string().min(3),
      description: z.string().min(5),
      salary_range_start: z.coerce.number().min(10_000),
      salary_range_end: z.coerce.number().min(10_000),
    })
    .refine((data) => data.salary_range_end > data.salary_range_start, {
      path: ['salary_range_end'],
      message:
        'Salary range end must be greater than or equal to salary range start',
    }),
})
