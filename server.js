const express = require('express');
const connectDB = require('./config/db')
const path = require('path')

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

// Define routes 
app.use('/user', require('./routes/api/user'));
app.use('/auth', require('./routes/api/auth'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));