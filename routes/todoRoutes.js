import {Router} from 'express';

import todoController from '../controller/todoController';

const router = Router()



//view routes 
router.get('/',todoController.list)
// Add 
router.post('/add',todoController.create)
//Edit
router.put('/edit/:id',todoController.edit)

//Delete
router.delete('/delete/:id',todoController.delItem)

export default router