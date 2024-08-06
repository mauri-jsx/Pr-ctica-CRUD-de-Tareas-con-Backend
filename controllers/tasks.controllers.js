const getConnection = require('../db/database');

const getAllTasks = (req, res) => {
    const conexion = getConnection();
    conexion.connect(err => {
        if (err) {
            console.error('Error conectando a la base de datos:', err);
            return res.status(500).send('Error conectando a la base de datos');
        }

        conexion.query('SELECT * FROM tasks', (err, results) => {
            if (err) {
                console.error('Error al obtener las tareas:', err);
                return res.status(500).send('Error al obtener las tareas');
            }
            res.json(results);
            conexion.end();
        });
    });
};

const getTaskById = (req, res) => {
    const conexion = getConnection();
    const { id } = req.params;
    conexion.connect(err => {
        if (err) {
            console.error('Error conectando a la base de datos:', err);
            return res.status(500).send('Error conectando a la base de datos');
        }

        conexion.query('SELECT * FROM tasks WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Error al obtener la tarea:', err);
                return res.status(500).send('Error al obtener la tarea');
            }
            if (results.length === 0) {
                return res.status(404).send('Tarea no encontrada');
            }
            res.json(results[0]);
            conexion.end();
        });
    });
};

const createTask = (req, res) => {
    const { title, description, isComplete } = req.body;
    
    if (!title || title.length > 255 || !description || typeof isComplete !== 'boolean') {
        return res.status(400).send('Datos inválidos');
    }

    const conexion = getConnection();
    conexion.connect(err => {
        if (err) {
            console.error('Error conectando a la base de datos:', err);
            return res.status(500).send('Error conectando a la base de datos');
        }

        const task = { title, description, isComplete };
        conexion.query('INSERT INTO tasks SET ?', task, (err, results) => {
            if (err) {
                console.error('Error al crear la tarea:', err);
                return res.status(500).send('Error al crear la tarea');
            }
            res.status(201).send('Tarea creada');
            conexion.end();
        });
    });
};


const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, isComplete } = req.body;
    
    if (!title || title.length > 255 || !description || typeof isComplete !== 'boolean') {
        return res.status(400).send('Datos inválidos');
    }

    const conexion = getConnection();
    conexion.connect(err => {
        if (err) {
            console.error('Error conectando a la base de datos:', err);
            return res.status(500).send('Error conectando a la base de datos');
        }

        const task = { title, description, isComplete };
        conexion.query('UPDATE tasks SET ? WHERE id = ?', [task, id], (err, results) => {
            if (err) {
                console.error('Error al actualizar la tarea:', err);
                return res.status(500).send('Error al actualizar la tarea');
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Tarea no encontrada');
            }
            res.send('Tarea actualizada');
            conexion.end();
        });
    });
};

const deleteTask = (req, res) => {
    const { id } = req.params;

    const conexion = getConnection();
    conexion.connect(err => {
        if (err) {
            console.error('Error conectando a la base de datos:', err);
            return res.status(500).send('Error conectando a la base de datos');
        }

        conexion.query('DELETE FROM tasks WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('Error al eliminar la tarea:', err);
                return res.status(500).send('Error al eliminar la tarea');
            }
            if (results.affectedRows === 0) {
                return res.status(404).send('Tarea no encontrada');
            }
            res.send('Tarea eliminada');
            conexion.end();
        });
    });
};



module.exports = { 
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
 };
