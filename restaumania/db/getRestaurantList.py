import MySQLdb
import sys
import json
import collections

host = "127.0.0.1"
user = "root"
passwd = "root"
db = "restaumania"

try:
	db = MySQLdb.connect(host, user, passwd, db)
except:
	print "connection error"
	sys.exit(-1)

cursor = db.cursor()
cursor.execute("SELECT restaurant_id, restaurant_name, restaurant_description FROM restaurant")
data = cursor.fetchall()

object_list = []
for single in data:
	d = collections.OrderedDict()
	d['resid'] = single[0]
	d['rname'] = unicode(single[1], 'ISO-8859-1')
	d['rdesc'] = unicode(single[2], 'ISO-8859-1')
	object_list.append(d)

j = json.dumps(object_list)
objects_file = 'restList.json'
f = open(objects_file, 'w')
print >> f, j

db.close
