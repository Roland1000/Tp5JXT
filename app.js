const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const mongoose = require ('mongoose')
const alertsRouter = require('./routes/alerts-v1')
const alertsModel = require('./model/Alert')

//Création d'une instance de express
const app = express();

mongoose.Promise = global.Promise;

//Activation de Helmet pour la sécurité
app.use(helmet({noSniff: true}));

//Activation de BodyParser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

//injection du model dans les routers, Permettant la suppression des dépendances
app.use('/v1/alerts', alertsRouter(alertsModel));

//Pour les tests unitaires
exports.app = app;