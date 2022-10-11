const express = require('express');
const app = express();
const url = `mongodb+srv://root:xHtzS0YfTkoGNE7e@cluster0.0el4m.mongodb.net/Cluster0`;
const mongoose = require('mongoose');

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


  const TodoListSchema = new mongoose.Schema({
   name: {
     text: String,
   //   edit: Boolean,
   //   done: Boolean,
   },
 });
const todoList = mongoose.model("todoLists", TodoListSchema);

app.get('/', async (request, response) => { 
   try { 
      var result = await todoList.find().exec(); 
      response.send(result); 
   } catch (error) { 
      response.status(500).send(error); 
   } 
});

app.post('/create', async (request, response) => { 
   try { 
      var createTodo = new todoList(request.body); 
      // var result = await createTodo.save(); 
      response.send(createTodo); 
      // response.send(result); 
   } catch (error) {
      response.status(500).send(error); 
   } 
});



app.delete('/delete:id', async (request, response) => { 
   console.log(request)
   try { 
      var result = await todoList.deleteOne({ _id: request.params.id }).exec(); 
      response.send(result); 
   } catch (error) {
       response.status(500).send(error); 
      } 
});
