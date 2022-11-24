CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS rates (
    client_id uuid,
    worker_id uuid,
    rate_number VARCHAR(5) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (worker_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);