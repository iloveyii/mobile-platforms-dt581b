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

const port = 7000;
const hostname = 'localhost';

const handleRequest = (request, response) => {
    response.status = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello world');
};

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`http server is listing on http://${hostname}:${port}`)
});

