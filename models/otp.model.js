const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OtpSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true
    }
  ,
  otpkey: {
    type: String,
    required: true,
    trim: true
  }},
  {
    timestamps: true
  }
)

const Otp = mongoose.model('Otp', OtpSchema)
module.exports = Otp
