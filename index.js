var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var twilio = require('twilio');
var accountSid = 'YOUR_ACCOUNT_SID'; // Your Account SID from www.twilio.com/console
var authToken = 'YOUR_AUTH_TOKEN';   // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

app.get('/', function(req, res){

  client.messages.create({
    body: 'Hello from Ankit Mohokar CS 643 Fall 2018',
    to: 'XXXXXXXXXXXX',  // Text this number
    from: 'XXXXXXXXXXX' // From a valid Twilio number
})
.then((message) => {
  console.log(message.sid);
res.send(message.sid)
});

});

app.listen(port);
