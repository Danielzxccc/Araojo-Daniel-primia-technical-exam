

CREATE TABLE positions(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    salary_range_start INT NOT NULL,
    salary_range_end INT NOT NULL,
    is_hiring BOOLEAN DEFAULT true
);

CREATE TYPE position_status AS ENUM ('hired', 'candidate');
CREATE TABLE candidates(
    id SERIAL PRIMARY KEY,
    position_id INT NOT NULL,
    fullname TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    birthdate DATE NOT NULL,
    current_salary INT,
    expected_salary INT,
    final_salary INT,
    createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
    status position_status default 'candidate',
    FOREIGN KEY (position_id) REFERENCES positions(id) ON DELETE CASCADE
);


CREATE TABLE file_attachments(
    id SERIAL PRIMARY KEY,
    candidate_id INT NOT NULL,
    filename TEXT NOT NULL,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE
);


DELETE FROM positions;

-- Reset the identity column's sequence
ALTER SEQUENCE positions_id_seq RESTART WITH 1
