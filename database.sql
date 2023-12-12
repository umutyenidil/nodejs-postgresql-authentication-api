CREATE EXTENSION IF NOT EXISTS 'uuid-ossp';

CREATE DATABASE nodejs_postgresql_auth_db;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL UNIQUE,
  user_password TEXT NOT NULL,
);

SELECT * FROM users;

INSERT INTO users (user_name, user_email, user_password) VALUES ('test', 'test@test.com', 'test');
INSERT INTO users (user_name, user_email, user_password) VALUES ('test2', 'test2@test.com', 'test2');
INSERT INTO users (user_name, user_email, user_password) VALUES ('test3', 'test3@test.com', 'test3');
INSERT INTO users (user_name, user_email, user_password) VALUES ('test4', 'test4@test.com', 'test4');
INSERT INTO users (user_name, user_email, user_password) VALUES ('test5', 'test5@test.com', 'test5');