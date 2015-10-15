'use strict';

var Bicycle = require('./Bicycle');
var Parts = require('./Parts');
var Part = require('./Part');

var chain = new Part({
    name: 'chain',
    description: '10-speed'
});
var roadTire = new Part({
    name: 'tireSize',
    description: '23'
});
var tape = new Part({
    name: 'tapeColor',
    description: 'red'
});
var mountainTire = new Part({
    name: 'tireSize',
    description: '2.1'
});
var rearShock = new Part({
    name: 'rearShock',
    description: 'Fox'
});
var frontShock = new Part({
    name: 'frontShock',
    description: 'Manitou',
    needsSpare: false
});

var roadBike = new Bicycle({
    size: 'L',
    parts: new Parts([chain, roadTire, tape])
});
console.log(roadBike.size);
console.log(roadBike.spares());

var mountainBike = new Bicycle({
        size: 'L',
        parts: new Parts([chain, mountainTire, frontShock, rearShock])
});
console.log(mountainBike.size);
console.log(mountainBike.spares());
