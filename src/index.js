const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { client } = require('./db')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const getUsers = (request, response) => {
  client.query('SELECT * FROM app_user', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app
  .route('/users').get(getUsers)

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server listening`)
})