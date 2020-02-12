const mongoose = require('mongoose');
const config = require('config');
const dburi = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(dburi, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected');
    } catch (err) {
        process.exit(1);
    }
};

module.exports = connectDB;
