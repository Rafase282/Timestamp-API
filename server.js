'use strict';

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb');

mongo.connect('mongodb://heroku_5xmh9kp6:n8soimuuccsde5tsq6er5jlbie@ds037205.mongolab.com:37205/heroku_5xmh9kp6', function(err, db) {

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