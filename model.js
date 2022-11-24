const mongoose = require('mongoose');

const TodoListSchema = new mongoose.Schema({
   id: { type: Number, required: true, unique: true },
   text: { type: String, required: true },
   edit: { type: Boolean, default: false },
   done: { type: Boolean, default: false }
});

// Create new todo document
TodoListSchema.statics.create = function (payload) {
   // this === Model
   const todo = new this(payload);
   // return Promise
   return todo.save();
 };
 
 // Find All
 TodoListSchema.statics.findAll = function () {
   // return promise
   // V4부터 exec() 필요없음
   return this.find({});
 };
 
 // Find One by todoid
 TodoListSchema.statics.findOneByTodoid = function (todoid) {
   return this.findOne({ todoid });
 };
 
 // Update by todoid
 TodoListSchema.statics.updateByTodoid = function (id, payload) {
   // { new: true }: return the modified document rather than the original. defaults to false
   return this.findOneAndUpdate({ id }, payload, { new: true });
 };
 
 // Delete by todoid
 TodoListSchema.statics.deleteByTodoid = function (id) {
   return this.remove({ id });
 };
 
 // Create Model & Export
 module.exports = mongoose.model('Todo', TodoListSchema);





 
 const NameSchema = new mongoose.Schema({
   id: { type: Number, required: true, unique: true },
   index: { type: Number, required: true },
});

module.exports = mongoose.model('name', NameSchema);