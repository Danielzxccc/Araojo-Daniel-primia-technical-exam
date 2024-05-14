import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type PositionStatus = "candidate" | "hired";

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Candidates {
  createdat: Generated<Timestamp | null>;
  current_salary: number | null;
  email: string | null;
  expected_salary: number | null;
  final_salary: number | null;
  fullname: string;
  id: Generated<number>;
  phone: string | null;
  position_id: number;
  status: Generated<PositionStatus | null>;
  updatedat: Generated<Timestamp | null>;
}

export interface Positions {
  description: string;
  id: Generated<number>;
  salary_range_end: number;
  salary_range_start: number;
  title: string;
}

export interface DB {
  candidates: Candidates;
  positions: Positions;
}
