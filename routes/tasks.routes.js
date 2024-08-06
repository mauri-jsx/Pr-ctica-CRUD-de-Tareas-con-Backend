const router = require('express').Router();
const {
    getAllTasks,
    getTaskById,

} = require('../controllers/tasks.controllers');

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);


module.exports = router;
