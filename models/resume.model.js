const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  summary: { type: String, trim: true },
  experience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date,
      description: String,
    }
  ],
  education: [
    {
      institution: String,
      degree: String,
      fieldOfStudy: String,
      startDate: Date,
      endDate: Date,
    }
  ],
  skills: [String]
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
