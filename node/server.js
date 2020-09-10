const http = require('http');
const handleRequest = require('./src/controller');


const port = 7000;
const hostname = 'localhost';

http.createServer(handleRequest).listen(port, hostname, () => {
    console.log(`http server is listening on http://${hostname}:${port}`)
});

