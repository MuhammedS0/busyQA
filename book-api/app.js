//app.js

const express = require('express');
const app = express();
const port = 3000;
// Require the books module
const books = require('./books'); 

//Middleware to parse JSON requests
app.use(express.json());

// Define a route to get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});