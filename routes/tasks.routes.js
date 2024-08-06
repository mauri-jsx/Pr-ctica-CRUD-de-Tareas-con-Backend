const router = require('express').Router();
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask

} = require('../controllers/tasks.controllers');

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/task/:id', updateTask);


module.exports = router;
