
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(config.port,()=>{
      console.log(`Api corriendo en http://localhost:${config.port}`)
  })
})
