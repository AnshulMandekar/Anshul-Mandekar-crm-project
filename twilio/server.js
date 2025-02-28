const express = require('express');
const twilio = require('twilio');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ✅ Allow JSON parsing for debugging

// ✅ Route to check if server is running
app.get('/', (req, res) => {
  res.send('✅ Server is running! Use /incoming-call for Twilio.');
});

// ✅ Handle incoming calls
app.post('/incoming-call', (req, res) => {
  console.log('📞 Incoming call received:', req.body); // Debug incoming Twilio request

  const VoiceResponse = twilio.twiml.VoiceResponse;
  const twiml = new VoiceResponse();
  
  twiml.say('Hello! Welcome to my Twilio-powered call service.');

  res.type('text/xml');
  res.send(twiml.toString());
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
