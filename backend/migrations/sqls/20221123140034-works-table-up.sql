CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS works (
    work_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid,
    work_title TEXT NOT NULL,
    work_picture TEXT NOT NULL,
    word_date VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);