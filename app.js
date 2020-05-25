import express from 'express';
import router from './routes/todoRoutes';
import dbConnect from './controller/dbConnect';

const app = express()
const port = process.env.PORT || 8085

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/todo',router)

app.listen(port,() => {
  console.log(`The server is running on port ${port}, To stop the server Ctrl + C`);
})