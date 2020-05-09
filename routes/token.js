const router = require('express').Router()
let Token = require('../models/token.model')
var d = new Date()

router.route('/').get((req, res) => {
  Token.find()
    .then(tokens => res.json(tokens))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const tokenid = req.body.tokenid
  Token.findById(tokenid)
    .then(token => {
      const a = new Date(token.createdAt),
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

      if (token.expired == false && date + 200 > datenow) {
        token.expired = true
        token.logouttime = new Date()
        token
          .save()
          .catch(err => res.status(400).json('Error: ' + err))

        const newToken = new Token({
          accountid: token.accountid,
          expired: false
        })
        newToken
          .save()
          .then((err, reply) => {
            res.json(newToken._id)
          })
          .catch(err => res.status(400).json('Error: ' + err))
      } else res.json('expired')
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Token.findById(req.params.id)
    .then(token => {
      token.expired = true
      token.logouttime = new Date()
      token
        .save()
        .then(() => res.json('role updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Token.findById(req.params.id)
    .then(token => {
      const a = new Date(token.createdAt),
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
      if (token.expired == false && date + 200 > datenow) res.json(token)
      else res.json('expired')
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  Token.findByIdAndDelete(req.params.id)
    .then(() => res.json('accounts deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
