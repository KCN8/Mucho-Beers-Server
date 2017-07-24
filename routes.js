const express = require('express')
const router = express.Router()
const knex = require('./connections')

router.get('/', (req, res) => {
  knex('beers')
  .then((data) => {
    res.json(data)
  })
})

module.exports = router
