const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established successfully')
})

const accountRouter = require('./routes/account')
const tokenRouter = require('./routes/token')
const coursesRouter = require('./routes/courses')
const images = require('./routes/imageup')
const imagescompress = require('./routes/imagecompress')
const email = require('./routes/email')

app.use('/account', accountRouter)
app.use('/token', tokenRouter)
app.use('/tutorial', coursesRouter)
app.use('/images', images)
app.use('/imagescompress', imagescompress)
app.use('/email', email)

app.use(express.static('public'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
