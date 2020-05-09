const router = require('express').Router()
const nodemailer = require('nodemailer')
let Otp = require('../models/otp.model')
let Account = require('../models/account.model')
let Token = require('../models/token.model')

function numgen () {
  var minm = 100000
  var maxm = 999999
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm
}

router.route('/mail/:email').post((req, res) => {
  const email = req.params.email
  const otpkey = numgen()
  Otp.findOne({ email }).then(otp => {
    if (otp) {
      Otp.findById(otp._id).then(otp => {
        otp.otpkey = otpkey
        otp
          .save()
          .then(() => res.json('sended'))
          .catch(err => {})
      })
    } else {
      const newOtp = new Otp({
        email,
        otpkey
      })
      newOtp
        .save()
        .then(() => res.json('sended'))
        .catch(err => {})
    }
  })
  const transporter = nodemailer.createTransport({
    host: 'smtp.akshaj.online',
    port: 587,
    auth: {
      user: 'niar@akshaj.online',
      pass: 'BNair_is_1K'
    }
  })
  const mailOptions = {
    from: `noreply@akshaj.online`,
    to: '' + email,
    subject: `yolo`,
    text: ' ' + otpkey,
    replyTo: `1234@gmail.com`
  }
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(otpkey)
    if (error) {
      return console.log(error)
    }
    res.json('Message sent: %s', info.messageId)
  })
})

router.route('/check').post((req, res) => {
  Otp.findOne({ email: req.body.email })
    .then(otp => {
      const a = new Date(otp.updatedAt),
        b = new Date()
      const date =
        a.getFullYear() * 100000 +
        (a.getMonth() + 1) * 10000 +
        a.getDate() * 100 +
        a.getHours()
      const datenow =
        b.getFullYear() * 100000 +
        (b.getMonth() + 1) * 10000 +
        b.getDate() * 100 +
        b.getHours()
      // res.json(otp)
      if (
        parseInt(otp.otpkey) === parseInt(req.body.otp) &&
        date + 100 > datenow
      ) {
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const email = req.body.email
        const password = req.body.password
        const role = 'user'
        const newAccount = new Account({
          firstname,
          lastname,
          email,
          password,
          role
        })
        newAccount
          .save()
          .then(() => {
            const newToken = new Token({
              accountid: newAccount._id,
              expired: false
            })
            newToken
              .save()
              .then((err, reply) => {
                res.json(newToken._id)
              })
              .catch(err => res.status(400).json('Error: ' + err))
          })
          .catch(err => res.status(400).json('Error1: ' + err))
      } else {
        res.json({ res: 'wrong' })
      }
    })
    .catch(err => res.json({ res: 'wrong' }))
})
module.exports = router
