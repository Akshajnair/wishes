const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema(
  {
    accountid: {
      type: String,
      required: true,
      trim: true
    }
  ,
  logouttime: {
      type:Date
  },
  expired: {
      type:Boolean,
      Default:false
  }},
  {
    timestamps: true
  }
)

const Token = mongoose.model('Token', TokenSchema)
module.exports = Token
