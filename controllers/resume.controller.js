const Resume = require('../models/resume.model');

// Get all resumes
exports.getAllResumes = async (req, res, next) => {
    try {
        const resumes = await Resume.find();
        res.json(resumes);
    } catch (err) {
        next(err);
    }
};

// Get a resume by ID
exports.getResumeById = async (req, res, next) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (resume) {
            res.json(resume);
        } else {
            res.status(404).send({ message: 'Resume not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Create a new resume
exports.createResume = async (req, res, next) => {
    const { name, title, summary, experience, education, skills } = req.body;
    
    const newResume = new Resume({
        name,
        title,
        summary,
        experience,
        education,
        skills,
    });

    try {
        const savedResume = await newResume.save();
        res.status(201).json(savedResume);
    } catch (err) {
        next(err);
    }
};

// Update an existing resume
exports.updateResume = async (req, res, next) => {
    const { name, title, summary, experience, education, skills } = req.body;
    
    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id, 
            { name, title, summary, experience, education, skills }, 
            { new: true, runValidators: true }
        );

        if (updatedResume) {
            res.json(updatedResume);
        } else {
            res.status(404).send({ message: 'Resume not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Delete a resume
exports.deleteResume = async (req, res, next) => {
    try {
        const deletedResume = await Resume.findByIdAndDelete(req.params.id);
        if (deletedResume) {
            res.json({ message: 'Resume deleted successfully' });
        } else {
            res.status(404).send({ message: 'Resume not found' });
        }
    } catch (err) {
        next(err);
    }
};
