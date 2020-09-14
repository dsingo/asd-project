const express = require('express');
const connectDB = require('./config/db')

const app = express();
const port = process.env.PORT || 3000;

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

// Define routes 
app.use('/user', require('./routes/api/user'));
app.use('/auth', require('./routes/api/auth'));
app.use('/profile', require('./routes/api/profile'));

app.listen(port, () => console.log(`Listening on port ${port}`));