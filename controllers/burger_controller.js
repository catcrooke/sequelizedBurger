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

    // app.put("/", function(req, res, next) {
    //     db.Burger.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function(burger_db) {
    //         res.json(burger_db);
    //     });

    // .then function to burgers.update({ 'devoured': true }, 'burger_name="' + req.body.burger_name + '"', function() {
    //     res.redirect("/");
    // });
    // });


    // post is used to create new resources, or in this example, create a new burger
    app.post("/", function(req, res) {
        // Create an Burger with the data available to us in req.body
        console.log(req.body);
        db.Burger.create(req.body).then(function(burger_db) {
            // res.json(burger_db);
            res.redirect("/");
        });
    });
    app.delete("/", function(req, res) {
        // Delete the Burger with the id available to us in req.params.id
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(burger_db) {
            res.json(burger_db);
        });
    });

};
