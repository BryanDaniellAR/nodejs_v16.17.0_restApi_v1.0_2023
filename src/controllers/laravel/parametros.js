const database= require('../../database/database');

const getTipoCicloAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_tipo_ciclo,
                                                semanas
                                            FROM
                                                tipo_ciclo`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getTipoCiclo  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_tipo_ciclo} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_tipo_ciclo,
                                                semanas
                                            FROM
                                                tipo_ciclo
                                            WHERE
                                                cod_tipo_ciclo=${cod_tipo_ciclo}`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postTipoCiclo  = async(req,res)=>{
    const connection = await database.getConnection();
    const {semanas} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                tipo_ciclo (semanas)
                                            VALUES (${semanas})`
                                            );
    res.json(response);
};
const putTipoCiclo = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_tipo_ciclo} = req.params;
    const {semanas} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                tipo_ciclo
                                            SET
                                                semanas=${semanas}
                                            WHERE
                                                cod_tipo_ciclo='${cod_tipo_ciclo}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteTipoCiclo  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_tipo_ciclo} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                tipo_ciclo
                                            WHERE
                                                cod_tipo_ciclo = ${cod_tipo_ciclo}`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const getFacultadAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_facultad,
                                                descripcion,
                                                abreviatura
                                            FROM
                                                facultad`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getFacultad  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_facultad} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_facultad,
                                                descripcion,
                                                abreviatura
                                            FROM
                                                facultad
                                            WHERE
                                                cod_facultad=${cod_facultad}`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postFacultad  = async(req,res)=>{
    const connection = await database.getConnection();
    const {descripcion,abreviatura} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                facultad (descripcion,abreviatura)
                                            VALUES ('${descripcion}','${abreviatura}')`
                                            );
    res.json(response);
};
const putFacultad = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_facultad} = req.params;
    const {descripcion,abreviatura} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                facultad
                                            SET
                                                descripcion = '${descripcion}',
                                                abreviatura = '${abreviatura}'
                                            WHERE
                                                cod_facultad='${cod_facultad}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteFacultad  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_facultad} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                facultad
                                            WHERE
                                                cod_facultad = ${cod_facultad}`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const getCursoAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.cod_curso,
                                                b.descripcion 'facultad',
                                                a.descripcion
                                            FROM
                                                curso a,
                                                facultad b
                                            WHERE
                                                a.cod_facultad=b.cod_facultad`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getCurso  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_curso} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.cod_curso,
                                                b.descripcion 'facultad',
                                                a.descripcion
                                            FROM
                                                curso a,
                                                facultad b
                                            WHERE
                                                a.cod_facultad=b.cod_facultad AND
                                                a.cod_curso='${cod_curso}'`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postCurso  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_curso,descripcion,cod_facultad} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                curso (cod_curso,descripcion,cod_facultad)
                                            VALUES ('${cod_curso}','${descripcion}',${cod_facultad})`
                                            );
    res.json(response);
};
const putCurso = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_curso} = req.params;
    const {descripcion,cod_facultad} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                curso
                                            SET
                                                descripcion = '${descripcion}',
                                                cod_facultad = '${cod_facultad}'
                                            WHERE
                                                cod_curso='${cod_curso}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteCurso  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_curso} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                curso
                                            WHERE
                                                cod_curso = ${cod_curso}`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const getSeccionAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_seccion,
                                                descripcion
                                            FROM
                                                seccion`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getSeccion  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_seccion} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_seccion,
                                                descripcion
                                            FROM
                                                seccion
                                            WHERE
                                                cod_seccion='${cod_seccion}'`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postSeccion  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_seccion,descripcion} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                seccion (cod_seccion,descripcion)
                                            VALUES ('${cod_seccion}','${descripcion}')`
                                            );
    res.json(response);
};
const putSeccion = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_seccion} = req.params;
    const {descripcion} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                seccion
                                            SET
                                                descripcion = '${descripcion}'
                                            WHERE
                                                cod_seccion='${cod_seccion}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteSeccion  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_seccion} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                seccion
                                            WHERE
                                                cod_seccion = '${cod_seccion}'`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const getAulaAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_aula,
                                                latitud,
                                                longitud,
                                                referencia
                                            FROM
                                                aula`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(response);
    res.json(response);
};
const getAula  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_aula} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                cod_aula,
                                                latitud,
                                                longitud,
                                                referencia
                                            FROM
                                                aula
                                            WHERE
                                                cod_aula='${cod_aula}'`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postAula  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_aula,latitud,longitud,referencia} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                aula (cod_aula,latitud,longitud,referencia)
                                            VALUES ('${cod_aula}','${latitud}','${longitud}','${referencia}')`
                                            );
    res.json(response);
};
const putAula = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_aula} = req.params;
    const {latitud,longitud,referencia} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                aula
                                            SET
                                                latitud = '${latitud}',
                                                longitud = '${longitud}',
                                                referencia = '${referencia}'
                                            WHERE
                                                cod_aula='${cod_aula}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteAula  = async(req,res)=>{
    const connection = await database.getConnection();
    const {cod_aula} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                aula
                                            WHERE
                                                cod_aula = '${cod_aula}'`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const methods = {
    getTipoCicloAll,
    getTipoCiclo,
    postTipoCiclo,
    putTipoCiclo,
    deleteTipoCiclo,
    getFacultadAll,
    getFacultad,
    postFacultad,
    putFacultad,
    deleteFacultad,
    getCursoAll,
    getCurso,
    postCurso,
    putCurso,
    deleteCurso,
    getSeccionAll,
    getSeccion,
    postSeccion,
    putSeccion,
    deleteSeccion,
    getAulaAll,
    getAula,
    postAula,
    putAula,
    deleteAula
};

module.exports = methods;