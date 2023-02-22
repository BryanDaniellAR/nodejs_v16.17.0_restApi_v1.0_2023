const mysql = require('promise-mysql');
const config= require('../../config');

const connection = mysql.createConnection({
    host: config.parsed.HOST,
    database:config.parsed.DATABASE,
    user: config.parsed.USER,
    password:config.parsed.PASSWORD
});
const getConnection = config.getConnection = ()=>{
    return connection;
};
const database = {
    getConnection
};

module.exports = database;