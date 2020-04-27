const express = require('express');
const morgan = require('morgan');
//inicializar
const app express();
//configuraciones
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(morgan('dev'));
//Global Variables

//routes

//public

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
});