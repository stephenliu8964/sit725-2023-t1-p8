let cats = require('../model/cats');

const createCat = (req, res) => {
    let cat = req.body;
    cats.insertCat(cat, (error,result) => {
        if (error) {
            console.error(error);
            res.json({statusCode:400, message: error});
        } else {
            res.json({statusCode:200, data:result, message: 'successfully added cat'});
        }
    });
}

const getAllCats = (req,res) => {
    cats.getCats((error,result) => {
        if (error) {
            console.error(error);
            res.json({statusCode:400, message: error});
        } else {
            res.json({statusCode:200, data:result, message: 'successfully added cat'});
        }
    });
}

module.exports = {createCat, getAllCats}