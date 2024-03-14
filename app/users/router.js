const express = require('express')
const route = express()
const { index } = require('./controller')

route.get('/users', index)

module.exports = route