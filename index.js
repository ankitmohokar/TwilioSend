var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var twilio = require('twilio');
var accountSid = 'ACf87d32a10e69a66e4396ce4d73d646c9'; // Your Account SID from www.twilio.com/console
var authToken = '88b9fc0a47779add9de66f7a4de60ebc';   // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

app.get('/', function(req, res){

  client.messages.create({
    body: 'Hello from Ankit Mohokar CS 643 Fall 2018',
    to: '+19293105441',  // Text this number
    from: '+17147861082' // From a valid Twilio number
})
.then((message) => {
  console.log(message.sid);
res.send(message.sid)
});

});

app.listen(port);
