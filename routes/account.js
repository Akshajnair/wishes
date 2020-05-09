const router = require('express').Router()
let Account = require('../models/account.model')
let Token = require('../models/token.model')

router.route('/').get((req, res) => {
  Account.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/add').post((req, res) => {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const email = req.body.email
  const password = req.body.password
  const role = 'user'
  Account.findOne({ email: email })
    .then(accounts => {
      if (accounts) {
        res.json('exist')
      } else {
        const newAccount = new Account({
          firstname,
          lastname,
          email,
          password,
          role
        })

        newAccount
          .save()
          .then(() => res.json('account added!'))
          .catch(err => res.status(400).json('Error1: ' + err))
      }
    })
    .catch(err => res.status(400).json('Error2: ' + err))
})
router.route('/update/:tokenid').post((req, res) => {
  Token.findById(req.params.tokenid)
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
        Account.findById(token.accountid)
          .then(accounts => {
            accounts.firstname = req.body.firstname
            accounts.lastname = req.body.lastname
            accounts.profession = req.body.profession
            accounts.description = req.body.description
            accounts.website = req.body.website
            accounts.twitter = req.body.twitter
            accounts.facebook = req.body.facebook
            accounts.linkedin = req.body.linkedin
            accounts.youtube = req.body.youtube
            accounts
              .save()
              .then(() => res.json('updated'))
              .catch(err => res.json('invalid'))
          })
          .catch(err => res.json('invalid'))
      }
    })
    .catch(err => res.json('invalid'))
})
router.route('/signupupdate/:tokenid').post((req, res) => {
  Token.findById(req.params.tokenid)
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
        Account.findById(token.accountid)
          .then(accounts => {
            accounts.profession = req.body.profession
            accounts.description = req.body.description
            accounts.website = req.body.website
            accounts.twitter = req.body.twitter
            accounts.facebook = req.body.facebook
            accounts.linkedin = req.body.linkedin
            accounts.youtube = req.body.youtube
            accounts
              .save()
              .then(() => res.json('updated'))
              .catch(err => res.json('invalid'))
          })
          .catch(err => res.json('invalid'))
      }
    })
    .catch(err => res.json('invalid'))
})
router.route('/maketrainer/:id').post((req, res) => {
  Account.findById(req.params.id)
    .then(accounts => {
      accounts.role = 'trainer'
      accounts
        .save()
        .then(() => res.json('accounts updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(accounts => res.json(accounts))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/user/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(accounts => {
      const profile = {
        firstname: accounts.firstname,
        lastname: accounts.lastname,
        profession: accounts.profession,
        description: accounts.description,
        dplink: accounts.dplink,
        website: accounts.website,
        twitter: accounts.twitter,
        facebook: accounts.facebook,
        linkedin: accounts.linkedin,
        youtube: accounts.youtube,
        course: accounts.course
      }
      res.json(profile)
    })
    .catch(err => res.status(400).json('Error'))
})
router.route('/trainer/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(accounts => {
      if (accounts.role === 'trainer') res.json(accounts)
      else res.json('nottrainer')
    })
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/emailcheck/:email').get((req, res) => {
  Account.findOne({ email: req.params.email })
    .then(accounts => {
      if (accounts.email === req.params.email) res.json({ res: 'exist' })
      else res.json({ res: 'notexist' })
    })
    .catch(err => res.json({ res: 'notexist' }))
})
router.route('/email/:email/:pass').get((req, res) => {
  Account.findOne({ email: req.params.email })
    .then(accounts => {
      if (accounts.password == req.params.pass) {
        const newToken = new Token({
          accountid: accounts._id,
          expired: false
        })
        newToken
          .save()
          .then((err, reply) => {
            res.json(newToken._id)
          })
          .catch(err => res.status(400).json('Error: ' + err))
        //res.json(accounts)
      } else {
        res.json({ res: 'wrong' })
      }
    })
    .catch(err => res.json({ res: 'wrong' }))
})
router.route('/:id').delete((req, res) => {
  Account.findByIdAndDelete(req.params.id)
    .then(() => res.json('accounts deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/token/:id').get((req, res) => {
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
      if (token.expired == false && date + 200 > datenow) {
        Account.findById(token.accountid)
          .then(accounts => {
            const profile = {
              _id: accounts._id,
              firstname: accounts.firstname,
              lastname: accounts.lastname,
              profession: accounts.profession,
              description: accounts.description,
              dplink: accounts.dplink,
              website: accounts.website,
              twitter: accounts.twitter,
              facebook: accounts.facebook,
              linkedin: accounts.linkedin,
              youtube: accounts.youtube,
              course: accounts.course
            }
            res.json(profile)
          })
          .catch(err => res.status(400).json('nodata'))
      } else res.json('nodata')
    })
    .catch(err => res.status(400).json('nodata'))
})
router.route('/profilefetch/:accountid/:tokenid').get((req, res) => {
  const accountid = req.params.accountid
  const tokenid = req.params.tokenid
  if (tokenid !== 'null') {
    const this1 = this
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
          Account.findById(accountid)
            .then(accounts => {
              const profile = {
                firstname: accounts.firstname,
                lastname: accounts.lastname,
                profession: accounts.profession,
                description: accounts.description,
                dplink: accounts.dplink,
                website: accounts.website,
                twitter: accounts.twitter,
                facebook: accounts.facebook,
                linkedin: accounts.linkedin,
                youtube: accounts.youtube,
                course: accounts.course
              }
              if (accountid === token.accountid)
                res.json({ profile, permission: 'edit' })
              else res.json({ profile, permission: 'view' })
            })
            .catch(err => res.status(400).json('notfound'))
        } else res.json('notfound')
      })
      .catch(err => res.status(400).json('notfound'))
  } else {
    Account.findById(accountid)
      .then(accounts => {
        const profile = {
          firstname: accounts.firstname,
          lastname: accounts.lastname,
          profession: accounts.profession,
          description: accounts.description,
          dplink: accounts.dplink,
          website: accounts.website,
          twitter: accounts.twitter,
          facebook: accounts.facebook,
          linkedin: accounts.linkedin,
          youtube: accounts.youtube,
          course: accounts.course
        }
        if (accounts.role === 'trainer')
          res.json({ profile, permission: 'view' })
        else res.json('loginview')
      })
      .catch(err => res.status(400).json('notfound'))
  }
})
module.exports = router
