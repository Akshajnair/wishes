const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    nickname: {
      type: String,
      trim: true
    },
    slide: [
      {
        image1: { type: String },
        image2: { type: String },
        memo: { type: String }
      }
    ]
  },
  {
    timestamps: true
  }
)

const Wish = mongoose.model('Wish', wishSchema)
module.exports = Wish
