require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const authRouts = require('./routes/authRouts');
const profileRouts = require('./routes/profileRouts');
const gameRoutes = require('./routes/gameRouts');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/', authRouts);
app.use('/',profileRouts);
app.use('/',gameRoutes)

try {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
}


