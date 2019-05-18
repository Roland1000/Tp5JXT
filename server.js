const {app} = require('./app')

//Creation du port , ecoute sur 3000
const port = process.env.PORT || '3005'

//Le serveur va Ecouter sur le port 3000 
app.listen(port)