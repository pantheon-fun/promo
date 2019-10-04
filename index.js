const express =  require('express');
const bodyParser = require('body-parser');
const sender = require('./js/sender');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require('path')

app.set('view engine', 'ejs');
app.use(express.static('public_html'));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


  app.post('/', function(req, res, next) {
      if(!req.body)return res.sendStatus(400);
      console.log(req.body);
      let obj = req.body;
      sender("Имя: " + obj.user + "\nНомер телефона: " + obj.tel);
      // res.type('text/plain');
      // res.json(req.body);
       res.end();
  });

  app.get('/', function(req, res) {
    res.sendFile(dirname + "/public_html/index.html");
  });
app.listen(5500);


process.chdir('/home/a0318870/domains/dzakh.dev/public_html');
