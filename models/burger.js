var connection = require("../config/connection.js");

// Import the ORM to create functions that will interact with the database.
// service layer
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
        orm.create(cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update(objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
