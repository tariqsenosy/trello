require('dotenv').config()
const express= require('express');
const mongoose= require('mongoose');
const dbConnection=require('./config/dbConn')
const Project=require('./routes/project')
const board=require('./routes/board')
const list=require('./routes/list')
const task=require('./routes/task')
const app = express();
const PORT=process.env.PORT || 3500

dbConnection()
app.use(express.json())
app.use('/projects',Project)
app.use('/boards',board)
app.use('/lists',list)
app.use('/tasks',task)


mongoose.connection.once('open', ()=>{
    console.log('db connected succesfully');
    app.listen(PORT,()=> console.log(`listening on port ${PORT}`))
})



