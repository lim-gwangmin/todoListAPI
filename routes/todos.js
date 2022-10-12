const express = require('express');
const router = express.Router();
const Todo = require('../model');



// Find All
router.get('/', (req, res) => {
   Todo.findAll()
     .then((todos) => {
       res.send({result:true, data:todos});
     })
     .catch(err => res.status(500).send({result:false, message:err}));
 });
 
 // Find One by todoid
//  router.get('/todoid/:todoid', (req, res) => {
//    Todo.findOneByTodoid(req.params.todoid)
//      .then((todo) => {
//        if (!todo) return res.status(404).send({ err: 'Todo not found' });
//        res.send(`findOne successfully: ${todo}`);
//      })
//      .catch(err => res.status(500).send(err));
//  });
 
 // Create new todo document
 router.post('/', async (req, res) => {
   const count = await Todo.find().exec();
   let lastCount = count[count.length - 1]; 
   Todo.create({
         id: lastCount.id + 1, 
         text: req.body.text, 
         edit: false,
         done: false
      })
     .then(todo => res.send({result:true, data:todo}))
     .catch(err => res.status(500).send({result:false, message:err}));
 });
 
 // Update by todoid
 router.put('/todoid/:todoid', (req, res) => {
   Todo.updateByTodoid(req.params.todoid, req.body)
     .then(todo => res.send(todo))
     .catch(err => res.status(500).send({result:false, message: err}));
 });
 
 // Delete by todoid
 router.delete('/todoid/:todoid', (req, res) => {
   Todo.deleteByTodoid(req.params.todoid)
     .then(() => res.status(200).send({result:true, message:'삭제되었습니다.'}))
     .catch(err => res.status(500).send({result:false, message: err}));
 });
 
 module.exports = router;