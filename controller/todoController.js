const create = async (req,res) => {
  console.log(req.body);
  res.send(`<h1>THis is working</h1>`)
}


export default {create}