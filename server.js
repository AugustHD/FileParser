const txt = require('txt');
const app = require('./stuff');

const server = http.createServer(app);

server.listen(process.env.PORT || 8080);