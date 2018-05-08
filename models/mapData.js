var mongoose = require('mongoose');

var mapDataSchema = mongoose.Schema(
    {
        ADDITIONALINFO: {type: String, required:false, max: 100},
        ADDRESS: {type: String, required: true},
        BUSINESSNAME: {type: String, required: true},
        BUSINESS_ID: {type: Number},
        BUSINESS_UID: {type: String},
        DESCRIPTION: {type: String, max: 300},
        DROPOFF: {type: String},
        EMAIL: {type: String, required: false},
        FEES: {type: String},
        GEO_LAT: {type: Number, required: true},
        GEO_LON: {type: Number, required: true},
        PHONE: {type: String , required: false},
        POSTCODE: {type: Number, required: true},
        PROVIDER_NAME: {type: String, required: false},
        STATE: {type: String, required: true},
        SUBURB: {type: String, required: true},
        WEBSITE: {type: String, required: false},
        Batteries: {type: String, required: true},
        Computers: {type: String, required: true},
        Electricals: {type: String, required: true},
        light_Globes: {type: String, required: true},
        Mobilephones: {type: String, required: true},
        Printer_catridges: {type: String, required: true},
        Televisions: {type: String, required: true}
    }, {collection : 'geodata'}
);

//Export model
mongoose.model('geodata', mapDataSchema);