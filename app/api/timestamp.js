'use strict';

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var date = req.params.query;
        var unix = Math.round(new Date(+date).getTime()/1000);
        var dateObj = { "unix": unix, "natural": date };
        res.send(dateObj);
    });
};