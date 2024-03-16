const express = require('express')
const route = express()

const { index, create } = require('./controller')
const { validationCreate } = require('./validator')

route.get('/matkul', index)
route.post('/matkul/create', validationCreate, create)

module.exports = route