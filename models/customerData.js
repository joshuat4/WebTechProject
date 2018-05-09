var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var customerDataSchema = new Schema(
    {
        NAME: {type: String, required: true},
        EMAIL: {type: String, required: true},
        PHONE: {type: String , required: false},
        ADDRESS_LINE_1: {type: String, required: true},
        ADDRESS_LINE_2: {type: String, required: false},
        SUBURB: {type: String, required: true},
        POSTCODE: {type: Number, required: true},
        WASTE_TYPE: {type:String, enum:['Mobile Phones', 'Televisions', 'Batteries', 'Computers', 'Small Appliances', 'Large Appliances', 'Others'], required: true},
        DESCRIPTION: {type: String, required: false}
    }
);

// var Customer = mongoose.model('Customer',customerDataSchema);


// var countInArea = function(inputPostcode, res){
//     var allInArea = this.model('Customer').find({POSTCODE : inputPostcode}, function(err, customers) {
//         console.log(allInArea.count());
//         res.send(allInArea.count());
//     })}
//
//Export model
// module.exports.countInArea = countInArea;
module.exports = mongoose.model('customerDataInstance', customerDataSchema);