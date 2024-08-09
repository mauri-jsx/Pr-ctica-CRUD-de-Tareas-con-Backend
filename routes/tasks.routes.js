import { Router } from 'express';

const router = Router();

import { getAllTasks, 
         getTaskById, 
         createTask, 
         updateTask, 
         deleteTask } from '../controllers/tasks.controllers.js';

router.get('/tasks', getAllTasks);
router.get('/task/:id', getTaskById);
router.post('/tasks', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);


export default  router 