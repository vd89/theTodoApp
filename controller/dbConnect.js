import mongoose from "mongoose";
import config from 'config';

const opt = {
  useNewUrlParser: true, useUnifiedTopology: true
}

const mongoUri = config.get('mongoDB.mongoUri')
export default mongoose.connect(mongoUri,opt)
.then(err =>console.log(`MongoDB connected Successfully :ghost:`))
.catch(err => console.log(err))
