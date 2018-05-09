var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var partnerDataSchema = new Schema(
    {
        NAME: {type: String, required: true},
        EMAIL: {type: String, required: true},
        PHONE: {type: String , required: true},
        ADDRESS_LINE_1: {type: String, required: true},
        ADDRESS_LINE_2: {type: String, required: false},
        SUBURB: {type: String, required: true},
        POSTCODE: {type: Number, required: true},
        WASTE_TYPE: {type:String, enum:['Mobile Phones', 'Televisions', 'Batteries', 'Computers', 'Small Appliances', 'Large Appliances', 'Others'], required: true},
        DESCRIPTION: {type: String, required: false}
    }
);

//Export model
module.exports = mongoose.model('partnerDataInstance', partnerDataSchema);