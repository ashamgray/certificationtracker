const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dateAchieved: {
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // This assumes you'll later have a User model to reference
        required: true,
    },
});

module.exports = mongoose.model('Certification', CertificationSchema);
