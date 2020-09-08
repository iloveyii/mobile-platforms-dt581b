const mysql = require('mysql');

let db = null;
try {
    db = mysql.createConnection({
        host: 'localhost',
        database: 'lab1',
        user: 'root',
        password: 'root'
    });

    db.connect({}, error => {
        if (error) {
            throw error;
        }

        console.log('MySql connected');
        insertIntoMysql();
    });
} catch (e) {
    console.log('Error in db');
    db.end();
}

const insertIntoMysql = () => {
    const rows = [
        ['unit 01', 1],
        ['unit 02', -2],
        ['unit 03', 3],
        ['unit 04', 2]
    ];
    db.query('DELETE from units WHERE id > 0', (error, result) => {
        console.log('DELETED ' + result.affectedRows);
    })
    db.query('insert into units(unit_id, temperature)  VALUES ?', [rows], function (error, result) {
        if(error) throw error;
        console.log("Number of records inserted: " + result.affectedRows);
    })
}


module.exports = db;
