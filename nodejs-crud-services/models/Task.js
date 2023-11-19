const mongoose= require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema=new mongoose.Schema({
    description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255,
    },
    startDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // Validate that startDate is not in the past
          return value >= new Date();
        },
        message: 'Start date must be in the future.',
      },
    },
    endDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          // Validate that endDate is after startDate
          return this.startDate <= value;
        },
        message: 'End date must be equal to or after the start date.',
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'List',
      required: true,
    },
  });



module.exports =mongoose.model('Task',TaskSchema);