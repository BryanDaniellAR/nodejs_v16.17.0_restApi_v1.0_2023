const database= require('../../../database/database');

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

const methods = {
    getCursoAll,
    getCurso,
    postCurso,
    putCurso,
    deleteCurso
};

module.exports = methods;