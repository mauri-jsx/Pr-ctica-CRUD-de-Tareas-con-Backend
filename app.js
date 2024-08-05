const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//servidor 
app.listen(app.get('port'), () => {
    console.log(`Servidor Andando en el puerto ${app.get('port')}`);
})