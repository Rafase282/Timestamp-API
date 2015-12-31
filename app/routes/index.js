'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.json({ message: 'hooray! welcome to our api!' });
    });
  
};