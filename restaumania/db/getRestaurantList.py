import MySQLdb
import sys
import json

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

rowarray_list = []

for single in data:
	t = (single[0], single[1])
	rowarray_list.append(t)

j = json.dumps(rowarray_list)
rowarrays_file = 'r_list.js'
f = open(rowarrays_file, 'w')
print >> f, j

db.close
