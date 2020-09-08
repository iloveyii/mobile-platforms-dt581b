const http = require('http');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'lab1',
    user: 'root',
    password: 'root'
});

db.connect(error => {
    if(error) {
        throw error;
    }

    console.log('MySql connected')
});


