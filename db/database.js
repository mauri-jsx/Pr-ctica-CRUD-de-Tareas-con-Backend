const mysql = require('mysql2');

const conexion = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tasks_db'
    });
};

module.exports = conexion;
