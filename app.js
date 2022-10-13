require('dotenv').config();
const express = require('express');
const app = express();
const url = process.env.MONGO_DB_URL;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const form_data = multer();
console.log(process.env.MONGO_DB_URL)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(form_data.array());


mongoose.connect(url)
  .then(() => {
      console.log("Connected to MongoDB => UserAPI");
  })
   .then(app.listen(3000, res => {
      console.log('3000 port on');
  }))
  .catch(err => {
    console.log(err);
  });



app.use('/todos', require('./routes/todos')); 
// use method 첫번째 매개변수는 url을 가르킨다
