const express = require('express')
const cors = require('cors')
const sequelize = require('./models/index')
const bodyParser = require('body-parser')
const upload = require('./routes/upload')

const app = express()

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

app.use(cors({ credentials: true, origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/upload', upload)
app.listen(3003)