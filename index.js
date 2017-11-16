var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

// Connect the database by adding a url to the mongoose instance connection
mongoose = require('mongoose');

// load the created model - product
Product = require('./api/models/userModel'),

bodyParser = require('body-parser');

// Providing a Connect/Express middleware
const cors = require('cors')
app.use(cors());

// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Breakpoint:breakpoint@breakpoint-shard-00-00-ti5q0.mongodb.net:27017,breakpoint-shard-00-01-ti5q0.mongodb.net:27017,breakpoint-shard-00-02-ti5q0.mongodb.net:27017/student-app?ssl=true&replicaSet=Breakpoint-shard-0&authSource=admin');


app.use(bodyParser.urlencoded({ extended: true }));
// Register the route
var routes = require('./api/routes/userRoutes');
routes(app);

app.use(function (req, res) {
res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log('user RESTful API server started on: ' + port);