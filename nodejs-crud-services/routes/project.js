const express= require('express')
const router = express.Router()
const projectController=require('../controllers/Project')


router.get('/', projectController.getListProjects)
router.get('/getbyid/:id', projectController.getProject)
router.post('/create', projectController.createProject)
router.post('/update/:id', projectController.updateProject)
router.post('/delete/:id', projectController.deleteProject)



module.exports =router