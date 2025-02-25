const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 8000;
const JWT_SECRET = 'your_jwt_secret';
const MONGO_URI = 'mongodb://localhost:27017/auth_demo';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ag5603390@gmail.com', // Your Gmail
        pass: 'zejd ipff hipc wvqc'     // Your App Password
    }
});

// User Schema
const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: { type: String, unique: true, required: true },
    phone: String,
    companyType: String,
    gst: String,
    PanCard: String,
    street1: String,
    city1: String,
    state1: String,
    pincode1: String,
    password: { type: String, required: true },
    terms: Boolean,
    otp: String,
    otpExpiry: Date,
});

const User = mongoose.model('User', UserSchema);

// Register Route
app.post('/api/signup', async (req, res) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        companyType,
        gst,
        PanCard,
        street1,
        city1,
        state1,
        pincode1,
        password,
        terms,
    } = req.body;

    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            firstname,
            lastname,
            email,
            phone,
            companyType,
            gst,
            PanCard,
            street1,
            city1,
            state1,
            pincode1,
            password: hashedPassword,
            terms,
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

app.post('/api/generate-otp', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const otp = generateOtp();
        const otpExpiry = new Date(Date.now() + 300 * 1000);

        await User.updateOne({ email }, { otp, otpExpiry });

        console.log(`Generated OTP for ${email}: ${otp}, Expires at: ${otpExpiry}`);

        const mailOptions = {
            from: 'ag5603390@gmail.com',
            to: email,
            subject: 'Your OTP for Login',
            text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending OTP email:', error);
                return res.status(500).json({ error: 'Failed to send OTP email' });
            }
            res.status(200).json({ message: 'OTP sent successfully' });
        });

    } catch (error) {
        console.error('OTP Generation Error:', error);
        res.status(500).json({ error: 'Error generating OTP' });
    }
});

// Verify OTP and Login Route
app.post('/api/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
            return res.status(400).json({ error: 'Invalid or expired OTP' });
        }

        await User.updateOne({ email }, { otp: null, otpExpiry: null });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error('OTP Verification Error:', error);
        res.status(500).json({ error: 'Error verifying OTP' });
    }
});

// Login with Password Route
app.post('/api/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        console.log(`Stored OTP: ${user.otp}, Entered OTP: ${otp}, Expiry: ${user.otpExpiry}`);

        if (!user.otp || user.otp !== otp || user.otpExpiry < new Date()) {
            return res.status(400).json({ error: "Invalid or expired OTP" });
        }

        // Clear OTP after successful login
        await User.updateOne({ email }, { otp: null, otpExpiry: null });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error('OTP Verification Error:', error);
        res.status(500).json({ error: 'Error verifying OTP' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
