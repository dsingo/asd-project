const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db')

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('API Running');
});

// Define routes 
app.use('/users', require('./routes/api/User'));
app.use('/auth', require('./routes/api/Auth'));
app.use('/profile', require('./routes/api/Profile'));

app.listen(port, () => console.log(`Listening on port ${port}`));