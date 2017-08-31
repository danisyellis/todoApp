DROP TABLE IF EXISTS account;
CREATE TABLE account (
id SERIAL PRIMARY KEY,
username VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS settings_by_user;
CREATE TABLE settings_by_user (
id serial PRIMARY KEY,
account_id int4 REFERENCES account(id),
choose_again BOOLEAN DEFAULT false,
use_time BOOLEAN DEFAULT false,
color_scheme VARCHAR(255) DEFAULT 'default'
);

DROP TABLE IF EXISTS list;
CREATE TABLE list (
id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
account_id int4 REFERENCES account(id)
);

DROP TABLE IF EXISTS list_item;
CREATE TABLE list_item (
id serial PRIMARY KEY,
name VARCHAR(255) NOT NULL,
list_id int4 REFERENCES list(id),
importance VARCHAR(255) DEFAULT 'important',
date_created DATE NOT NULL DEFAULT CURRENT_DATE
);
