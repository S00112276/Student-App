const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./api/routes/UserRoutes');
const port = 3000;
const userModel = require('./api/models/UserModel');
const config = require('./config/database');
const path = require('path');

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
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/user', userRoutes);
//app.use('/transactions', transactionRoutes)

//transactionRoutes(app);
userRoutes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
    console.log('SERVER STARTED ON PORT ' + port);
});