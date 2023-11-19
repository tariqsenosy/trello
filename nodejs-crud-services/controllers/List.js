const List=require('../models/List');

const Board=require('../models/Board');

const getListLists=async (req,res)=>{
const Lists=await List.find({isDeleted:false}).exec();

return res.status(200).json(Lists);
}

const getList=async (req,res)=>{
    try {
        const ListId = req.params.id;
    
        // Find the List by ID
        const match = await List.findById(ListId);
    
        // Check if the List exists
        if (!match) {
          return res.status(404).json({ error: 'List not found' });
        }
    
        // List found, send it as JSON
        res.json(match);
      } catch (error) {
        console.error('Error retrieving List by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

const createList=async (req,res)=>{

    const {title,board}=req.body

    const match = await Board.findById(board);
    if (!match) {
      return res.status(404).json({ error: 'Board not found' });
    }

   const newList = new List({ title, board });

   await newList.save();
    
    return res.status(200).json(newList);
    }

const updateList=async (req,res)=>{
    let id=req.params.id
    const {title,board}=req.body
    const match=await List.findById(id);
    if(!match) return res.status(404).json({message: 'List not found'})

    const matchBoard = await Board.findById(board);
    if (!matchBoard) {
      return res.status(404).json({ error: 'Board not found' });
    }

        match.title=title;
        match.board=board
        match.save();
        return res.status(200).json(match);
        }


const deleteList=async (req,res)=>{
            let id=req.params.id
            const match=await List.findById(id).exec();
            if(!match) return res.status(404).json({message: 'List not found'})
                match.isDeleted=true;
                match.save();
                
                return res.status(200).json({message: 'List deleted'});
                }

module.exports={
    getListLists,getList,createList,updateList,deleteList
}