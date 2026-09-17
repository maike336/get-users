const http = require('node:http');


http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(JSON.stringify({
        name: 'alek',
        email: 'alek@gmail.com'
    }));
}).listen(3000);