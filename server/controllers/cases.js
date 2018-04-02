const Case = require('../models/cases');
const logger = require('../logger')('cases_controller');

const getCazeById = (cazeId) => {
    return Case.findById(cazeId);
};

// GET list of all cases.
exports.index = (req, res, next) => {
    logger('info', 'Getting cases.');
    const cases = Case.find({});
    cases
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            next(err);
        })
};

// GET a specific case
exports.show = (req, res, next) => {
    logger('info', 'Getting a case.');
    const id = req.params.caseId;
    getCazeById(id)
        .then((caze) => {
            res.status(200).json(caze);
        })
        .catch((err) => {
            next(err);
        });
};


exports.create = (req, res, next) => {
    logger('info', 'Creating a case.');
    let caze = new Case(req.body);
    caze.save()
        .then((data) => {
            logger("info", `Case is created ${data}`);
            res.status(201).json(data)
        })
        .catch((err) => {
            logger("error", "Could not create a case: " + err);
            next(err);
        })
};

exports.update = (req, res, next) => {
    logger('info', 'Updating a case.');
    const id = req.params.caseId;
    getCazeById(id)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            next(err);
        });
    res.status(404).json({message: "Not implemented"});
};

exports.destroy = (req, res, next) => {
    logger('info', 'Deleting a case.');
    res.status(404).json({message: "Not implemented"});
};