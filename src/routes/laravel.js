const {Router} = require('express');
const router = Router();
const methods = require('../controllers/laravel/parametros');

router.get('/laravel/tipocicloall',methods.getTipoCicloAll);
router.get('/laravel/tipociclo/:cod_tipo_ciclo',methods.getTipoCiclo);
router.post('/laravel/tipociclo',methods.postTipoCiclo);
router.put('/laravel/tipociclo/:cod_tipo_ciclo',methods.putTipoCiclo);
router.delete('/laravel/tipociclo/:cod_tipo_ciclo',methods.deleteTipoCiclo);
router.get('/laravel/facultadall',methods.getFacultadAll);
router.get('/laravel/facultad/:cod_facultad',methods.getFacultad);
router.post('/laravel/facultad',methods.postFacultad);
router.put('/laravel/facultad/:cod_facultad',methods.putFacultad);
router.delete('/laravel/facultad/:cod_facultad',methods.deleteFacultad);
router.get('/laravel/cursoall',methods.getCursoAll);
router.get('/laravel/curso/:cod_curso',methods.getCurso);
router.post('/laravel/curso',methods.postCurso);
router.put('/laravel/curso/:cod_curso',methods.putCurso);
router.delete('/laravel/curso/:cod_curso',methods.deleteCurso);
router.get('/laravel/seccionall',methods.getSeccionAll);
router.get('/laravel/seccion/:cod_seccion',methods.getSeccion);
router.post('/laravel/seccion',methods.postSeccion);
router.put('/laravel/seccion/:cod_seccion',methods.putSeccion);
router.delete('/laravel/seccion/:cod_seccion',methods.deleteSeccion);
router.get('/laravel/aulaall',methods.getAulaAll);
router.get('/laravel/aula/:cod_aula',methods.getAula);
router.post('/laravel/aula',methods.postAula);
router.put('/laravel/aula/:cod_aula',methods.putAula);
router.delete('/laravel/aula/:cod_aula',methods.deleteAula);

module.exports = router;