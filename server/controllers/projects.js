const Project = require('../models/projects');
const logger = require('../logger')('cases_controller');


// GET list of all cases.
exports.index = (req, res, next) => {
    res.status(200).json({message: "fooo"});
};

// GET a specific case
exports.show = (req, res, next) => {
    res.status(200).json({message: "fooo"});
};


exports.create = (req, res, next) => {
    const projectData = req.body;
    const project = new Project(projectData);

    project.save()
    .then((data) => {
        res.status(201).json(data);
    })
    .catch((err) => {
        next(err);
    });
};

exports.update = (req, res, next) => {
    res.status(200).json({message: "fooo"});
};

exports.destroy = (req, res, next) => {
    res.status(200).json({message: "fooo"});
};