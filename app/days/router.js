const express = require('express')
const route = express()
const { index, create } = require('./controller')
const { validationCreate } = require('./validator')

route.get('/day', index)
route.post('/day/create',  create)

module.exports = route
