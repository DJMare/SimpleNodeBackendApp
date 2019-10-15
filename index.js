// 1 The Node module, HTTP is being imported. This is to allow the developer access to the HTTP server and client portion of the Node library
const http = require('http');

// 2 The variables hostname and port are established. This is how to identify the specific location that the user will send the request from the server may respond.
const hostname = 'localhost';
const port = 3000;

// 3 The variable server is used to create a new instance of HTTP.Server and provide instructions, so our program knows how to react to the user's request. Specifically, when the user makes a request, the server will respond with a status code of 200 ('The request succeeded with no problems), a message in the form of plain text, and the message 'Node development is so fetch!'.
const server = http.createServer((_request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Node development is so fetch!\n');
});

// 4 The instance of Node is now open and listening on the port and hostname specified by the variables previously established. Any time a user goes to the URL http://localhost:3000 on a machine running this server, it will respond with a message of 'Node development is so fetch!'.
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
