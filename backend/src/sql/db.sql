

CREATE TABLE IF NOT EXISTS positions(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    salary_range_start INT NOT NULL,
    salary_range_end INT NOT NULL
);

CREATE TYPE IF NOT EXISTS position_status AS ENUM ('hired', 'candidate');
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

