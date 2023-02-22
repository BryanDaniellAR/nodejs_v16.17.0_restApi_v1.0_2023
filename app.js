const express = require ('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');//recibir en consola
const {url}=require('./helpers/ngrok');
//settings
app.set('port',process.env.PORT || 3000);//en caso haya un puerto definido por la nube que lo tome sino usar 3000
app.set('json spaces',2);//Ordenar el json con spacios

//todo el mundo
app.use(cors());

//middlewares
app.use(morgan('dev')); //mensaje de servidor mas reducido
//app.use(morgan('combined')) //mensaje de servidor mas completo
app.use(express.urlencoded({extended:false}));//mensajes de formularios sencillos input
app.use(express.json());//para entender mensajes json

//routes
app.use(require('./src/routes/index'));
app.use(require('./src/routes/usuario'));
app.use(require('./src/routes/perfil'));
app.use(require('./src/routes/clases'));
app.use(require('./src/routes/asistencia'));
app.use(require('./src/routes/laravel'));
//starting the server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});

//url();