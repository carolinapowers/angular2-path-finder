var express = require ('express');
var app = express();

app.use(express.static('src'));

var employees = require ('./routes/employees');
app.use('/employees', employees);

app.listen(4200);