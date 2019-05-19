const express = require('express')
const router = express.Router()
const alert = require('./../model/Alert')
const category = require('./../model/Category')
const status = require('./../model/Status')


let alertsModel = undefined

/* Control usermodel initialisation */
router.use((req, res, next) => {
  if (!alertsModel) {
    res
    .status(500)
    .json({message: 'model not initialised'})
  }
  next()
})

//Obtenir une alerte spécifique à patir de son id
router.get('/:id', function(req, res, next){
  const id = req.params.id
  console.log("Id : "+ id)
  if(id){
    try{
      alertsModel.get(id, (err, alertFound) => {

       if(alertFound){
         res.json("successful operation")
         res.json(alertFound)
         res.status(200)
       } 
       else{
         res  
         .status(404)
         .json({message: `alert not found with id ${id}`})
       } 
     })
    }
    catch (exc){
      res.status(404)
      res.json({message: exc.message})
    }
  }
  else{
    res.status(400)
    res.json({message: "Invalid ID supplied"});
  }
})

router.get('/', (req, res) =>{
  alert.find(null, (err, myAlerts)=>{
    if(err) {throw err };
    res.json({'alerts': myAlerts});
  })
  res.json("alertsModel");

})

/* Ajout d'une nouvelle alerte.*/
router.post("/", (req, res, next)  =>{
  const newAlert = req.body;
  if (newAlert) {
    try {
      alertsModel.add(newAlert, (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
          res.status(200).json({message:'successuful operation'});
        }
      });
    } catch (exc) {
      res.status(400).json({ message: exc.message });
    }
  } else {
    res.status(405).json({ message: 'Invalid input' });
  }
});


const alertFound = (alertFound) =>{

  return {
    id: alertFound.id,
    type: alertFound.type,
    label : alertFound.label,
    status: alertFound.status,
    from: alertFound.from,
    to: alertFound.to 
  };
}


/** Pour l'initialisation du model **/
module.exports = (model) => {
  alertsModel = model;
  return router;
}
