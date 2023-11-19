const express= require('express')
const router = express.Router()
const BoardController=require('../controllers/Board')


router.get('/', BoardController.getListBoards)
router.get('/getbyid/:id', BoardController.getBoard)
router.post('/create', BoardController.createBoard)
router.post('/update/:id', BoardController.updateBoard)
router.post('/delete/:id', BoardController.deleteBoard)



module.exports =router