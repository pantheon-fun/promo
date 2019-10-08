const express =  require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const sender = require('./senders/main.js');

const zlib = require('zlib');
const app = express();
app.use(compression({
  //level: 7
}));

const urlencodedParser = bodyParser.urlencoded({ extended: true });
const path = require('path')

app.use(express.static('public'));
app.use('/node_modules',express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post('/mail', function(req, res, next) {
  if (!req.body)
    return res.sendStatus(400);
  console.log(req.body);
  const obj = req.body;
  const message = "Имя: " + obj.user + "; \nНомер телефона: " + obj.tel + ";";
  sender(message);
  // res.type('text/plain');
  // res.json(req.body);
  res.status(201).send({
    message: "Почта отправлена",
    status: "ok"
  })
});

app.get('/', function(req, res) {
  res.sendFile(dirname + "/public/index.html");
});

app.get('/test', function(req, res) {
  res.send({
    test: "Ok"
  })
})

app.listen(3000);


// process.chdir('/home/a0318870/domains/dzakh.dev/public_html');