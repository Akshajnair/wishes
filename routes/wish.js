const router = require('express').Router()
let Wish = require('../models/wish.model')

router.route('/').get((req, res) => {
  Wish.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').get((req, res) => {
  Wish.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.json('Error'))
})
router.route('/add').post((req, res) => {
  const name = req.body.name
  const nickname = req.body.nickname
  const slide = []
  const newWish = new Wish({
    name,
    nickname,
    slide
  })
  newWish
    .save()
    .then(() => res.json(newWish._id))
    .catch(err => res.status(400).json('Error1: ' + err))
})
router.route('/update/:wishid').post((req, res) => {
  Wish.findById(req.params.wishid)
    .then(Wish => {
      Wish.name = req.body.name
      Wish.nickname = req.body.nickname
      Wish.slide = req.body.slides
      Wish.save()
        .then(() => res.json('updated'))
        .catch(err => res.json(err))
    })
    .catch(err => res.json('invalid'))
})

router.route('/:id').delete((req, res) => {
  Wish.findByIdAndDelete(req.params.id)
    .then(() => res.json('Wishs deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports=router