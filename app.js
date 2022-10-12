const express = require('express');
const app = express();
const url = `mongodb+srv://root:xHtzS0YfTkoGNE7e@cluster0.0el4m.mongodb.net/Cluster0`;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


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
     id: { type: Number, required: true, unique: true },
     text: { type: String, required: true },
     edit: { type: Boolean, default: false },
     done: { type: Boolean, default: false }
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

   const { text } = request.body; 

   try { 
      if(!text) {
         response.send({result:false, message:'텍스트가 입력되지 않았습니다.'});
      };
      var count = await todoList.find().exec(); 

      var createTodo = new todoList({
         id: count.length + 1,
         text: text,
         edit: false,
         done: false,
      }); 
      var result = await createTodo.save(); 
      response.send({result: true, resultData: result}); 
   } catch (error) {
      response.status(500).send(error); 
   } 
});


app.delete('/delete:id', async (request, response) => { 
   try { 
      var result = await todoList.find().exec(); 
      // var result = await todoList.deleteOne({ _id: request.params.id }).exec(); 
      response.send(result); 
   } catch (error) {
       response.status(500).send(error); 
      } 
});
