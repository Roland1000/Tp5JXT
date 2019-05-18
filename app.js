const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require ('mongoose')

const alertsRouter = require('./routes/alerts-v1')
const alertsModel = require('./model/Alert')

const app = express()


mongoose.Promise = global.Promise;

//let dev_db_url = "mongodb://localhost:27017/alertsDB";
//let mongodDB = process.env.MONGODB_URI || dev_db_url;
// mongoose
//         .connect(mongodDB)
//         .then(function(){
//             console.log("Databse is connected .....");
//         })

//let db = mongoose.connection;
//db.on('error',console.error.bind(console,'MongoDB connection error: '))


// Activation de Helmet
app.use(helmet({noSniff: true}))


// Activation de  BodyParser
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

// On injecte le model dans les routers. Ceci permet de supprimer la dépendance
// directe entre les routers et le modele
app.use('/v1/alerts', alertsRouter(alertsModel))

// For unit tests
exports.app = app