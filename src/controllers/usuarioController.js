const database= require('../database/database');
const mysql = require('promise-mysql');

const getAllUsuario  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    const response = await connection.query(`SELECT email,password,token from usuario`);
    //const users = response.json();
    res.json(response);
};
const getUsuario  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    const {email} = req.params;
    const response = await connection.query(`SELECT 
                                                a.email,
                                                a.password,
                                                a.token,
                                                b.tipo,
                                                CONCAT(
                                                    b.apellido_paterno,
                                                    ' ',
                                                    b.apellido_materno,
                                                    ', ',
                                                    b.primer_nombre,
                                                    CASE(b.segundo_nombre)
                                                        WHEN '' THEN ''
                                                        ELSE CONCAT(' ',b.segundo_nombre) END,CASE(b.tercer_nombre) WHEN '' THEN '' ELSE CONCAT(' ',b.tercer_nombre) 
                                                    END) 'nombre_completo',
                                                c.descripcion
                                            from
                                                usuario a,
                                                perfil b,
                                                tipo c
                                            where
                                                a.email = b.email and
                                                b.tipo = c.tipo and
                                                a.email = '${email}'`);
    //const response = {'data':response_}
    
    /*if (response.length >0){
        res.json({'response':response});
    }else{
        console.log(response.length);
        res.json({'response':[{'error':'Su email no existe, comunicar a soporte tecnico para solucionarlo'}]})
    }*/
    res.json(response);
};
const putUsuario  = async(req,res)=>{
    const connection = await mysql.createConnection(database);
    const {email} = req.params;
    const {password} = req.body;
    const response = await connection.query(`UPDATE usuario SET password='${password}' where email = '${email}'`);
    //const response_ = await connection.query(`SELECT email,password,token from usuario where email = '${email}'`);
    //const users = response.json();
    res.json(response);
};

const methods = {
    getAllUsuario,
    getUsuario,
    putUsuario
};

module.exports = methods;