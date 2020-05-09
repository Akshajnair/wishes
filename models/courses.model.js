const mongoose = require('mongoose')
const Schema = mongoose.Schema

const coursesSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    trainerid: {
      type: String,
      required: true
    },
    subheading: {
      type: String
    },
    language: {
      type: String,
      trim: true
    },
    learn: [
      {
        type: String,
        trim: true
      }
    ],
    requirement: [
      {
        type: String,
        trim: true
      }
    ],
    categories: [
      {
        type: String,
        trim: true
      }
    ],
    tags: [
      {
        type: String,
        trim: true
      }
    ],
    description: {
      type: String
    },
    tutorial: [
      {
        topictitle: { type: String, required: true },
        tute: [
          {
            no: { type: String, required: true },
            title: { type: String, required: true },
            duration: { type: String, required: true },
            vidlink: { type: String, required: true }
          }
        ]
      }
    ],
    coverimg: {
      type: String,
      trim: true
    },
    previewimg: {
      type: String,
      trim: true
    },
    previewvid: {
      type: String,
      trim: true
    },
    price: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
)

const Courses = mongoose.model('Courses', coursesSchema)
module.exports = Courses
