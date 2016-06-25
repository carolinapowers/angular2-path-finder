var express = require ('express');
var app = express();

app.use(express.static('angular2-path-finder'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var employees = require ('./routes/employees');
app.use('/api/employees', employees);

app.listen(3000, function () {
	console.log('App listening on port 3000');
});