const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    role: {
      type: String,
      required: true,
      trim: true
    },
    dplink: {
      type: String,
      trim: true
    },
    course: [
      {
        courseid: { type: String, trim: true },
        lastvideoid: { type: String, trim: true },
        recent: { type: String, trim: true }
      }
    ],
    profession: {
      type: String,
      required: false,
      trim: true
    },
    description: {
      type: String,
      required: false,
      trim: true
    },
    language: {
      type: String,
      trim: true
    },
    website: {
      type: String,
      required: false,
      trim: true
    },
    twitter: {
      type: String,
      required: false,
      trim: true
    },
    facebook: {
      type: String,
      required: false,
      trim: true
    },
    linkedin: {
      type: String,
      required: false,
      trim: true
    },
    youtube: {
      type: String,
      required: false,
      trim: true,
    }
  },
  {
    timestamps: true
  }
)

const Account = mongoose.model('Account', accountSchema)
module.exports = Account
