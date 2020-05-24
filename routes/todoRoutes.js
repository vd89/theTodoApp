import express from 'express';
import todoController from '../controller/todoController';

const router = express.Router()

router.post('/submit',todoController.create)



export default router