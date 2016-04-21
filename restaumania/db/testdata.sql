USE restaumania;
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE restaurant;
TRUNCATE TABLE restaurant_user;
TRUNCATE TABLE rankings_enum;
TRUNCATE TABLE visitors;
TRUNCATE TABLE card_category;
TRUNCATE TABLE card_entry;
TRUNCATE TABLE card_subcatergory;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO restaurant_user (nickname) VALUES ("Lilly");
INSERT INTO restaurant_user (nickname) VALUES ("Tim");

INSERT INTO restaurant (restaurant_name, restaurant_description, user_id, creation_timestamp) VALUES ("Pizza Doge", "Such Restaurant, Much Food. Wow! Many Eat!", 1, NOW());
INSERT INTO restaurant (restaurant_name, restaurant_description, user_id, creation_timestamp) VALUES ("Th-Köln, Mensa GM", "Die zweifelhafte Mensa der Fachhochschule Köln mit wechselndem Menü!", 1, NOW());

INSERT INTO rankings_enum (ranking_name) VALUES ("Übel");
INSERT INTO rankings_enum (ranking_name) VALUES ("Nicht so Gut");
INSERT INTO rankings_enum (ranking_name) VALUES ("Annehmbar");
INSERT INTO rankings_enum (ranking_name) VALUES ("Gut");
INSERT INTO rankings_enum (ranking_name) VALUES ("Fantastisch!");

INSERT INTO visitors (restaurant_id, user_id, experience, ranking_id) VALUES (1, 1, "War ganz ok!", 4);
INSERT INTO visitors (restaurant_id, user_id, experience, ranking_id) VALUES (2, 2, "Wie immer, Currywurst ._.", 2);

INSERT INTO card_category (cat_name, description) VALUES ("Vorspeise", "Alles vor dem großen Moment!");
INSERT INTO card_category (cat_name, description) VALUES ("Hauptgericht", "Der große Moment");
INSERT INTO card_category (cat_name, description) VALUES ("Nachspeise", "Um den letzten Appetit zu stillen");
INSERT INTO card_category (cat_name, description) VALUES ("Getränke", "Sclürfi!");

INSERT INTO card_subcatergory (subc_name, cat_description) VALUES ("Waffeln", "Luftig leckeres Gebäck");
INSERT INTO card_subcatergory (subc_name, cat_description) VALUES ("Suppe", "Ob als Vorspeise oder Hauptgericht, seit jeher ein Muss!");
INSERT INTO card_subcatergory (subc_name, cat_description) VALUES ("Pizza", "Yuss, Pizza!");
INSERT INTO card_subcatergory (subc_name, cat_description) VALUES ("Softgetränk", "Zucker, aber kein Alkohol!");

INSERT INTO card_entry (restaurant_id, cat_id, subc_id, entry_name, entry_details, price) VALUES (1, 2, 3, "Dogepizza", "Such Pizza, much Nom!", 6.50);

SELECT restaurant_name, entry_name, entry_details FROM card_entry
NATURAL JOIN restaurant;
