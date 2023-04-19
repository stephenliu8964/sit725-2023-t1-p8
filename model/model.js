let connection = require('../dbConnection');
let collection = connection.db('test').collection('Cats');

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const getCats = (callback) => {
    collection.find().toArray(callback);
}

module.exports = {insertCat, getCats}