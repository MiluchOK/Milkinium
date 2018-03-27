const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    internal_id: {
        type: String,
        required: true,
        unique: true,
    }
});

//Exporting our model
const CaseModel = mongoose.model('Case', CaseSchema);
module.exports = CaseModel;