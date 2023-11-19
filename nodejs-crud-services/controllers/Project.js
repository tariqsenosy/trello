const Project=require('../models/Projct');

const getListProjects=async (req,res)=>{
const projects=await Project.find({isDeleted:false}).exec();

return res.status(200).json(projects);
}

const getProject=async (req,res)=>{
    let id=req.params.id
    const project=await Project.findOne({_id:id}).exec();
    if(!project) return res.status(404).json({message: 'Project not found'})
    
     return res.status(200).json(project);
    }

const createProject=async (req,res)=>{
    const title=req.body.title;

    const project=await Project.create({
        title: title
    });
    
    return res.status(200).json(project);
    }

const updateProject=async (req,res)=>{
    let id=req.params.id
    const match=await Project.findOne({_id:id}).exec();
    if(!match) return res.status(404).json({message: 'Project not found'})
        match.title=req.body.title;
        match.save();
        
        return res.status(200).json(match);
        }
const deleteProject=async (req,res)=>{
            let id=req.params.id
            const match=await Project.findOne({_id:id,isDeleted:false}).exec();
            if(!match) return res.status(404).json({message: 'Project not found'})
                match.isDeleted=true;
                match.save();
                
                return res.status(200).json({message: 'Project deleted'});
                }

module.exports={
    getListProjects,getProject,createProject,updateProject,deleteProject
}