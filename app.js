const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')
const api = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors())

app.use('/api', api)



module.exports = app