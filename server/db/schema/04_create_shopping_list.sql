-- schema/01_create_users.sql
DROP TABLE IF EXISTS shopping_list CASCADE;
-- CREATE USERS
CREATE TABLE shopping_list (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  aisle VARCHAR(255),
  image VARCHAR(255),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);