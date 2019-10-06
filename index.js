const express =  require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const sender = require('./js/sender');
const app = express();
app.use(compression());
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require('path')

app.use(express.static('public_html'));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/mail', function(req, res, next) {
  if (!req.body)
    return res.sendStatus(400);
  console.log(req.body);
  let obj = req.body;
  sender("Имя: " + obj.user + "\nНомер телефона: " + obj.tel);
  // res.type('text/plain');
  // res.json(req.body);
  res.status(201).send({
    message: "Почта отправлена",
    status: "ok"
  })
});

app.get('/', function(req, res) {
  res.sendFile(dirname + "/public_html/index.html");
});

app.get('/test', function(req, res) {
  res.send({
    pe: "wrewr"
  })
})

app.listen(5500);


// process.chdir('/home/a0318870/domains/dzakh.dev/public_html');