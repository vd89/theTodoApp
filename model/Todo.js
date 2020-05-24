import mongoose, { Schema } from "mongoose";

const  TodoSchema = new Schema({
  todoItem :{
    type: String,
    required: true
  }
})



export default mongoose.model('Todo',TodoSchema,'todoItem')