require('dotenv').config();
const twilio = require('twilio');

// Load environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;

// Debugging: Check if environment variables are loaded
if (!accountSid || !authToken || !twilioPhoneNumber || !myPhoneNumber) {
    console.error("❌ Missing Twilio environment variables. Check your .env file.");
    process.exit(1);
}

// Initialize Twilio client
const client = new twilio(accountSid, authToken);

// Function to make a call
const makeCall = async () => {
    try {
        const call = await client.calls.create({
            url: 'https://handler.twilio.com/twiml/EHc9f086d3e2a56895e13947e4557ff3a2', // TwiML Bin URL
            from: twilioPhoneNumber,
            to: myPhoneNumber
        });
        console.log('✅ Call initiated successfully:', call.sid);
    } catch (err) {
        console.error('❌ Error making call:', err.message);
    }
};

// Run the function
makeCall();
