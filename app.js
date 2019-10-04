let express =  require('express');
let bodyParser = require('body-parser');
//
//
let app = express();

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

function sender(text) {
  let nodemailer = require('nodemailer');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'send.company.bot@gmail.com',
      pass: 'javaservelet'
    }
  });

  let mailOptions = {
    from: 'send.company.bot@gmail.com',
    to: 'gabi.broun@gmail.com, dmirddz@gmail.com',
    subject: 'Sending Email using Node.js',
    text: text
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
  

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
  res.sendFile(__dirname + "/index.html");
});


app.listen(5500);



process.chdir('/home/a0318870/domains/dzakh.dev/public_html');
