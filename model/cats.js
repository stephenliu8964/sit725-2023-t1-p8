let client = require('../dbConnection');
let dbcollection;

setTimeout(() => {
    dbcollection = client.db('test').collection('Cats');
}, 2000);

const insertCat = (cat, callback) => {
    dbcollection.insertOne(cat, callback);
}

const getCats = (callback) => {
    dbcollection.find().toArray(callback);
}

module.exports = {insertCat, getCats}