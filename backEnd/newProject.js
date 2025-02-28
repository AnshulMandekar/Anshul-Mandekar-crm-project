const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const fs = require('fs');
const util = require('util');

const router = express.Router();
const unlinkFile = util.promisify(fs.unlink);

// MongoDB schema
const projectSchema = new mongoose.Schema({
  typeOfProject: { 
    type: String, 
    enum: ['Residential', 'Commercial', 'Plots', 'Villa', 'Residential / Commercial', 'IT/ITES', 'Warehouse'],
    required: true
  },
  areaOfLand: { type: String, default: '' },
  geoTag: { type: String, default: '' },
  typeOfUnits: { 
    type: String, 
    enum: ['Studio', '1BHK', '1.5 BHK', '2BHK', '2.5 BHK', '3BHK', '4 BHK', 'Row House', 'Villa'],
    required: true
  },
  address: { type: String, required: true },
  numberOfBuildings: { type: Number, default: 0 },
  numberOfPhases: { type: Number, default: 0 },
  amenities: { type: [String], default: [] },
  typeOfBuilding: { type: String, default: '' },
  flatsPerFloor: { type: Number, default: 0 },
  paymentSchedule: { type: String, default: '' },
  demandLetter: { type: String, default: '' },
  currentASRRate: { type: Number, default: 0 },
  RERANumber: { type: String, default: '' },
  bankDetails: {
    approval: { type: String, default: '' },
    IOD: { type: String, default: '' },
    CC: { type: String, default: '' },
    NA: { type: String, default: '' },
    purchaseDeed: { type: String, default: '' },
    titleDocument: { type: String, default: '' },
    reraCertificate: { type: String, default: '' },
    approvedPlan: { type: String, default: '' },
    NOCFire: { type: String, default: '' },
    tree: { type: String, default: '' },
    PWD: { type: String, default: '' },
    environment: { type: String, default: '' },
    airportAuthority: { type: String, default: '' },
    traffic: { type: String, default: '' },
    projectBrochure: { type: String, default: '' }
  },
  otherCharges: {
    parking: { type: Number, default: 0 },
    societyFormation: { type: Number, default: 0 },
    developmentCharge: { type: Number, default: 0 },
    legalCharge: { type: Number, default: 0 },
    maintenancePerSqFt: { type: Number, default: 0 },
    infrastructureCharge: { type: Number, default: 0 }
  }
});

const Project = mongoose.model('Project', projectSchema);

// Multer storage for file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 1 * 1024 * 1024 } // 1MB file size limit
});

// Enhanced error handling middleware
const handleFileUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: `File upload error: ${err.message}` });
  }
  next(err);
};

// Route to create a new project
router.post('/create', 
  upload.fields([
    { name: 'approval', maxCount: 1 }, 
    { name: 'IOD', maxCount: 1 },
    { name: 'CC', maxCount: 1 },
    { name: 'NA', maxCount: 1 },
    { name: 'purchaseDeed', maxCount: 1 },
    { name: 'titleDocument', maxCount: 1 },
    { name: 'reraCertificate', maxCount: 1 },
    { name: 'approvedPlan', maxCount: 1 },
    { name: 'NOCFire', maxCount: 1 },
    { name: 'tree', maxCount: 1 },
    { name: 'PWD', maxCount: 1 },
    { name: 'environment', maxCount: 1 },
    { name: 'airportAuthority', maxCount: 1 },
    { name: 'traffic', maxCount: 1 },
    { name: 'projectBrochure', maxCount: 1 }
  ]),
  handleFileUploadErrors,
  async (req, res) => {
    try {
      // Parse JSON fields
      const parsedData = {
        ...req.body,
        amenities: JSON.parse(req.body.amenities || '[]'),
        otherCharges: JSON.parse(req.body.otherCharges || '{}')
      };

      // Handle file paths
      const bankDetails = {};
      if (req.files) {
        Object.entries(req.files).forEach(([fieldName, files]) => {
          bankDetails[fieldName] = files[0]?.path || '';
        });
      }

      // Create project with parsed data
      const newProject = new Project({
        ...parsedData,
        bankDetails
      });

      await newProject.save();
      res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (err) {
      // Cleanup uploaded files on error
      if (req.files) {
        await Promise.all(
          Object.values(req.files).flat().map(file => 
            unlinkFile(file.path)
          )
        );
      }
      
      console.error('Full error:', {
        message: err.message,
        stack: err.stack,
        receivedData: req.body,
        files: req.files
      });

      res.status(500).json({ 
        error: 'Server error',
        details: err.message // Always send details temporarily
      });
    }
  }
);

module.exports = router;