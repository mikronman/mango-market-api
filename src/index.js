const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Import endpoints
const userRouter = require('./users/user')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Register endpoints
app.use('/users', userRouter)

  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });