import { sql } from 'kysely'
import { db } from '../config/database'

async function syncDatabase() {
  try {
    await db.executeQuery(
      sql`
    CREATE TABLE IF NOT EXISTS positions(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    salary_range_start INT NOT NULL,
    salary_range_end INT NOT NULL
    );

    DO $$
    BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_type typ
        INNER JOIN pg_namespace nsp ON nsp.oid = typ.typnamespace
        WHERE nsp.nspname = current_schema() AND typ.typname = 'position_status'
    ) THEN
        CREATE TYPE position_status AS ENUM ('hired', 'candidate');
    END IF;
    END;
    $$ LANGUAGE plpgsql;

    CREATE TABLE IF NOT EXISTS candidates(
        id SERIAL PRIMARY KEY,
        position_id INT NOT NULL,
        fullname TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        current_salary INT,
        expected_salary INT,
        final_salary INT,
        createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
        updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
        status position_status default 'candidate',
        FOREIGN KEY (position_id) REFERENCES positions(id) ON DELETE CASCADE
    );
  
  `.compile(db)
    )
    console.log('SYNC SUCCESSFULLY')
  } catch (error) {
    console.log(error.message)
  }
}

export default syncDatabase
