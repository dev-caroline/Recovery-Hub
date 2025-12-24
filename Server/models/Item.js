const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, default: Date.now },
    image: String,
    status: { type: String, enum: ['lost', 'found', 'claimed'], default: 'lost' },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Item', itemSchema);