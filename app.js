import express from 'express';
const app = express()

const port = process.env.PORT || 8085

app.use(express.urlencoded({extended : false}))
app.use(express.json())


app.get('/',(req,res) => {
  res.send(`<h1>The server is running </h1>`)
})

app.listen(port,() => {
  console.log(`The server is running on port ${port}, To stop the server Ctrl + C`);
})