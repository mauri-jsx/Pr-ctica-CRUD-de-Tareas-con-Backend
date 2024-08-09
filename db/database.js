import mysql from 'mysql2/promise';

const getconexion = () => {
    try {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tasks_db'
        });
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
    }

}

export { getconexion }
