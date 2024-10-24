// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// login middleware 
const loginMiddleware = function (req, res, next) {
    console.log('Login');
    next();
}
app.use(loginMiddleware);

// auth middleware 
const authMiddleware = function (req, res, next) {
    console.log('Auth');
    next();
}
app.use(authMiddleware);


// validation middleware 
const validationMiddleware = function (req, res, next) {
    console.log('validation');
    next();
}
app.use(validationMiddleware);


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Define the port number for the server
const port = 3000;

// Define a route for the root URL / Mounting
const item = require('./routes/api_routes');
app.use('/api', item);


// Start the server and listen on the specified port
app.listen(port, () => {
    // Log a message when the server has started
    console.log('Server started');
});
