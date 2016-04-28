import MySQLdb
import sys
import json
import collections

def getFromDatabase ( getType, selectedID ):

	host = "127.0.0.1"
	user = "root"
	passwd = "root"
	db = "restaumania"

	query = ""

	try:
		db = MySQLdb.connect(host, user, passwd, db)
	except:
		print "connection error"
		sys.exit(-1)

	cursor = db.cursor()

	if  getType in ['restList']:
		print "DEBUG: getType == RESTLIST"
		query = "SELECT restaurant_id, restaurant_name, restaurant_description FROM restaurant"

	elif getType in ['singleCard']:
		print "DEBUG: getType == singleCard"
		query = "SELECT restaurant_id, restaurant_name, cat_name, subc_name, entry_name, entry_details, price FROM card_entry NATURAL JOIN restaurant NATURAL JOIN card_category NATURAL JOIN card_subcatergory WHERE restaurant_id = " + str(selectedID)

	cursor.execute(query)
	data = cursor.fetchall()

	if getType in ['restList']:
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

	elif getType in ['singleCard']:
		object_list = []
		for single in data:
			d = collections.OrderedDict()
			d['resid'] = single[0]
			d['rname'] = unicode(single[1], 'ISO-8859-1')
			d['catname'] = unicode(single[2], 'ISO-8859-1')
			d['scatname'] = unicode(single[3], 'ISO-8859-1')
			d['entry'] = unicode(single[4], 'ISO-8859-1')
			d['edetails'] = unicode(single[5], 'ISO-8859-1')
			d['price'] = single[6]
			object_list.append(d)

		j = json.dumps(object_list)
		objects_file = 'restCard.json'
		f = open(objects_file, 'w')
		print >> f, j

	db.close

getFromDatabase('singleCard', 1)
