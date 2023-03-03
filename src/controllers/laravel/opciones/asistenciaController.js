const database= require('../../../database/database');

const getAsistenciaAll  = async(req,res)=>{
    const connection = await database.getConnection();
    //const {email} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.id,
                                                b.cod_asistencia_habilitado,
                                                b.num_solicitud,
                                                c.email,
                                                d.cod_oseccion,
                                                d.cod_seccion,
                                                e.cod_ocurso,
                                                f.cod_curso,
                                                f.descripcion 'descripcion_curso',
                                                g.cod_op,
                                                g.descripcion 'descripcion_op',
                                                h.cod_facultad,
                                                h.descripcion 'descripcion_facultad',
                                                i.cod_op_semana,
                                                i.num_semana
                                            FROM
                                                asistencia a,
                                                asistencia_habilitado b,
                                                usuario_seccion c,
                                                oseccion d,
                                                ocurso e,
                                                curso f,
                                                orden_pedido g,
                                                facultad h,
                                                op_semana i
                                            WHERE
                                                a.cod_asistencia_habilitado = b.cod_asistencia_habilitado AND
                                                a.email = c.email AND
                                                b.cod_oseccion = c.cod_oseccion AND
                                                c.cod_oseccion = d.cod_oseccion AND
                                                d.cod_ocurso = e.cod_ocurso AND
                                                e.cod_curso = f.cod_curso AND
                                                e.cod_op = g.cod_op AND
                                                g.cod_facultad = h.cod_facultad AND
                                                g.cod_op = i.cod_op AND
                                                b.cod_op_semana = i.cod_op_semana`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};

const getAsistencia  = async(req,res)=>{
    const connection = await database.getConnection();
    const {id} = req.params;
    const response = await connection.query(
                                            `SELECT
                                                a.id,
                                                b.cod_asistencia_habilitado,
                                                b.num_solicitud,
                                                c.email,
                                                d.cod_oseccion,
                                                d.cod_seccion,
                                                e.cod_ocurso,
                                                f.cod_curso,
                                                f.descripcion 'descripcion_curso',
                                                g.cod_op,
                                                g.descripcion 'descripcion_op',
                                                h.cod_facultad,
                                                h.descripcion 'descripcion_facultad',
                                                i.cod_op_semana,
                                                i.num_semana
                                            FROM
                                                asistencia a,
                                                asistencia_habilitado b,
                                                usuario_seccion c,
                                                oseccion d,
                                                ocurso e,
                                                curso f,
                                                orden_pedido g,
                                                facultad h,
                                                op_semana i
                                            WHERE
                                                a.cod_asistencia_habilitado = b.cod_asistencia_habilitado AND
                                                a.email = c.email AND
                                                b.cod_oseccion = c.cod_oseccion AND
                                                c.cod_oseccion = d.cod_oseccion AND
                                                d.cod_ocurso = e.cod_ocurso AND
                                                e.cod_curso = f.cod_curso AND
                                                e.cod_op = g.cod_op AND
                                                g.cod_facultad = h.cod_facultad AND
                                                g.cod_op = i.cod_op AND
                                                b.cod_op_semana = i.cod_op_semana AND
                                                a.id=${id}`
                                            );
    //let result = Object.values(JSON.parse(JSON.stringify(response)));
    //console.log(result);
    res.json(response);
};
const postAsistencia  = async(req,res)=>{
    const connection = await database.getConnection();
    const {email,cod_oseccion,cod_asistencia_habilitado,distancia} = req.body;
    const response = await connection.query(
                                            `INSERT INTO
                                                asistencia (email,cod_oseccion,cod_asistencia_habilitado,distancia)
                                            VALUES ('${email}',${cod_oseccion},${cod_asistencia_habilitado},'${distancia}')`
                                            );
    res.json(response);
};
const putAsistencia = async(req,res)=>{
    const connection = await database.getConnection();
    const {id} = req.params;
    const {distancia} = req.body;
    try{
        const response = await connection.query(
                                            `UPDATE
                                                asistencia
                                            SET
                                                distancia='${distancia}'
                                            WHERE
                                                id=${id}`
                                            );
        //const users = response.json();
        //res.json({'response':[{'response':'Cerrado con éxito'}]});
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};
const deleteAsistencia  = async(req,res)=>{
    const connection = await database.getConnection();
    const {id} = req.params;
    try{
        const response = await connection.query(
                                            `DELETE FROM
                                                asistencia
                                            WHERE
                                                id = ${id}`
                                            );
        //console.log(response);
        res.json(response);
    }catch(_){
        //console.log(_);
        res.json(_);
    }
};

const methods = {
    getAsistenciaAll,
    getAsistencia,
    postAsistencia,
    putAsistencia,
    deleteAsistencia
};

module.exports = methods;