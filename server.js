const http = require('node:http');


function handle() {
    console.log('Knocked on the door!');
}

http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'aplication/json'});
    response.end(JSON.stringify({
        name: 'alek',
        email: 'alek@gmail.com'
    }));
}).listen(3000);