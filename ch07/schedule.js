'use strict';

function Schedule () {};

Schedule.prototype.isScheduled = function (schedulable, startDate, endDate) {
    console.log('This ' + schedulable.constructor + ' is not scheduled ' +
            'between ' + startDate.format('DD/MM/YYYY') + ' and ' + endDate.format('DD/MM/YYYY'));
    return false;
};

var scheduleModule = {
    schedule: function () {
        return this._schedule || (this._schedule = new Schedule());
    },

    isSchedulable: function (startDate, endDate) {
        return ! this.isScheduled(startDate.subtract(this.leadDays(), 'days'), endDate);
    },

    isScheduled: function (startDate, endDate) {
        return this.schedule().isScheduled(this, startDate, endDate);
    },

    leadDays: function () {
        return 0;
    }
}

module.exports = scheduleModule;
