const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  technologies: [String],
  repositoryUrl: { type: String, trim: true },
  liveUrl: { type: String, trim: true }, 
  picture: { type: String},  
  dateCreated: { type: Date, default: Date.now },
}, { timestamps: true });


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
