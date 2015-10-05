'use strict';

var moment = require('moment');

function Schedule () {};

Schedule.prototype.isScheduled = function (schedulable, startDate, endDate) {
    console.log('This ' + schedulable.constructor + ' is not scheduled ' +
            'between ' + startDate.format('DD/MM/YYYY') + ' and ' + endDate.format('DD/MM/YYYY'));
    return false;
};

function Bicycle (args) {
    args = args || {};
    this._schedule = args.schedule|| new Schedule();
}

Bicycle.prototype = {
    constructor: Bicycle,

    get schedule () {
        return this._schedule;
    },

    get leadDays () {
        return 1;
    },

    isSchedulable: function (startDate, endDate) {
        return ! this.isScheduled(startDate.subtract(this.leadDays, 'days'), endDate);
    },

    isScheduled: function (startDate, endDate) {
        return this.schedule.isScheduled(this, startDate, endDate);
    }
}

var starting = moment('2015-09-04');
var ending = moment('2015-09-10');

var b = new Bicycle();
console.log(b.isSchedulable(starting, ending));
