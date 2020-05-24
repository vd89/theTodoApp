import mongoose, { Schema } from "mongoose";

const  TodoSchema = new Schema({
  todoItem :{
    type: String,
    required: true
  }
})

const todoItem =  mongoose.model('Todo',TodoSchema,'todoItem')

export default todoItem