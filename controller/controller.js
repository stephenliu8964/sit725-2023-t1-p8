let express = require('express');
let app = express();
let model = require('../model/model');

const createCat = (req,res) => {
    let cat = req.body;
    model.insertCat(cat, (error,result)=>{
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'cat successfully added'});
        }
    });
}

const getAllCats = (req,res) => {
    model.retrieveCats((error,result)=>{
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Success'});
        }
    });
}

module.exports = {createCat,getAllCats}
