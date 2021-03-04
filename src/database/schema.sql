DROP TABLE IF EXISTS person;

CREATE TABLE IF NOT EXISTS person
  (
     id         SERIAL PRIMARY KEY,
     first_name VARCHAR(35) NOT NULL,
     last_name  VARCHAR(35) NOT NULL,
     email      VARCHAR(100) NOT NULL,
     password   VARCHAR(255) NOT NULL
  );