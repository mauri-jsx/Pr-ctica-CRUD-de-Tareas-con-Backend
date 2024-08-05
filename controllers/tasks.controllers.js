const getConnection = require('../db/database');

const getAllTasks = async (req, res) => {
    const conexion = getConnection();
    
    conexion.connect((err) => {
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

module.exports = { getAllTasks };
