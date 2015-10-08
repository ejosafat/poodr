'use strict';


var moment = require('moment');
var schedule = require('./schedule');

function includeModuleRubyWay( a, b ) {
    for( var key in b ) {
        if( !a.hasOwnProperty( key ) && b.hasOwnProperty( key ) ) {
            a[key] = b[key];
        }
    }
    return a;
}

function Bicycle (args) {
    args = args || {};
}

Bicycle.prototype = {
    constructor: Bicycle,

    leadDays: function () {
        return 1;
    }
}

includeModuleRubyWay(Bicycle.prototype, schedule);

function Vehicle (args) {
    args = args || {};
}
Vehicle.prototype = {
    constructor: Vehicle,

    leadDays: function () {
        return 3;
    }
}

includeModuleRubyWay(Vehicle.prototype, schedule);

function Mechanic (args) {
    args = args || {};
}
Mechanic.prototype = {
    constructor:Mechanic,

    leadDays: function () {
        return 4;
    }
}

includeModuleRubyWay(Mechanic.prototype, schedule);

var starting = moment('2015-09-04');
var ending = moment('2015-09-10');

var b = new Bicycle();
console.log(b.isSchedulable(starting, ending));

starting = moment('2015-09-04');
ending = moment('2015-09-10');
var v = new Vehicle();
console.log(v.isSchedulable(starting, ending));
starting = moment('2015-09-04');
ending = moment('2015-09-10');
var m = new Mechanic();
console.log(m.isSchedulable(starting, ending));
