// * Inside the `connection.js` file, setup the code to connect Node to MySQL and query the database.
// require the npm packages needed 
var mysql = require("mysql");

// connection to the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // your password
    password: "MySq12D4y!",
    database: "burgers_db"
});
connection.connect(function(err) {
    // if error reject a promise
    if (err) {
        console.log(err);
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

module.exports = connection;
