CREATE DATABASE restaumania;
USE restaumania;

CREATE TABLE card_subcatergory (
                subc_id INT AUTO_INCREMENT NOT NULL,
                subc_name VARCHAR(32) NOT NULL,
                cat_description VARCHAR(256) NOT NULL,
                PRIMARY KEY (subc_id)
);


CREATE TABLE rankings_enum (
                ranking_id INT AUTO_INCREMENT NOT NULL,
                ranking_name VARCHAR(32) NOT NULL,
                PRIMARY KEY (ranking_id)
);


CREATE TABLE user_rights (
                right_level INT AUTO_INCREMENT NOT NULL,
                right_name VARCHAR(32) NOT NULL,
                PRIMARY KEY (right_level)
);


CREATE TABLE card_category (
                cat_id INT AUTO_INCREMENT NOT NULL,
                cat_name VARCHAR(32) NOT NULL,
                description VARCHAR(256) NOT NULL,
                PRIMARY KEY (cat_id)
);


CREATE TABLE restaurant_user (
                user_id INT AUTO_INCREMENT NOT NULL,
                nickname VARCHAR(32) NOT NULL UNIQUE,
		pwhash VARCHAR(128) NOT NULL,
                PRIMARY KEY (user_id)
);


CREATE TABLE user_rights_assignment (
                right_level INT NOT NULL,
                user_id INT NOT NULL,
                PRIMARY KEY (right_level, user_id)
);


CREATE TABLE restaurant (
                restaurant_id INT AUTO_INCREMENT NOT NULL,
                restaurant_name VARCHAR(128) NOT NULL,
                restaurant_description VARCHAR(1024) NOT NULL,
                user_id INT NOT NULL,
                creation_timestamp TIMESTAMP DEFAULT NOW() NOT NULL,
                PRIMARY KEY (restaurant_id)
);


CREATE TABLE visitors (
                restaurant_id INT NOT NULL,
                user_id INT NOT NULL,
                experience VARCHAR(1024),
                ranking_id INT NOT NULL,
                PRIMARY KEY (restaurant_id, user_id)
);


CREATE TABLE card_entry (
                entry_id INT AUTO_INCREMENT NOT NULL,
                restaurant_id INT NOT NULL,
                cat_id INT NOT NULL,
                subc_id INT NOT NULL,
                entry_name VARCHAR(32) NOT NULL,
                entry_details VARCHAR(256) NOT NULL,
                price FLOAT DEFAULT 0.0,
                PRIMARY KEY (entry_id)
);


ALTER TABLE card_entry ADD CONSTRAINT card_subcatergory_card_entry_fk
FOREIGN KEY (subc_id)
REFERENCES card_subcatergory (subc_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE visitors ADD CONSTRAINT rankings_enum_visitors_fk
FOREIGN KEY (ranking_id)
REFERENCES rankings_enum (ranking_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE user_rights_assignment ADD CONSTRAINT user_rights_user_rights_assignment_fk
FOREIGN KEY (right_level)
REFERENCES user_rights (right_level)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE card_entry ADD CONSTRAINT card_category_card_entry_fk
FOREIGN KEY (cat_id)
REFERENCES card_category (cat_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE restaurant ADD CONSTRAINT restaurant_user_restaurant_fk
FOREIGN KEY (user_id)
REFERENCES restaurant_user (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE visitors ADD CONSTRAINT restaurant_user_visitors_fk
FOREIGN KEY (user_id)
REFERENCES restaurant_user (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE user_rights_assignment ADD CONSTRAINT restaurant_user_user_rights_assignment_fk
FOREIGN KEY (user_id)
REFERENCES restaurant_user (user_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE card_entry ADD CONSTRAINT restaurant_card_entry_fk
FOREIGN KEY (restaurant_id)
REFERENCES restaurant (restaurant_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE visitors ADD CONSTRAINT restaurant_visitors_fk
FOREIGN KEY (restaurant_id)
REFERENCES restaurant (restaurant_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;
