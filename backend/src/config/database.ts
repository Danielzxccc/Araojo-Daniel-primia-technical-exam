import { Kysely, PostgresDialect } from 'kysely'
import { DB } from '../types/db'
import { Pool } from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
})
