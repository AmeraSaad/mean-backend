const Project = require('../models/project.model');

// Get all projects
exports.getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        next(err);
    }
};

// Get a project by ID
exports.getProjectById = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            res.json(project);
        } else {
            res.status(404).send({ message: 'Project not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Create a new project
exports.createProject = async (req, res, next) => {
  const { title, description, technologies, repositoryUrl, liveUrl, picture, dateCreated } = req.body;
  
  const newProject = new Project({
      title,
      description,
      technologies,
      repositoryUrl,
      liveUrl,
      picture,
      dateCreated
  });

  try {
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
  } catch (err) {
      next(err);
  }
};


// Update an existing project
exports.updateProject = async (req, res, next) => {
  const { title, description, technologies, repositoryUrl, liveUrl, picture, dateCreated } = req.body;
  
  try {
      const updatedProject = await Project.findByIdAndUpdate(
          req.params.id, 
          { title, description, technologies, repositoryUrl, liveUrl, picture, dateCreated }, 
          { new: true, runValidators: true }
      );

      if (updatedProject) {
          res.json(updatedProject);
      } else {
          res.status(404).send({ message: 'Project not found' });
      }
  } catch (err) {
      next(err);
  }
};


// Delete a project
exports.deleteProject = async (req, res, next) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (deletedProject) {
            res.json({ message: 'Project deleted successfully' });
        } else {
            res.status(404).send({ message: 'Project not found' });
        }
    } catch (err) {
        next(err);
    }
};
