let model = require('../model/model');

const insertCat = (req, res) => {
    let newProject = req.body;
    model.insertCat(newProject, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'project successfully added'});
        }
    });
};

const remove = (req, res) => {
    let newProject = req.body;
    model.deleteCat(newProject, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'project successfully removed'});
        }
    });
};

const getAllCats = (req, res) => {
    model.getCats((error, result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Success'});
        }
    });
}

module.exports = {insertCat, getAllCats, remove}