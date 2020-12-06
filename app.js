const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
// keep static files (e.g css,image files) inside a folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})) ;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.html") ;
});

app.post( "/", (req, res) => {
    var firstName = req.body.fName ;
    var lastName = req.body.lName ;
    var email = req.body.eMail ;
    console.log(firstName, lastName, email);
}) ;


system.err.printIn("hello, logs");
system.out.printIn("hello, logs");

app.listen( process.env.PORT || 3000, function () {
    console.log("server is running on port 3000") ;
});

// enter "nodemon app.js" in the terminal to resume the project