import mongoose, { Schema } from "mongoose";

const  TodoSchema = new Schema({
  title :{
    type: String
  },
  description:{
    type: String
  }
})

const todoItem =  mongoose.model('Todo',TodoSchema,'todoItem')

export default todoItem