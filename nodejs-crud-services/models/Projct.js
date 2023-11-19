const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema =new Schema({
    title:{
        type: 'string',
        required: true,
        minlength:3,
        maxlength: 50
    },
    createdAt:{
        type: Date,
        required: true,
        immutable: true,
        default:Date.now
    },
    updatedAt:{
        type: Date,
        required: true,
        default:Date.now
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
});


module.exports = mongoose.model('Project',ProjectSchema)