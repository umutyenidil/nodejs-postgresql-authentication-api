# AUTHENTICATION API WITH NODEJS AND POSTGRESQL

## INSTALLATION

### For database (make sure that you have already installed postgresql on you machine)

1. > psql -U postgres
2. > CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   >
   >CREATE DATABASE nodejs_postgresql_auth_db;
   >
   >CREATE TABLE users(
   > user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   > user_name TEXT NOT NULL,
   > user_email TEXT NOT NULL,
   > user_password TEXT NOT NULL,
   > );
   >
   >SELECT * FROM users;
   >
   >INSERT INTO users (user_name, user_email, user_password) VALUES ("test", "test@test.com", "test");


.env file:<br>
ACCESS_TOKEN_SECRET = asdhfakshdkfashdkfahsldkfahsdfa <br>
REFRESH_TOKEN_SECRET = asdhflaksdflkasdhfsd