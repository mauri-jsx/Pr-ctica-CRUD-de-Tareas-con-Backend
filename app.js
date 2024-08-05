const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/tasks.routes');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

//servidor 
app.listen(app.get('port'), () => {
    console.log(`Servidor Andando en el puerto ${app.get('port')}`);
})