import todoItem from "../model/Todo";


// Created a todo
const create = async (req,res) => {
  const todo_item = new todoItem(req.body)
  try {
    await todo_item.save()
    res.send(`<h1>The data is send to database</h1>`)
  } catch (error) {
    console.log(error);
  }
}
// View todos 
const list = async (req,res) => {
  await todoItem.find({},(err,data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })  
}
//Delete todos
const delItem = async (req,res) => {
  const id = req.params.id
  todoItem.deleteOne({_id:id},err=>{
    if (err) {
      res.send(err)
    } else {
      res.send('Task Deleted!!!')
    }
  })
}
// Edit todos
const edit = async (req,res) => {
  const id = req.params.id
  const {title,description} = req.body
  todoItem.findOneAndUpdate({_id:id},{$set:{title,description}},{useFindAndModify: false},err =>{
    if (err) {
      res.send(err)
    } else {
      res.send('Updataed')
    }
  })
}


export default {create,list,delItem,edit}