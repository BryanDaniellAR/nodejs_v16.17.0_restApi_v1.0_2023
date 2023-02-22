const {Router} = require('express');
const router = Router();
const methods = require('../controllers/usuarioController');


router.get('/usuario/all',methods.getAllUsuario);
router.get('/usuario/:email',methods.getUsuario);
//router.put('/usuario/:email',methods.putUsuario);
module.exports = router;