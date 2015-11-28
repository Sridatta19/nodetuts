var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: false}));

// app.set('views',process.argv[3] || path.join(__dirname, 'templates'));
//app.use(express.static(process.argv[3] ||  path.join(__dirname, 'public')));
// app.set('view engine','jade');
//
// app.get('/home',function(req,res) {
//   res.render('index', {date: new Date().toDateString()});
// });

app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
