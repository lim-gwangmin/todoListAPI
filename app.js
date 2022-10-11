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
     edit: Boolean,
     done: Boolean,
   },
 });

const todoList = mongoose.model("todoLists", TodoListSchema);

function test() {
   todoList.find((err, todo) => {
      if (err) {
        console.log(err);
      } else {
        mongoose.connection.close();
        todo.forEach( item => {
          console.log(item);
        });
      }
    });
}

app.get("/", (req, res) => {
   test();
   res.send("Hello Word");
});



