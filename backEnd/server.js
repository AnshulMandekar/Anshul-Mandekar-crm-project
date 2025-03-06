const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer'); // Import multer
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/crm_project';

// Import routes
const authRoutes = require('./routes/auth.js');
const projectRoutes = require('./routes/projects.js');

// Middleware
app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if DB connection fails
  });

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// File Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Define Property Schema and Model
const propertySchema = new mongoose.Schema({
  projectName: String,
  propertyType: String,
  areaOfLand: Number,
  projectAddress: String,
  projectStartDate: Date,
  expectedCompletionDate: Date,
  geoTag: String,
  typeOfBuilding: String,
  numberOfBuildings: Number,
  numberOfPhases: Number,
  flatsPerFloor: Number,
  totalFloors: Number,
  fsi: Number,
  superBuiltUpArea: Number,
  unitTypes: [String],
  amenities: [String],
  currentASRRate: Number,
  parkingCharges: Number,
  societyFormationFees: Number,
  developmentCharges: Number,
  legalCharges: Number,
  maintenance: Number,
  stampDuty: Number,
  registrationCharges: Number,
  gstRate: Number,
  infrastructureCharges: Number,
  reraNumber: String,
  bankAccountDetails: String,
  documents: [String],
});

const Property = mongoose.model('Property', propertySchema);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

// Property Creation Route with File Upload
app.post('/api/properties', upload.array('documents'), async (req, res) => {
  try {
    const {
      projectName,
      propertyType,
      areaOfLand,
      projectAddress,
      projectStartDate,
      expectedCompletionDate,
      geoTag,
      typeOfBuilding,
      numberOfBuildings,
      numberOfPhases,
      flatsPerFloor,
      totalFloors,
      fsi,
      superBuiltUpArea,
      unitTypes,
      amenities,
      currentASRRate,
      parkingCharges,
      societyFormationFees,
      developmentCharges,
      legalCharges,
      maintenance,
      stampDuty,
      registrationCharges,
      gstRate,
      infrastructureCharges,
      reraNumber,
      bankAccountDetails,
    } = req.body;

    // Map uploaded files to their paths
    const documents = req.files.map(file => file.path);

    // Create new property
    const newProperty = new Property({
      projectName,
      propertyType,
      areaOfLand,
      projectAddress,
      projectStartDate,
      expectedCompletionDate,
      geoTag,
      typeOfBuilding,
      numberOfBuildings,
      numberOfPhases,
      flatsPerFloor,
      totalFloors,
      fsi,
      superBuiltUpArea,
      unitTypes,
      amenities,
      currentASRRate,
      parkingCharges,
      societyFormationFees,
      developmentCharges,
      legalCharges,
      maintenance,
      stampDuty,
      registrationCharges,
      gstRate,
      infrastructureCharges,
      reraNumber,
      bankAccountDetails,
      documents,
    });

    // Save property to database
    await newProperty.save();
    res.status(201).json({ message: 'Property saved successfully', property: newProperty });
  } catch (error) {
    console.error('Error saving property:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Serve uploaded files statically
app.use('/uploads', express.static(uploadsDir));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});