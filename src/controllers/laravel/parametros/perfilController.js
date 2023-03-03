const database= require('../../../database/database');

const getPerfilAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.codigo,
                                                a.primer_nombre,
                                                a.segundo_nombre,
                                                a.tercer_nombre,
                                                a.apellido_paterno,
                                                a.apellido_materno,
                                                c.tipo,
                                                c.descripcion,
                                                a.email
                                            FROM
                                                perfil a,
                                                usuario b,
                                                tipo c
                                            WHERE
                                                a.email = b.email AND
                                                a.tipo = c.tipo`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(response);
    res.json(response);
};
const getPerfilDocente  = async(req,res)=>{
    const connection = await database.getConnection();
    const response = await connection.query(
                                            `SELECT
                                                a.codigo,
                                                a.primer_nombre,
                                                a.segundo_nombre,
                                                a.tercer_nombre,
                                                a.apellido_paterno,
                                                a.apellido_materno,
                                                c.tipo,
                                                c.descripcion,
                                                a.email
                                            FROM
                                                perfil a,
                                                usuario b,
                                                tipo c
                                            WHERE
                                                a.email = b.email AND
                                                a.tipo = c.tipo AND
                                                a.tipo = 2`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getPerfilAlumno  = async(req,res)=>{
    const connection = await database.getConnection();
    const response = await connection.query(
                                            `SELECT
                                                a.codigo,
                                                a.primer_nombre,
                                                a.segundo_nombre,
                                                a.tercer_nombre,
                                                a.apellido_paterno,
                                                a.apellido_materno,
                                                c.tipo,
                                                c.descripcion,
                                                a.email
                                            FROM
                                                perfil a,
                                                usuario b,
                                                tipo c
                                            WHERE
                                                a.email = b.email AND
                                                a.tipo = c.tipo AND
                                                a.tipo = 1`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const getPerfil  = async(req,res)=>{
    const connection = await database.getConnection();
    const {codigo} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.codigo,
                                                a.primer_nombre,
                                                a.segundo_nombre,
                                                a.tercer_nombre,
                                                a.apellido_paterno,
                                                a.apellido_materno,
                                                c.tipo,
                                                c.descripcion,
                                                a.email
                                            FROM
                                                perfil a,
                                                usuario b,
                                                tipo c
                                            WHERE
                                                a.email = b.email AND
                                                a.tipo = c.tipo AND
                                                a.codigo='${codigo}'`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postPerfil  = async(req,res)=>{
    const connection = await database.getConnection();
    console.log(req.body);
    const {codigo,primer_nombre,segundo_nombre,tercer_nombre,apellido_paterno,apellido_materno,tipo,email} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                perfil (codigo,primer_nombre,segundo_nombre,tercer_nombre,apellido_paterno,apellido_materno,tipo,email)
                                            VALUES ('${codigo}','${primer_nombre}','${segundo_nombre}','${tercer_nombre}','${apellido_paterno}','${apellido_materno}','${tipo}','${email}')`
                                            );
    res.json(response);
};
const putPerfil = async(req,res)=>{
    const connection = await database.getConnection();
    const {codigo} = req.params;
    const {primer_nombre,segundo_nombre,tercer_nombre,apellido_paterno,apellido_materno,tipo,email} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                perfil
                                            SET
                                                primer_nombre = '${primer_nombre}',
                                                segundo_nombre = '${segundo_nombre}',
                                                tercer_nombre = '${tercer_nombre}',
                                                apellido_paterno = '${apellido_paterno}',
                                                apellido_materno = '${apellido_materno}',
                                                tipo = '${tipo}',
                                                email = '${email}'
                                            WHERE
                                                codigo='${codigo}'`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deletePerfil  = async(req,res)=>{
    const connection = await database.getConnection();
    const {codigo} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                perfil
                                            WHERE
                                                codigo = '${codigo}'`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};

const methods = {
    getPerfilAll,
    getPerfilDocente,
    getPerfilAlumno,
    getPerfil,
    postPerfil,
    putPerfil,
    deletePerfil
};

module.exports = methods;