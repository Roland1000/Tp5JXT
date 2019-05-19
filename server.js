const {app} = require('./app')

//Création du port , ecoute sur 3000
const port = process.env.PORT || '3000';

//Le serveur va Ecouter sur le port 3000 
app.listen(port);