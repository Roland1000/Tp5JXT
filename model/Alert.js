const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require("./Category");
const Status = require("./Status");
const uuidv1 = require("uuidv1");


const alertSchema = new Schema({
    id: {type: String, required: false },
    type: {type: Category, required: true },
    label: {type: String, required: true },
    status : {type: Status, required: true },
    from: {type: String, required: true },
    to: {type: String, required: true },
})


const ajout = (alert, callback)  => {
    const myAlert = {
        ...alert,
        id: uuidv1(),
    };

    new Alerts(newAlert).save(err => {
        if (err) {
          callback(err, null);
        } else {
          console.log("saved");
          callback(null, newAlert);
        }
      });
    };
    
    const getFromStatus = (mystatus,callback) => {
     Alerts.find({status:{$in:mystatus}},(err,alert)=>{
     err?callback(err,null):callback(null,alert)
    
     })
    };
    const get = (alertId, callback) => {
      Alerts.find({ id: alertId }, (err, alert) => {
          err ? callback(err, null) : callback(null, alert);
      });
    };
    
    const update = (alertId, newalert, callback) => {
      Alerts.findOneAndUpdate(
        { id: alertId },
        newalert,
        { new: true },
        (err, alert) => {
          if (err) {
            callback(err, null);
          } else {
            callback(null, alert);
          }
        }
      );
    };
    
    const remove = (alertId, callback) => {
      Alerts.findOneAndDelete({ id: alertId }, (err, alert) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, alert);
        }
      });
    };
    
    module.exports.add = add;
    module.exports.get = get;
    module.exports.update = update;
    module.exports.getFromStatus = getFromStatus;
    module.exports.remove = remove;

    module.exports =mongoose.model('Alert', alertSchema);