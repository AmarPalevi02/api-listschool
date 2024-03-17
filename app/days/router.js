const express = require('express')
const route = express()
const { index, create } = require('./controller')

route.get('/day', index)
route.post('/day/create', create)

module.exports = route
