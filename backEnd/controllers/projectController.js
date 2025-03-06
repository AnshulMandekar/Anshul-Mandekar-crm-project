const Project = require('../models/projectModel');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const projectId = req.params.id || 'new';
    const uploadDir = path.join(__dirname, '..', 'uploads', 'projects', projectId);
    
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['.pdf', '.doc', '.docx', '.jpg', '.jpeg', '.png'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedFileTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, DOCX, JPG, JPEG, PNG files are allowed.'));
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 1024 * 1024 }, // 1MB file size limit
  fileFilter: fileFilter
}).fields([
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
]);

// Helper function to process file uploads
const processUploadedFiles = (files) => {
  const documents = {};
  
  if (files) {
    Object.keys(files).forEach(fieldName => {
      const file = files[fieldName][0];
      documents[fieldName] = {
        path: `/uploads/projects/${file.filename}`,
        originalName: file.originalname,
        required: ['projectBrochure'].includes(fieldName) ? false : true
      };
    });
  }
  
  return documents;
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: projects.length, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single project
exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new project
exports.createProject = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ success: false, error: `Multer error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
      
      // Process project data
      const projectData = {
        typeOfProject: req.body.typeOfProject,
        areaOfLand: req.body.areaOfLand,
        geoTag: req.body.geoTag,
        typeOfUnits: req.body.typeOfUnits,
        address: req.body.address,
        numberOfBuildings: parseInt(req.body.numberOfBuildings),
        numberOfPhases: parseInt(req.body.numberOfPhases),
        typeOfBuilding: req.body.typeOfBuilding,
        flatsPerFloor: parseInt(req.body.flatsPerFloor),
        paymentSchedule: req.body.paymentSchedule,
        demandLetter: req.body.demandLetter,
        currentASRRate: parseFloat(req.body.currentASRRate) || 0,
        RERANumber: req.body.RERANumber,
        amenities: req.body.amenities ? JSON.parse(req.body.amenities) : [],
        otherCharges: req.body.otherCharges ? JSON.parse(req.body.otherCharges) : {
          parking: 0,
          societyFormation: 0,
          developmentCharge: 0,
          legalCharge: 0,
          maintenancePerSqFt: 0,
          infrastructureCharge: 0
        },
        bankDetails: req.body.bankDetails ? JSON.parse(req.body.bankDetails) : {}
      };
      
      // Process uploaded documents
      if (req.files) {
        projectData.documents = processUploadedFiles(req.files);
      }
      
      // Create new project
      const project = await Project.create(projectData);
      
      res.status(201).json({
        success: true,
        data: project
      });
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update project
exports.updateProject = async (req, res) => {
  try {
    upload(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ success: false, error: `Multer error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ success: false, error: err.message });
      }
      
      // Get existing project
      let project = await Project.findById(req.params.id);
      
      if (!project) {
        return res.status(404).json({ success: false, error: 'Project not found' });
      }
      
      // Update basic fields
      const updates = {
        typeOfProject: req.body.typeOfProject || project.typeOfProject,
        areaOfLand: req.body.areaOfLand || project.areaOfLand,
        geoTag: req.body.geoTag || project.geoTag,
        typeOfUnits: req.body.typeOfUnits || project.typeOfUnits,
        address: req.body.address || project.address,
        numberOfBuildings: parseInt(req.body.numberOfBuildings) || project.numberOfBuildings,
        numberOfPhases: parseInt(req.body.numberOfPhases) || project.numberOfPhases,
        typeOfBuilding: req.body.typeOfBuilding || project.typeOfBuilding,
        flatsPerFloor: parseInt(req.body.flatsPerFloor) || project.flatsPerFloor,
        paymentSchedule: req.body.paymentSchedule || project.paymentSchedule,
        demandLetter: req.body.demandLetter || project.demandLetter,
        currentASRRate: parseFloat(req.body.currentASRRate) || project.currentASRRate,
        RERANumber: req.body.RERANumber || project.RERANumber,
        amenities: req.body.amenities ? JSON.parse(req.body.amenities) : project.amenities,
        otherCharges: req.body.otherCharges ? JSON.parse(req.body.otherCharges) : project.otherCharges,
        bankDetails: req.body.bankDetails ? JSON.parse(req.body.bankDetails) : project.bankDetails,
        updatedAt: Date.now()
      };
      
      // Process uploaded documents
      if (req.files && Object.keys(req.files).length > 0) {
        const uploadedDocuments = processUploadedFiles(req.files);
        updates.documents = { ...project.documents, ...uploadedDocuments };
      }
      
      // Update project
      project = await Project.findByIdAndUpdate(req.params.id, updates, {
        new: true,
        runValidators: true
      });
      
      res.status(200).json({
        success: true,
        data: project
      });
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }
    
    // Delete project files
    const projectDir = path.join(__dirname, '..', 'uploads', 'projects', req.params.id);
    if (fs.existsSync(projectDir)) {
      fs.rmdirSync(projectDir, { recursive: true });
    }
    
    // Delete project from database
    await project.remove();
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};