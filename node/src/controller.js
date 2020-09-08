const db = require('./mysql');
const {readFile, getTable} = require('./helper');


const handleRequest = (request, response) => {
    response.status = 200;
    response.setHeader('Content-Type', 'text/html');
    if (db) {
        db.query('select * from units', (error, result, fields) => {
            if (error) throw error;
            const header = readFile('header.html');
            const data = getTable(result);
            const footer = readFile('footer.html');
            response.end(header + data + footer);
        });
    } else {
        response.end('DB not connected');
    }
};

module.exports = handleRequest;
