var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mapDataSchema = new Schema(
    {
        ADDITIONALINFO: {type: String, required:false, max: 100},
        ADDRESS: {type: String, required: true},
        BUSINESSNAME: {type: String, required: true},
        BUSINESS_ID: {type: Number},
        BUSINESS_UID: {type: String},
        DESCRIPTION: {type: String, max: 300},
        DROPOFF: {type: Boolean},
        EMAIL: {type: String, required: false},
        FEES: {type: Boolean},
        GEO_LAT: {type: Number, required: true},
        GEO_LON: {type: Number, required: true},
        PHONE: {type: String , required: false},
        POSTCODE: {type: Number, required: true},
        PROVIDER_NAME: {type: String, required: false},
        STATE: {type: String, required: true},
        SUBURB: {type: String, required: true},
        WEBSITE: {type: String, required: false},
        Batteries: {type: Boolean, required: true},
        Computers: {type: Boolean, required: true},
        Electricals: {type: Boolean, required: true},
        light_Globes: {type: Boolean, required: true},
        Mobilephones: {type: Boolean, required: true},
        Printer_catridges: {type: Boolean, required: true},
        Televisions: {type: Boolean, required: true}
    }
);

//Export model
module.exports = mongoose.model('mapDataInstance', mapDataSchema);