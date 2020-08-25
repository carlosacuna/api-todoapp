const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/api/task', (req, res)=>{
   res.status(200)
        .send({message: "success", data:[]}) 
})

app.get('/api/task/:taskId', (req, res)=>{
    
})

app.post('/api/task', (req, res)=>{
    console.log(req.body)
    res.status(201)
    .send({message: "Guardado exitosamente!!"}) 
})

app.put('/api/task/:taskId', (req, res)=>{
    
})

app.delete('/api/task/:taskId', (req, res)=>{
    
})


app.listen(3000,()=>{
    console.log(`Api corriendo en http://localhost:${port}`)
})