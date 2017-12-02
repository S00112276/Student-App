const passport = require('passport');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
// Set port on 3000
const port = process.env.PORT || 3000;
// Database
const config = require('./config/database');
// Routes
const userRoutes = require('./api/routes/userRoutes');
// Model
//const userModel = require('./api/models/userModel');


// Connect to Database
mongoose.connect(config.database);

// On error
mongoose.connection.on('error', (err) => {
    console.log('Database error: ' + err);
});

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database); 
});

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users', userRoutes);

//userRoutes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

// Start Server
app.listen(port, () => {
    console.log('SERVER STARTED ON PORT ' + port);
});