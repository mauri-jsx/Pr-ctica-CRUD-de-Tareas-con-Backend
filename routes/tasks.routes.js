const router = require('express').Router();
const { getAllTasks } = require('../controllers/tasks.controllers');


router.get("/tasks", getAllTasks);
module.exports = router