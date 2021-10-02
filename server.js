require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const authRouts = require('./routes/authRouts');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/', authRouts);

try {
  app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
} catch (err) {
  console.log(err);
}


// //just testing 
// require('dotenv').config();
// const {User,Reward, Question,GameUserMap,Answer,} = require('./models/index');

// console.log({User,Reward, Question,GameUserMap,Answer,} );
// const {sequelize} = require('./models/index')
// const {QueryTypes} = require('sequelize')

// async function gago(){
//     let questionId = await sequelize.query("SELECT id FROM questions WHERE content='Which Disney character famously leaves a glass slipper behind at a royal ball?' ", { type: QueryTypes.SELECT })
//     console.log(questionId[0].id); 
//     ;
// }

// gago();


