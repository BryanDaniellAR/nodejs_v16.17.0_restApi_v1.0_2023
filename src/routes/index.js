const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    const data = {//Lo normal sera consultar aca de la BD guardarlo en json y luego responder con ello al aplicativo
        "name":"Aplicación de asistencia por GPS",
        "website":"https://www.linkedin.com/in/bryan-daniell-arrivasplata-rojas-156508213/"
    };
    res.json(data);
});
module.exports = router;