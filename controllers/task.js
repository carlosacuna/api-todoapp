const Task = require('../models/task')

function getTasks(req, res){    
    Task.find({user_id: req.user._id}, (err, tasks)=>{
        if(err) return res.status(500).send({message: `Error al consultar el dato: ${err}`})

        if(!tasks){
            return res.status(404)
                        .send({message: "La dato no existe"}) 
        }

        res.status(200)
            .send({ message: "success", tasks }) 
    })
}

function saveTask(req, res){
    let task = new Task()
    task.title = req.body.title,
    task.description = req.body.description,
    task.user_id = req.user._id,
    task.state = req.body.state

    task.save((err, taskStored)=>{
        if(err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})

        res.status(201)
            .send({message: "Guardado exitosamente!!", data: taskStored}) 
    })
}

function getTask(req, res){
    let taskId = req.params.taskId
    Task.findById(taskId, (err, task)=>{
        if(err) return res.status(500).send({message: `Error al consultar el dato: ${err}`})

        if(!task){
            return res.status(404)
                        .send({message: "La dato no existe"}) 
        }

        res.status(200)
            .send({ message: "success", task }) 
    })
}

function updateTask(req, res){
    let taskId = req.params.taskId
    let update = req.body

    Task.findByIdAndUpdate(taskId, update ,(err, taskUpdate)=>{
        if(err) return res.status(500).send({message: `Error al actualizar el dato: ${err}`})        
        res.status(200)
            .send({ message: "Actualizado exitosamente!" }) 
    })
}

function deleteTask(req, res){
    let taskId = req.params.taskId
     Task.findById(taskId, (err, task)=>{
        if(err) return res.status(500).send({message: `Error al consultar el dato: ${err}`})

        task.remove(err=>{
            if(err) return res.status(500).send({message: `Error al borrar el dato: ${err}`})
            res.status(200)
                .send({ message: "Eliminado exitosamente!"}) 
        })
    })
}

module.exports = {
    getTasks,
    saveTask,
    getTask,
    updateTask,
    deleteTask
}