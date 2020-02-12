const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
    sample: {
        type: String,
        required: true
    }
});

module.exports = Sample = mongoose.model('sample', sampleSchema);
