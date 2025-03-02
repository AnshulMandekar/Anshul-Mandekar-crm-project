const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');

// Apply auth middleware to all project routes
router.use(authMiddleware);

// Get all projects for a user
router.get('/', projectController.getProjects);

// Create a new project
router.post('/', projectController.createProject);

// Get a specific project
router.get('/:projectId', projectController.getProject);

// Update a project
router.put('/:projectId', projectController.updateProject);

// Delete a project
router.delete('/:projectId', projectController.deleteProject);

module.exports = router;