# -*- coding: utf-8 -*-

import MySQLdb
import sys
import json

reload(sys)
sys.setdefaultencoding('utf-8')

try:
	db = MySQLdb.connect(host="127.0.0.1", 
			     user="root", 
			     passwd="root", 
			     db="restaumania")
except:
	print "connection error"
	sys.exit(-1)

cursor = db.cursor()
cursor.execute("SELECT restaurant_name, restaurant_description FROM restaurant")
data = cursor.fetchall()

for single in data:
	with open("target.json", "w") as myfile:
		json.dump(single[0], myfile)
		json.dump(single[1], myfile)

db.close
