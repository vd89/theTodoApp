import todoItem from "../model/Todo"



const create = async (req,res) => {
  const todo_item = new todoItem(req.body)
  try {
    await todo_item.save()
    res.send(`<h1>The data is send to database</h1>`)
  } catch (error) {
    console.log(error);
  }

}

// const list = 


export default {create}