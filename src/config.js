module.exports = {
    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SSID,
        authToken: process.env.AUTH_TOKEN,
        sender: process.env.TWILIO_SENDER,
        destination: process.env.TWILIO_DESTINATION,
    }
}