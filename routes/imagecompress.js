const router = require('express').Router()
const tinify = require('tinify')
let Token = require('../models/token.model')

const secretAccessKey = process.env.AWSSECRETKEY
const accessKeyId = process.env.AWSACCESSKEYID
tinify.key = process.env.TINIFYKEY

router.route('/:id').post((req, res) => {
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
        const source = tinify.fromUrl(
          'https://aiskilllabsimages.s3.us-east-2.amazonaws.com/userimg/' +
            token.accountid +
            '.jpg'
        )
        const resized = source.resize({
          method: 'cover',
          width: 300,
          height: 300
        })
        resized.store({
          service: 's3',
          aws_access_key_id: accessKeyId,
          aws_secret_access_key: secretAccessKey,
          region: 'us-east-1',
          path: 'aiskilllabsimages/userimg/' + token.accountid + '.jpg'
        })
        res.json(token.accountid)
      }
    })
    .catch(err => res.status(400).json('nodata'))
})
module.exports = router
