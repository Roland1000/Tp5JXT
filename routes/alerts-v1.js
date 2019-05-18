const express = require('express')
const router = express.Router()
const Alert = require('./../model/Alert')
const category = require('./../model/Category')
const status = require('./../model/Status')


let alertsModel = undefined

/* Control usermodel initialisation */
router.use((req, res, next) => {
  /* istanbul ignore if */
  if (!alertsModel) {
    res
      .status(500)
      .json({message: 'model not initialised'})
  }
  next()
})

//get a specific alert by id
router.get('/:id', function(req, res, next){
    // addAlert();
    const id = req.params.id
    console.log("Id : "+ id)
    if(id){
        try{
        //    const alertFound =  alertsModel.get(id).exec(function(err, alerts) {
        //     console.log(alerts);
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
            res.json("vers ici")
            res.json({message: exc.message})
        }
    }
    else{
        res.status(400)
        res.json({message: "Invalid ID supplied"})
    }
})

router.get('/', (req, res) =>{
    // res.json(Alert.findById(req.params.id))
    Alert.find(null, (err, mesAlerts)=>{
        if(err) {throw err };
        res.json({'alerts': mesAlerts});
    })
    res.json("alertsModel")

})


// //create a new alert in the alerts list
// router.post('/', (req, res) =>{
//     const newAlert = new Alert(req.body)

//     //saving the new alert into the database
//     newAlert.save().then((result) => {
//         console.log(result)
//         res
//             .status(200)
//             .json('Alert created successfully ')
        
//     }).catch((err) => {
//         console.log("error "+ err);
//         res.status(400)
//         res.json("Aie une erreur")
//     });

    
// })

/* Add a new alert. */
router.post("/", function(req, res, next) {
  const newAlert = req.body;
  if (newAlert) {
    try {
      alertsModel.add(newAlert, (err, result) => {
        if (err) {
          res.status(400).json({ message: err.message });
        } else {
            res.status(200).json({message:'successuf operation'});
        }
      });
    } catch (exc) {
      res.status(400).json({ message: exc.message });
    }
  } else {
    res.status(405).json({ message: 'Invalid input' });
  }
});


function alertFound(alertFound){
    return {
        id: alertFound.id,
        type: alertFound.type,
        label : alertFound.label,
        status: alertFound.status,
        from: alertFound.from,
        to: alertFound.to 
    }
}

/** return a closure to initialize model */
module.exports = (model) => {
    alertsModel = model;
    return router;
  }
