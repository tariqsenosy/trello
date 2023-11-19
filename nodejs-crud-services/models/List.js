const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const ListSchema=new Schema({
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
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true,
      },
})



module.exports =mongoose.model('List',ListSchema);