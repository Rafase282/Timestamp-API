'use strict';

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var date = req.params.query;
        var unix = getUnixTime(date);
        var natural = checkNaturalTime(date, unix);
        var dateObj = { "unix": unix, "natural": natural };
        res.send(dateObj);
    });
    
    function getUnixTime(date) {
        // Return the Unix time
        return Math.round(new Date(+date).getTime()/1000);
    }
    
    function checkNaturalTime(date, unix) {
        // Deal with Natural Time
        if (date == null) {
            return unix;
        } else {
            return date;
        }
    }
};