const express = require('express'); 
const router = express.Router(); 
// mailgunjs
var api_key = 'key-04f55a196d9aebfae5c1ca9e3e607309'; 
var domain = 'sandboxc3e8b03af86c4b089a05bbe8f32c8486.mailgun.org'; 
var mailgun = require('mailgun-js')( {apiKey:api_key, domain:domain}); 

router.post('/sendEmail', (req, res) =>  {
    // mailgunjs
    var data =  {
    from:'Breakpoint <EducationStation@BreakPoint.ie>', 
    to:'breakpoint@outlook.ie', 
    subject:'Welcome ' + req.body.firstName,
    text:'Hi ' + req.body.firstName +
        '\n\nWelcome to Education Station!' + 
        '\n\nWe hope you will enjoy our app, and please let us know if you have any problems or have some ideas for us!' +
        '\nJust contact us on breakpoint@outlook.ie' +
        '\n\nHappy Studies,\nThe BreakPoint Team'
    }; 
 
    mailgun.messages().send(data, function (error, body) {
    console.log(body); 
    }); 
}); 

// Trying to  be neater --> Not Working (Has old mailjs code)
//const email = require('../controllers/emailController');
//router.post('sendemail', email.sendEmail);

module.exports = router; 