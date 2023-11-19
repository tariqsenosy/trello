const express= require('express')
const router = express.Router()
const ListController=require('../controllers/List')


router.get('/', ListController.getListLists)
router.get('/getbyid/:id', ListController.getList)
router.post('/create', ListController.createList)
router.post('/update/:id', ListController.updateList)
router.post('/delete/:id', ListController.deleteList)



module.exports =router