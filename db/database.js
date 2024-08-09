import mysql from 'mysql2';

const getconexion = () => {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tasks_db'
        });
}

export { getconexion }
