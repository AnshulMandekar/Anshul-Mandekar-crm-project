require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSMS = async(body,) => {
    let msgOption ={
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.MY_PHONE_NUMBER,
        body: body
    }
    try{
        const message = await client.messages.create(msgOption);
        console.log(message);
    }catch(err){
        console.log(err);
    }
}

sendSMS('Hello, this is a test message!');