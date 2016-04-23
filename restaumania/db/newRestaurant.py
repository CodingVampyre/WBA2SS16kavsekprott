import MySQLdb
import sys
import json
import collections

host = "127.0.0.1"
user = "root"
passwd = "root"
db = "restaumania"

rname = "Klotz"
rdesc = "Eine kleine Bude in Niedersessmar."
userid = 1

try:
	db = MySQLdb.connect(host, user, passwd, db)
except:
	print "connection error"
	sys.exit(-1)

cursor = db.cursor()
cursor.execute("INSERT INTO restaurant (restaurant_name, restaurant_description, user_id, creation_timestamp) VALUES (%s, %s, %s, NOW())", (rname, rdesc, userid))
db.commit()

db.close()
