'use strict';

var Bicycle = require('./Bicycle');
var partsFactory = require('./partsFactory');

var roadConfig = [
    ['chain', '10-speed'],
    ['tireSize', '23'],
    ['tapeColor', 'red']
];
var mountainConfig = [
    ['chain', '10-speed'],
    ['tireSize', '2.1'],
    ['rearShock', 'Fox'],
    ['frontShock', 'Manitou', false]
];

var roadBike = new Bicycle({
    size: 'L',
    parts: new partsFactory.build(roadConfig)
});
console.log(roadBike.size);
console.log(roadBike.spares());

var mountainBike = new Bicycle({
        size: 'L',
        parts: new partsFactory.build(mountainConfig)
});
console.log(mountainBike.size);
console.log(mountainBike.spares());
