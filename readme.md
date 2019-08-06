# Whatsapp Sender

Simple node app to send messages to a verified Twilio WhatsApp number.

# Usage

There is a prerequisite to use this app, you need at least one Twilio sandbox account with your phone number verified.

Once you have your account you can use this simple app just by:

``` 
node src/index.js -b 'Your message to send' -d 'destination number'
```

**Important note**, the destination number should be a pre-verified number on your Twilio account, if you do not do this previously the message won't send.

The app is really simple, just requires the official Twilio library and with your account data send a message, if you don't provide the optional arguments through the command line a default "Twilio test message" will be sent.

# Configuration

To run this script locally you need a .env file with the next info:

```
TWILIO_ACCOUNT_SSID=your Twilio ssid, you can find it on Twilio dashboard.

AUTH_TOKEN=your Twilio authentication token, like the ssid you can find it on the Twilio dashboard.

TWILIO_SENDER=here will be the number Twilio gives to you as a sender of your messages

TWILIO_DESTINATION=A verified phone number, on Twilio sandbox env you only can send messages to a previously verified phone number.
```

# TODO

Update the app with an express / Hapi / whatever server to be able to send messages with a REST request instead only through the command line.

