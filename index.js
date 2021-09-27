// servidor backend de nodo
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');
const userApi = require('./api/userApi');
const DBHelper = require('./utils/DBHelper');

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: false
}));


// Add headers before the routes are defined
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// enrutamiento api back-end
app.use('/api/user', userApi);


// empieza a escuchar
server.listen(8888, () => {
    console.log(' success!! port:8888');
})
