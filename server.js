const express = require('express');
const connectDB = require('./config/db')
const path = require('path')
const userRoutes = require('./routes/api/User');
const authRoutes = require('./routes/api/auth');
const cardRoutes = require('./routes/api/Cards')

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(function(req, res, next) {
  process.env.NODE_ENV === 'development'
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

// Define routes 
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/cards', cardRoutes)

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