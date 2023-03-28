var express = require('express');
var app = express();
const { MongoClient } = require('mongodb');
let projectCollection;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


const uri = 'mongodb+srv://stephenliu:admin@cluster0.alo8s41.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true});

function createCollection(collectionName) {
    client.connect(err => {
        projectCollection = client.db('test').collection(collectionName);
        if (!err) {
            console.log('Mongo DB connected');
        } else {
            console.log('Error: ', err);
            process.exit(1);
        }
    });
}

const insertProjects = (project, callback) => {
    projectCollection.insertOne(project, callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

app.post('/api/projects', (req, res) => {
    let newProject = req.body;
    insertProjects(newProject, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'project successfully added'});
        }
    });
});

app.get('/api/projects', (req, res) => {
    getProjects((error, result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Success'});
        }
    });
});


var port = process.env.port || 3000;
app.listen(port, () => {
    console.log('App listening to: ' + port);
    createCollection('Cats');
});
