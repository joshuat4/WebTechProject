var mongoose = require('mongoose');
var Stations = mongoose.model('geodata');


var findAllStations = function(req,res){
    var state = req.params.states;
    console.log("function ran");
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
    console.log("function ran");
    console.log(coords);

    Stations.find({ loc :
            { $geoWithin :
                    { $centerSphere :
                            [ [ coords.lon , coords.lat ] , 30 / 3963.2 ]
                    } } },function(err,geodata){
        if(!err){
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

// module.exports.createCafe = createCafe;
module.exports.findCloseStations = findCloseStations;
module.exports.findAllStations = findAllStations;
// module.exports.findOneCafe = findOneCafe;