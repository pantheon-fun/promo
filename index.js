let express =  require('express');
let bodyParser = require('body-parser');
let sender = require('./js/sender');
let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let path = require('path')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));
  app.use('/', bodyParser.urlencoded({
      extended: true
  }));

  app.post('/', function(req, res, next) {
      if(!req.body)return res.sendStatus(400);
      console.log(req.body);
      let obj = req.body;
      sender("Имя: " + obj.username + "\nНомер телефона: " + obj.tel);
      // res.type('text/plain');
      // res.json(req.body);
      // res.end();
  });

  app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
app.listen(5500);
