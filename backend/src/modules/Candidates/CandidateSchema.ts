import { Insertable, Updateable } from 'kysely'
import { Candidates } from '../../types/db'
import { z } from 'zod'
import { query } from 'express'

export type NewCandidate = Insertable<Candidates>
export type UpdateCandidate = Updateable<Candidates>

export const NewCandidateSchema = z.object({
  body: z.object({
    position_id: z.coerce.number(),
    fullname: z.string().min(2),
    email: z.string(),
    phone: z.string(),
    current_salary: z.coerce.number(),
    expected_salary: z.coerce.number(),
  }),
})
export const UpdateCandidateSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    position_id: z.coerce.number(),
    fullname: z.string().min(2),
    email: z.string(),
    phone: z.string(),
    current_salary: z.coerce.number(),
    expected_salary: z.coerce.number(),
  }),
})

export const CandidateQuery = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  query: z.object({
    status: z
      .union([z.literal('hired'), z.literal('candidate')])
      .optional()
      .default('candidate'),
  }),
})

export const HireCandidateSchema = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
  body: z.object({
    final_salary: z.number(),
  }),
})
