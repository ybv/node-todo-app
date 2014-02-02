var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT||8001;

mongoose.connect('mongodb://ybv:root@novus.modulusmongo.net:27017/Jemymu4j');

app.configure(function(){

	app.use(express.static(__dirname+'/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

});
require('./app/routes.js')(app);
app.listen(port);
console.log('listening on 8001');