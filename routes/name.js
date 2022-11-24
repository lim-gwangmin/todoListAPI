const express = require('express');
const router = express.Router();
const name = require('../model');

// Find All
router.get('/', (req, res) => {
   name.findAll()
     .then((index) => {
       res.send({result:true, data:index});
     })
     .catch(err => res.status(500).send({result:false, message:err}));
 });