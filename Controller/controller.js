var mongoose = require('mongoose');
var Stations = mongoose.model('geodata');
var Customer = mongoose.model('customerDataInstance');
const path = require('path');


var countInArea = function(req, res){
    console.log("countInArea Ran");
    var inputPostcode = req.params.postcode;
    var cust_length = 0;
    var allInArea = Customer.find({POSTCODE : inputPostcode}, function(err, customers) {
        if(!err){
            console.log(customers.length);
            cust_length =  customers.length;

            res.send(customers);
            return cust_length;

        }else{
            res.sendStatus(404);
        }


        // res.send(allInArea.count);
    });
};


var findAllStations = function(req,res){
    var state = req.params.states;
    console.log("findAllStations ran");
    // var required_columns = "ADDITIONALINFO ADDRESS BUSINESSNAME BUSINESS_ID DESCRIPTION DROPOFF FEES GEO_LAT GEO_LON PHONE POSTCODE PROVIDER_NAME STATE SUBURB  WEBSITE Batteries Computers Electricals light_Globes Mobilephones Printer_catridges Televisions";
    // { 'STATE': state }, required_columns,
    Stations.find({ 'STATE': state },function(err,geodata){
        if(!err){
            res.send(geodata);
        }else{
            res.sendStatus(404);
        }
    });
};

var findCloseStations = function(req,res){
    var coords = req.params;
    console.log("findCloseStations ran");
    console.log(coords);

    Stations.find({ loc :
            { $geoWithin :
                    { $centerSphere :
                            [ [ coords.lon , coords.lat ] , 10/3963.2 ]
                    } } },function(err,geodata){
        if(!err){
            console.log(geodata);
            res.send(geodata);
        }else{
            res.sendStatus(404);
        }
    });
};




// var findOneCafe = function(req,res){
//     var cafeInx = req.params.id;
//     Cafe.findById(cafeInx,function(err,cafe){
//         if(!err){
//             res.send(cafe);
//         }else{
//             res.sendStatus(404);
//         }
//     });
// };

//For RequestForm/CheckRequests.

var saveCustomer = function(req, res){
    console.log("got customer form data! saving to database.");
    var currCustomer = new Customer(req.body);
    console.log("Customer's Postcode is "+ currCustomer.POSTCODE);


    currCustomer.save()
    .then(customer => {
        console.log("REDIRECTING");
        res.status(200).sendFile(path.join(__dirname + '/deliveryTracker.html'));
        // res.status(200).sendFile(path.join(__dirname + '/deliveryTracker.html'));
        // res.status(200).sendFile(path.join(__dirname + '/deliveryTracker.html?postcode='+currCustomer.POSTCODE.toString()));
        // countInArea("/api/postcode/" + currCustomer.POSTCODE,res);
    })
    .catch(err => {
        console.log("Error: " + err);
        res.sendStatus(400);
    })


    // This is the Alternative method.
    // currCustomer.save(function (err, newCustomer) {
    //     if(!err){
    //         res.status(200).sendFile(path.join(__dirname + '/checkRequests.html'));
    //         countInArea(3000,res);
    //
    //         // res.send(newCustomer);
    //     }else{
    //         console.log("xd");
    //         res.sendStatus(400);
    //     }
    // });


    // console.log("has counted");

};


module.exports.countInArea = countInArea;
module.exports.saveCustomer = saveCustomer;
// module.exports.createCafe = createCafe;
module.exports.findCloseStations = findCloseStations;
module.exports.findAllStations = findAllStations;
// module.exports.findOneCafe = findOneCafe;