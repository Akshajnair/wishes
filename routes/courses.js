const router = require('express').Router()
let Courses = require('../models/courses.model')
var d = new Date()

router.route('/').get((req, res) => {
  Courses.find()
    .then(courses => res.json(courses))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const title = req.body.title
  const trainerid = req.body.trainerid
  const subheading = req.body.subheading
  const language = req.body.language
  const learn = req.body.learn
  const requirement = req.body.requirement
  const categories = req.body.categories
  const tags = req.body.tags
  const description = req.body.description
  const tutorial = req.body.tutorial
  const previewimg = req.body.previewimg
  const previewvid = req.body.previewvid
  const price = req.body.price

  const newCourses = new Courses({
    title,
    trainerid,
    subheading,
    language,
    learn,
    requirement,
    categories,
    tags,
    description,
    tutorial,
    previewimg,
    previewvid,
    price
  })
  newCourses
    .save()
    .then((err, reply) => {
      res.json(newCourses._id)
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  Courses.findById(req.params.id)
    .then(courses => {
      courses.expired = true
      courses.logouttime = new Date()
      courses
        .save()
        .then(() => res.json('role updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
  Courses.findById(req.params.id)
    .then(courses => {
      res.json(courses)
    })
    .catch(err => res.json('Error'))
})

router.route('/:id').delete((req, res) => {
  Courses.findByIdAndDelete(req.params.id)
    .then(() => res.json('accounts deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router
