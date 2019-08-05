const argv = require('minimist')(process.argv.slice(2));
const dotenv = require('dotenv').config();
const config = require('./config');
const twilio = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

const destination = (argv.d) ? argv.d : config.twilio.destination;
const body = (argv.b) ? argv.b : 'Twilio test message';
(function sendMessage() {
    twilio.messages
        .create({
            to: `whatsapp:${destination}`,
            from: `whatsapp:${config.twilio.sender}`,
            body,
        })
        .then(message => console.log(`Message SID ${message.sid}`));
}) ();