import MySQLdb
import sys
import json
import collections

restid = "1"

host = "127.0.0.1"
user = "root"
passwd = "root"
db = "restaumania"

print "Name"
entryname = raw_input()
print "Beschreibung"
entrydetails = raw_input()
print "Kategorie: Vorspeise, Hauptgericht, Nachspeise Getraenke"
catid = raw_input()
print "Unterkategorie"
subcatid = raw_input()
print "Preis"
entryprice = raw_input()

try:
	db = MySQLdb.connect(host, user, passwd, db)
except:
	print "connection error"
	sys.exit(-1)

cursor = db.cursor()
cursor.execute("INSERT INTO card_entry (restaurant_id, cat_id, subc_id, entry_name, entry_details, price) VALUES (%s, %s, %s, %s, %s, %s)", (restid, catid, subcatid, entryname, entrydetails, entryprice))
db.commit()

db.close()
