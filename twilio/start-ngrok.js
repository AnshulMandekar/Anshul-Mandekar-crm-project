require('dotenv').config();
const ngrok = require('ngrok');

(async function startNgrok() {
  try {
    const url = await ngrok.connect({
      proto: 'http', // http protocol
      addr: 3000, // Your local server port
      authtoken: process.env.NGROK_AUTH_TOKEN, // Load from .env
    });

    console.log(`🚀 Ngrok tunnel started at: ${url}`);
    console.log('📞 Use this URL as your Twilio webhook: ', `${url}/incoming-call`);
  } catch (err) {
    console.error('❌ Error starting Ngrok:', err);
  }
})();
// Run this script with node start-ngrok.js
// You should see the Ngrok tunnel URL and the Twilio webhook URL in the console.