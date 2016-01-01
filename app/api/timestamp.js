'use strict';
var moment = require('moment');

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var date = req.params.query;
        if (validateDate(date)) {
            var unix = natToUnix(date);
            var natural = unixToNat(unix); 
            var dateObj = { "unix": unix, "natural": natural };
            res.send(JSON.stringify(dateObj));
        }
        
    });
    
    function natToUnix(date) {
        // Conver from natural date to unix timestamp
        return moment(date).format("X");
    }
    
    function unixToNat(unix) {
        // Convert unix timestamp to natural date
        return moment.unix(unix).format("MMMM D, YYYY");
    }
    
    function validateDate(date) {
        // Validate that the string is an actual date, either natural or unix
        
        return Math.round(new Date(+date).getTime()/1000);
    }
};