var express = require ('express');
var router = express.Router();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });
var employeesData = require ('../data/employees-data.js');

//app.use('/blocks', ...);

router.route('/')
	.get (function (request, response){
		response.status(200);
		response.json(employeesData);
	})
	.post (parseUrlencoded, function (request, response){

	});

router.route('/:name')
	//app.param('name')
	.all (function (request, response, next){
		var name = request.params.name;
		var employee = name[0].toUpperCase() + name.slice(1).toLowerCase();
		request.employeeName = employee;
		next();
	})
	.get (function (request, response) {

	})
	.delete(function(request, response){

	});



module.exports = router;