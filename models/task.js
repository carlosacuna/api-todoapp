
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchea = Schema({
    title: String,
    description: String,
    user_id: String, 
    state: {type: String, enum:['Pendiente','Completada']},
    created: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Task', TaskSchea)