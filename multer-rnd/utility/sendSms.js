const dotenv = require("dotenv").config();
const twilio = require("twilio")(process.env.SID, process.env.AUTH_TOKEN);

const twilio_cell = process.env.TWILIO_CELL;


// Create sms
const SendSms = (to, sms) => {
  
    twilio.messages.create({
        from: twilio_cell,
        to: to,
        body: sms
    })
    .then( res => {
        console.log("Message sent successfully")
    })
    .catch( error => {
        console.log(error.message)
    });
};

module.exports = SendSms;