'use strict';

const express = require('express');
const TaskController = require('../controllers/task');

var router = express.Router();

router.post('/create',TaskController.createNewTask);
router.post('/:taskId', TaskController.getTaskDetails);
router.post('/update', TaskController.updateTask);
router.post('/addAssignees', TaskController.addAssignees);
router.post('/delete', TaskController.deleteTask);
module.exports = router;
