'use strict';

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var search = req.params.query;
        res.send(search);
    });
};