const Certificate = require('../models/certificate.model');

// Get all certificates
exports.getAllCertificates = async (req, res, next) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
    } catch (err) {
        next(err);
    }
};

// Get a certificate by ID
exports.getCertificateById = async (req, res, next) => {
    try {
        const certificate = await Certificate.findById(req.params.id);
        if (certificate) {
            res.json(certificate);
        } else {
            res.status(404).send({ message: 'Certificate not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Create a new certificate
exports.createCertificate = async (req, res, next) => {
    const { title, issuer, dateIssued, description, certificateUrl, skills } = req.body;
    
    const newCertificate = new Certificate({
        title,
        issuer,
        dateIssued,
        description,
        certificateUrl,
        skills,
    });

    try {
        const savedCertificate = await newCertificate.save();
        res.status(201).json(savedCertificate);
    } catch (err) {
        next(err);
    }
};

// Update an existing certificate
exports.updateCertificate = async (req, res, next) => {
    const { title, issuer, dateIssued, description, certificateUrl, skills } = req.body;
    
    try {
        const updatedCertificate = await Certificate.findByIdAndUpdate(
            req.params.id, 
            { title, issuer, dateIssued, description, certificateUrl, skills }, 
            { new: true, runValidators: true }
        );

        if (updatedCertificate) {
            res.json(updatedCertificate);
        } else {
            res.status(404).send({ message: 'Certificate not found' });
        }
    } catch (err) {
        next(err);
    }
};

// Delete a certificate
exports.deleteCertificate = async (req, res, next) => {
    try {
        const deletedCertificate = await Certificate.findByIdAndDelete(req.params.id);
        if (deletedCertificate) {
            res.json({ message: 'Certificate deleted successfully' });
        } else {
            res.status(404).send({ message: 'Certificate not found' });
        }
    } catch (err) {
        next(err);
    }
};
