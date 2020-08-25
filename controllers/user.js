const User = require('../models/user')
const service = require('../services')
const bcrypt = require('bcrypt')

async function signUp (req, res) {

    bcrypt.genSalt(10, function(err, salt) {
        if (err) throw err
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            if (err) throw err
            const user = new User({
                email: req.body.email,   
                password: hash
            })
            user.save((err) => {
                if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })
        
                return res.status(201)
                            .send({ token: service.createToken(user) })
            })            
        });
    });  
      
}

 function signIn (req, res) {

  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (!user) return res.status(404).send({ message: 'No existe el usuario' })

    bcrypt.compare(req.body.password, user[0].password)
    .then(function(result) {
        if(!result) {
            return res.status(404).send({ message: 'No existe el usuario' })
        }else{
            res.status(200)
                    .send({ message: 'Logueado correctamente', token: service.createToken(user) })
        }
    });
  })

}

module.exports = {
  signUp,
  signIn
}
