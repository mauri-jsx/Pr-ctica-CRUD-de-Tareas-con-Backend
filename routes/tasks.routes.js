import { Router } from 'express';

const router = Router();

import {
    createTask,
    deleteTask,
    getAllTasks,
    getTaskById,
    updateTask
} from '../controllers/tasks.controllers.js';
import { ApplyValidatons } from '../validations/ApplyValidatons.js';
import { taskValidation } from '../validations/validations.js';
import { deleteTaskValidation } from '../validations/validations.js';
import { updateTaskValidation } from '../validations/validations.js';
import { getTaskByIdValidation } from '../validations/validations.js';

router.get('/tasks', getAllTasks);
router.get('/task/:id',getTaskByIdValidation,ApplyValidatons, getTaskById);
router.post('/tasks',taskValidation,ApplyValidatons, createTask);
router.put('/task/:id',updateTaskValidation,ApplyValidatons, updateTask);
router.delete('/task/:id',deleteTaskValidation,ApplyValidatons, deleteTask);


export { router };
