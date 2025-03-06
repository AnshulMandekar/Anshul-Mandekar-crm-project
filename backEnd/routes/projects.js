const express = require('express');
const router = express.Router();
const { 
  getAllProjects, 
  getProject, 
  createProject, 
  updateProject, 
  deleteProject 
} = require('../controllers/projectController');

// Project routes
router.route('/')
  .get(getAllProjects)
  .post(createProject);

router.route('/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

router.route('/create')
  .post(createProject);

module.exports = router;