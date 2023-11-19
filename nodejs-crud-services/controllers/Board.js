const Board=require('../models/Board');
const Project=require('../models/Projct');

const getListBoards=async (req,res)=>{
const Boards=await Board.find({isDeleted:false}).exec();

return res.status(200).json(Boards);
}

const getBoard=async (req,res)=>{
    try {
        const boardId = req.params.id;
    
        // Find the board by ID
        const board = await Board.findById(boardId);
    
        // Check if the board exists
        if (!board) {
          return res.status(404).json({ error: 'Board not found' });
        }
    
        // Board found, send it as JSON
        res.json(board);
      } catch (error) {
        console.error('Error retrieving board by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

const createBoard=async (req,res)=>{

    const {title,project}=req.body

    const match = await Project.findOne({_id:project});
    if (!match) {
      return res.status(404).json({ error: 'Project not found' });
    }

   const newBoard = new Board({ title, project });

   await newBoard.save();
    
    return res.status(200).json(newBoard);
    }

const updateBoard=async (req,res)=>{
    let id=req.params.id
    const {title,project}=req.body
    const match=await Board.findById(id);
    if(!match) return res.status(404).json({message: 'Board not found'})

    const matchProject = await Project.findById(project);
    if (!matchProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

        match.title=title;
        match.project=project
        match.save();
        return res.status(200).json(match);
        }


const deleteBoard=async (req,res)=>{
            let id=req.params.id
            const match=await Board.findById(id).exec();
            if(!match) return res.status(404).json({message: 'Board not found'})
                match.isDeleted=true;
                match.save();
                
                return res.status(200).json({message: 'Board deleted'});
                }

module.exports={
    getListBoards,getBoard,createBoard,updateBoard,deleteBoard
}