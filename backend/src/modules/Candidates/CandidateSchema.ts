import { Insertable, Updateable } from 'kysely'
import { Candidates, FileAttachments } from '../../types/db'
import { z } from 'zod'

export type NewCandidate = Insertable<Candidates>
export type UpdateCandidate = Updateable<Candidates>
export type NewFileAttachments = Insertable<FileAttachments>

export const NewCandidateSchema = z.object({
  body: z.object({
    position_id: z.coerce.number(),
    fullname: z.string().min(2),
    email: z.string(),
    phone: z.string(),
    birthdate: z.coerce.date(),
    current_salary: z.coerce.number(),
    expected_salary: z.coerce.number(),
  }),
})

export const CandidateQuery = z.object({
  params: z.object({
    id: z.coerce.number(),
  }),
})
