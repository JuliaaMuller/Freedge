-- schema/01_create_users.sql
DROP TABLE IF EXISTS ingredients CASCADE;
-- CREATE USERS
CREATE TABLE ingredients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  expiration_date DATE,
  category VARCHAR(255)
);