const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

const dbConnection = require('./config/dbconnection');

dbConnection();

app.use(express.json({ extended: false }));

app.listen(PORT, function() {
    console.log('Server running at port: ' + PORT);
});

app.get('/', function(req, res) {
    res.send('Welcome to MERN Starter');
});

app.use('/api/sample', require('./routes/api/sampleapi'));
