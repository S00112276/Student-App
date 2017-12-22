const express = require('express'); 
const router = express.Router(); 
var email = require("emailjs/email"); 

exports.sendEmail = function(req, res) {
    var server = email.server.connect( {
    user: "breakpoint.itsligo@gmail.com", 
    password: "BreakPoint.", 
    host: "smtp.gmail.com", 
    ssl: true,
    port: 465
    }); 

    // send the message and get a callback with an error or details of the message that was sent
    server.send( {
    text: "I hope this works", 
    from: "breakpoint.itsligo@gmail.com", 
    to: req.body.email,
    subject: "Testing emailjs"
    }, function(err, message) {
        if(err)
            console.log(err); 
        else
            return res.json({ success: true, msg: 'email sent' });
    }); 
}