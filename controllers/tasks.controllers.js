import { getconexion } from '../db/database.js';

export const getAllTasks = async (req, res) => {
    try {
        const conexion = await getconexion();
        const [results] = await conexion.query('SELECT * FROM tasks');
        res.json(results);
        await conexion.end();
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        res.status(500).send('Error al obtener las tareas');
    }
};

export const getTaskById = async (req, res) => {
    try {
        const conexion = await getconexion();
        const { id } = req.params;
        const [results] = await conexion.query('SELECT * FROM tasks WHERE id = ?', [id]);
        if (results.length === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.json(results[0]);
        await conexion.end();
    } catch (error) {
        console.error('Error al obtener la tarea:', error);
        res.status(500).send('Error al obtener la tarea');
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;

        if (!title || title.length > 255 || !description || typeof isComplete !== 'boolean') {
            return res.status(400).send('Datos inválidos');
        }

        const conexion = await getconexion();
        const task = { title, description, isComplete };
        await conexion.query('INSERT INTO tasks SET ?', task);
        res.status(201).send('Tarea creada');
        await conexion.end();
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(500).send('Error al crear la tarea');
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, isComplete } = req.body;

        if (!title || title.length > 255 || !description || typeof isComplete !== 'boolean') {
            return res.status(400).send('Datos inválidos');
        }

        const conexion = await getconexion();
        const task = { title, description, isComplete };
        const [results] = await conexion.query('UPDATE tasks SET ? WHERE id = ?', [task, id]);
        if (results.affectedRows === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.send('Tarea actualizada');
        await conexion.end();
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        res.status(500).send('Error al actualizar la tarea');
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        const conexion = await getconexion();
        const [results] = await conexion.query('DELETE FROM tasks WHERE id = ?', [id]);
        if (results.affectedRows === 0) {
            return res.status(404).send('Tarea no encontrada');
        }
        res.send('Tarea eliminada');
        await conexion.end();
    } catch (error) {
        console.error('Error al eliminar la tarea:', error);
        res.status(500).send('Error al eliminar la tarea');
    }
};
