const express= require('express')
const router = express.Router()
const TaskController=require('../controllers/Task')


router.get('/', TaskController.getTasks)
router.get('/getbyid/:id', TaskController.getTask)
router.post('/create', TaskController.createTask)
router.post('/update/:id', TaskController.updateTask)
router.post('/delete/:id', TaskController.deleteTask)



module.exports =router