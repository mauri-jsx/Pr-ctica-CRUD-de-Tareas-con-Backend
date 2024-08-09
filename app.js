import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/tasks.routes.js';

const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(cors()); 
app.use(express.json()); 
app.use(router); 

// Iniciar el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
