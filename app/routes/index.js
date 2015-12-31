'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.json({ message: 'Welcome to my API!' });
    });
  
};