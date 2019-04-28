const express =require ('express');
const bodyParser = require('body-parser');
const app = express();

//** server default middleweares
 
app.use (bodyParser.json({}))

app.use (bodyParser.urlencoded({}));

// controlers

require('./controlers')(app);
module.exports = app;
