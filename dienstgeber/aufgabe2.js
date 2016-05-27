var bodyParser = require ('body-parser')

var app = express();

app.get('/projekt', function(req,res {


}));
app.post('/projekt', function (req, res {
res.send(jsonObject);
}));
var jsonParser = bodyParser.json();
app.use(jsonParser)

app.listen(3000);