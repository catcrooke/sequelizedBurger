-- ##SCHEMA##

-- Create the burgers_db.
CREATE DATABASE burgers_db;
-- Switch to or use the burgers_db.
USE burgers_db;

CREATE TABLE burgers (
	item_id INTEGER (20) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR (500) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP NOT NULL,
	primary key (item_id)
); 








