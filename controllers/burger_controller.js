// require express
var express = require("express");

var db = require("../models");

module.exports = function(app) {
    // find all the burgers and return them to the user with res.json
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbResponse) {
            res.render("index", { burger: dbResponse });
        });
    });
    // changes burgers to devoured
    app.put("/update", function(req, res, next) {
        console.log(req.body);
        db.Burger.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(dbResponse) {
            res.redirect('/');
        });
    });
    // creating new burgers
    app.post("/", function(req, res) {
        console.log(req.body);
        db.Burger.create(req.body).then(function(dbResponse) {
            res.redirect("/");
        });
    });

};
