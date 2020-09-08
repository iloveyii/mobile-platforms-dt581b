const http = require('http');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const db = mysql.createConnection({
    host: 'localhost',
    database: 'lab1',
    user: 'root',
    password: 'root'
});

db.connect(error => {
    if (error) {
        throw error;
    }

    console.log('MySql connected')
});

const port = 7000;
const hostname = 'localhost';

const readFile = (fileName) => {
    const data = fs.readFileSync(path.resolve(__dirname, fileName));
    return data;
}

const handleRequest = (request, response) => {
    response.status = 200;
    response.setHeader('Content-Type', 'text/html');
    const content = readFile('index.html');
    response.end(content);
};

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`http server is listing on http://${hostname}:${port}`)
});

