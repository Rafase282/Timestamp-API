'use strict';

module.exports = function(app) {
  app.route('/')
    .get(function(req, res) {
      res.json({ author: 'Rafael (Rafase282) Rodriguez',
      message: 'Welcome to my API!' });
    });
  
};