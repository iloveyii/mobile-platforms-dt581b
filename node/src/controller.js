const db = require('./mysql');
const {readFile, getTable} = require('./helper');


const handleRequest = (request, response) => {
    console.log('JSON');

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', 'http://localhost:8080');
    response.status = 200;
    response.setHeader('Content-Type', 'application/json');

    if (db) {
        db.query('select * from units', (error, result, fields) => {
            if (error) throw error;
            const header = readFile('header.html');
            const data = getTable(result);
            const footer = readFile('footer.html');
            // response.end(header + data + footer);
            console.log(result)
            response.end(JSON.stringify(result));
        });
    } else {
        response.end('DB not connected');
    }
};

module.exports = handleRequest;
