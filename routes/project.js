'use strict';

const express = require('express');
const ProjectController = require('../controllers/project');

var router = express.Router();

router.post('/all', ProjectController.listAllProjects);
router.post('/create',ProjectController.createNewProject);
router.post('/:projectId', ProjectController.getProjectDetails);
router.post('/update', ProjectController.updateProject);
router.post('/delete',ProjectController.deleteProject);


module.exports = router;
