const Task=require('../models/Task');
const List=require('../models/List');


const getTasks=async (req,res)=>{
const Tasks=await Task.find({isDeleted:false}).exec();

return res.status(200).json(Tasks);
}

const getTask=async (req,res)=>{
    try {
        const TaskId = req.params.id;
    
        // Find the Task by ID
        const match = await Task.findById(TaskId);
    
        // Check if the Task exists
        if (!match) {
          return res.status(404).json({ error: 'Task not found' });
        }
    
        // Task found, send it as JSON
        res.json(match);
      } catch (error) {
        console.error('Error retrieving Task by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

const createTask=async (req,res)=>{

    const {title,description,startDate,endDate,list}=req.body

    const match = await List.findById(list);
    console.log(match)
    if (!match) {
      return res.status(404).json({ error: 'List not found' });
    }

   const newTask = new Task({title,description,startDate,endDate,list});

   await newTask.save();
    
    return res.status(200).json(newTask);
    }

const updateTask=async (req,res)=>{
    let id=req.params.id
    const {title,description,startDate,endDate,list}=req.body
    const match=await Task.findById(id);
    if(!match) return res.status(404).json({message: 'Task not found'})

    const matchList = await List.findById(list);
    if (!matchList) {
      return res.status(404).json({ error: 'List not found' });
    }

        match.title=title;
        match.list=list
        match.description=description
        match.startDate=startDate
        match.endDate=endDate

        match.save();
        return res.status(200).json(match);
        }


const deleteTask=async (req,res)=>{
            let id=req.params.id
            const match=await Task.findById(id).exec();
            if(!match) return res.status(404).json({message: 'Task not found'})
                match.isDeleted=true;
                match.save();
                
                return res.status(200).json({message: 'Task deleted'});
                }

module.exports={
    getTasks,getTask,createTask,updateTask,deleteTask
}