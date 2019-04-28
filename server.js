const http = require('http');
const app =require('./app');
const PORT = 3000;
//create web server

http
.createServer(app)
.listen(
    PORT,
    ()=> console.info(`node app running at localhost ${PORT}`)

)