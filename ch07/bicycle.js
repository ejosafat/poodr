'use strict';

var moment = require('moment');
var cocktail = require('cocktail');
var schedule = require('./schedule');

function Bicycle (args) {
    args = args || {};
}

Bicycle.prototype = {
    constructor: Bicycle,

    leadDays: function () {
        return 1;
    }
}

cocktail.mix(Bicycle, schedule);

var starting = moment('2015-09-04');
var ending = moment('2015-09-10');

var b = new Bicycle();
console.log(b.isSchedulable(starting, ending));
