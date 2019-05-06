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
        //id.uuidv1,
    }
}

module.exports =mongoose.model('Alert', alertSchema);