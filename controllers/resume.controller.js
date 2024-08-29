const Resume = require('../models/resume.model');

// Get the resume (assuming there's only one)
exports.getResume = async (req, res, next) => {
    try {
        const resume = await Resume.findOne(); // Fetch the first document
        if (resume) {
            res.json(resume);
        } else {
            res.status(404).send({ message: 'Resume not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Create or update the resume
exports.createOrUpdateResume = async (req, res, next) => {
    const { name, title, summary, experience, education, skills } = req.body;

    try {
        const resume = await Resume.findOne();
        if (resume) {
            // Update the existing resume
            resume.name = name;
            resume.title = title;
            resume.summary = summary;
            resume.experience = experience;
            resume.education = education;
            resume.skills = skills;

            const updatedResume = await resume.save();
            res.json(updatedResume);
        } else {
            // Create a new resume
            const newResume = new Resume({
                name,
                title,
                summary,
                experience,
                education,
                skills,
            });

            const savedResume = await newResume.save();
            res.status(201).json(savedResume);
        }
    } catch (err) {
        next(err);
    }
};

// Delete the resume
exports.deleteResume = async (req, res, next) => {
    try {
        const resume = await Resume.findOneAndDelete();
        if (resume) {
            res.json({ message: 'Resume deleted successfully' });
        } else {
            res.status(404).send({ message: 'Resume not found' });
        }
    } catch (err) {
        next(err);
    }
};
