import mysql from 'mysql2/promise';

const getconexion = async () => {
    try {
        const conexion = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'tasks_db'
        });
        console.log("Conexión a la base de datos exitosa");
        return conexion;
    } catch (error) {
        console.error("Error al conectarse a la base de datos:", error);
        throw error;
    }
};

export { getconexion };
