const router = require('express').Router();
const {
    getAllTasks,
    getTaskById,
    createTask

} = require('../controllers/tasks.controllers');

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/tasks', createTask);


module.exports = router;
