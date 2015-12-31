'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb');

mongo.connect('mongodb://heroku_z3c29mk0:ib682pkjde4ot5a36sortc6fb1@ds037215.mongolab.com:37215/heroku_z3c29mk0', function(err, db) {

  if (err) {
      throw new Error('Database failed to connect!');
  } else {
      console.log('Successfully connected to MongoDB on port 27017.');
  }
  
    // configure app to use bodyParser()
    // this will let us get the data from a POST
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    var port = process.env.PORT || 8080;        // set our port
    
    // The format follows as, alias to use for real path, also allows permission to such path.
    app.use('/api', express.static(process.cwd() + '/app/api'));
    
    routes(app, db);
    
      
    app.listen(port, function() {
        console.log('Node.js listening on port ' + port);
    });
});