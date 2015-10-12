'use strict';

var Bicycle = require('./Bicycle');
var RoadBikeParts = require('./RoadBikeParts');
var MountainBikeParts = require('./MountainBikeParts');


var roadBike = new Bicycle({
        size: 'L',
        parts: new RoadBikeParts({
            tapeColor: 'red'
        })
});
console.log(roadBike.size);
console.log(roadBike.spares());

var mountainBike = new Bicycle({
        size: 'L',
        parts: new MountainBikeParts({
            frontShock: 'Manitou',
            rearShock: 'Fox'
        })
});
console.log(mountainBike.size);
console.log(mountainBike.spares());
