require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const authRouts = require('./routes/authRouts');
const profileRouts = require('./routes/profileRouts');
const port = process.env.PORT || 3001;
const {User} = require("./models/index");

app.use(cors());
app.use(express.json());
app.use('/', authRouts);
app.use('/',profileRouts);

try {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
}


