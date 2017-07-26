const express = require('express')
const router = express.Router()
const knex = require('./connections')
const bodyParser = require('body-parser')

router.get('/', (req, res) => {
  knex('beers')
  .then((beers) => {
    res.json(beers)
  })
})

router.get('/:id', (req, res) => {
  let id = req.params.id
  knex('beers')
  .where('id', id)
  .first()
  .then((beer) => {
    res.json(beer)
  })
})

router.post('/', (req, res) => {
  let newBeer = req.body
  knex('beers')
  .insert(newBeer)
  .returning('*')
  .then(newBeer => {
    res.json(newBeer)
  })
})

router.put('/:id', (req, res) => {
  let id = req.params.id
  let edit = req.body
  knex('beers')
  .where('id', id)
  .update(edit)
  .returning('*')
  .then(edited => {
    res.json(edited)
  })
})

router.delete('/:id', (req, res) => {
  let id = req.params.id
  knex('beers')
  .where('id', id)
  .del()
  .then(deleted => {
    res.json({
      message: "BEER DELETED"
    })
  })
})
module.exports = router
