const express = require('express');
const Certification = require('../models/Certification');
const router = express.Router();

// Get all certifications
router.get('/', async (req, res) => {
    try {
        const certifications = await Certification.find();
        res.json(certifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new certification
router.post('/', async (req, res) => {
    const certification = new Certification({
        name: req.body.name,
        dateAchieved: req.body.dateAchieved,
        userId: req.body.userId,
    });
    try {
        const savedCertification = await certification.save();
        res.status(201).json(savedCertification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
