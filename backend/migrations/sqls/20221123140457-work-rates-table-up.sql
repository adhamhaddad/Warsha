CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS work_rates (
    user_id uuid NOT NULL,
    work_id uuid NOT NULL,
    rate_date VARCHAR(255) NOT NULL,
    rate_number VARCHAR(5) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (work_id) REFERENCES works(work_id) ON DELETE CASCADE ON UPDATE CASCADE
);