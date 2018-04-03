const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
        toJSON: { virtuals: true },
        id: false
});

ProjectSchema.virtual('cases', {
  ref: 'Case',
  localField: '_id',
  foreignField: 'project'
});


//Exporting our model
const ProjectModel = mongoose.model('Project', ProjectSchema);
module.exports = ProjectModel;