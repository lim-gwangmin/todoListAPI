require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const url = process.env.MONGO_DB_URL;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const form_data = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(form_data.array());
app.use(cors());

mongoose.connect(url)
  .then(() => {
      console.log("Connected to MongoDB => UserAPI");
  })
   .then(app.listen('https://lim-gwangmin.github.io/todoListAPI/', res => {
      console.log('3000 port on');
  }))
  .catch(err => {
    console.log(err);
  });


app.use('/todos', require('./routes/todos')); 


app.use('/todos', require('./routes/todos')); 
// use method 첫번째 매개변수는 url을 가르킨다
