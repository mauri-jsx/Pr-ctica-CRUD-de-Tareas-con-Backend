const myqsl = require('mysql2');

const conexion = () => {
    return myqsl.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tasks_db'
    })
}

module.exports = conexion