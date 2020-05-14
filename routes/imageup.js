const router = require('express').Router()
const multer = require('multer')
var aws = require('aws-sdk')
var multerS3 = require('multer-s3')

const secretAccessKey = process.env.AWSSECRETKEY
const accessKeyId = process.env.AWSACCESSKEYID

aws.config.update({
  secretAccessKey: 'vzVSilAfgmTVSpfS0qFemKX1M0lS/bvl7kshqS5C',
  accessKeyId: 'AKIAIQ4UB3YPDELJODDQ',
  region: 'us-east-1'
})

var accountid = ''

const s3 = new aws.S3()

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'imagebirthday',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function (req, file, cb) {
      cb(null, accountid + '.jpg')
    }
  })
}).single('myImage')

router.route('/add/:id').post((req, res) => {
  accountid = req.params.id
  upload(req, res, function (err) {
    if (err) {
      res.status(422).send({
        errors: [{ title: 'File Upload Error', detail: err.message }]
      })
    }
    res.json({ imageUrl: req.file.location })
  })
})
module.exports = router
