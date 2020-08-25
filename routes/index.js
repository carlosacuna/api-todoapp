const express = require('express')
const api = express.Router()
const TaskControlller = require('../controllers/task')
const userController = require('../controllers/user')
const auth = require('../middlewares/auth')


api.post('/signup', userController.signUp)
api.post('/signin', userController.signIn)

api.get('/task', auth ,TaskControlller.getTasks)
api.get('/task/:taskId', auth, TaskControlller.getTask)
api.post('/task', auth ,TaskControlller.saveTask)
api.put('/task/:taskId', auth ,TaskControlller.updateTask)
api.delete('/task/:taskId', auth ,TaskControlller.deleteTask)



module.exports = api