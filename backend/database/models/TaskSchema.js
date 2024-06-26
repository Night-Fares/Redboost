//import mongoose
const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
})

const kpiSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
})

const commentSchema = new mongoose.Schema({
    commentId: {
      type: String,
      required: true,
    },
    commenter: {
      type: String,
      required: true, 
    },
    comment: {
      type: String,
      required: true, 
    },
    commentedAt: {
      type: Date,
      default: Date.now, 
    },
  
})

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  xpPoints: {
    type: Number,

  },
  status: {
    type: String,
    enum: ['valid', 'inProgress', 'completed', 'cancelled', 'expired'],
    default: 'inProgress',
    required: true,
  },
  taskOwner: {
    type: String,
    required: true,
  },
  resources: {
    type: [fileSchema],
    default: [],
  },
  deliverables: {
    type: [fileSchema],

    default: [],
  },
  kpis: {
    type: [kpiSchema],
   
    default: [],
  },
  reports: {
    type: [kpiSchema],
   
    default: [],
  },
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true,
  },
  comments: {
    type: [commentSchema],
    default: [], 
  },
});


module.exports = mongoose.model('Task', taskSchema)


