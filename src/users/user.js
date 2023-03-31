const express = require('express')
const router = express.Router()
const { client } = require('../db')

const getUsers = (request, response) => {
    client.query('SELECT * FROM app_user', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  router.get('/', getUsers)
  
  module.exports = router