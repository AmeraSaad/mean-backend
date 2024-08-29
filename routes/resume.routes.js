const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resume.controller');

// GET the resume
router.get('/', resumeController.getResume);

// POST or PUT to create or update the resume
router.post('/', resumeController.createOrUpdateResume);
router.put('/', resumeController.createOrUpdateResume);

// DELETE the resume
router.delete('/', resumeController.deleteResume);

module.exports = router;

