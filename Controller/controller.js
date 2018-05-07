var mongoose = require('mongoose');
var Stations = mongoose.model('geodata');


var findAllStations = function(req,res){
    console.log("function ran");
    Stations.find(function(err,geodata){
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
module.exports.findAllStations = findAllStations;
// module.exports.findOneCafe = findOneCafe;