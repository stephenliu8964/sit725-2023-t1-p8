var express = require('express');
var app = express();
var port = process.env.port || 3000;
require('./dbConnection');
let router = require('./route/route');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/projects', router);

app.listen(port, () => {
    console.log('App listening to: ' + port);
});
