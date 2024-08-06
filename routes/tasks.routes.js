const router = require('express').Router();
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask

} = require('../controllers/tasks.controllers');

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


module.exports = router;
