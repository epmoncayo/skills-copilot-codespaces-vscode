// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use the public folder to serve static files
app.use(express.static('public'));

// Use the comments router
app.use('/comments', require('./routes/comments'));

// Listen to port 3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
