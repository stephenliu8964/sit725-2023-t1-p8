let client = require('../dbConnection');
let collection;

setTimeout(()=>{
    collection = client.db('test').collection('Cats');
}, 2000);

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const retrieveCats = (callback) => {
    collection.find().toArray(callback);
}

module.exports = {insertCat, retrieveCats}
