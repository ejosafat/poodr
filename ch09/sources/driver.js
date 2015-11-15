'use strict';

function Driver () {
}

Driver.prototype = {
    constructor: Driver,

    prepare_trip: function (trip) {
        var vehicle = trip.vehicle;
        this.gasUp(vehicle);
        this.fillWaterTank(vehicle);
    },

    gasUp: function (vehicle) {},

    fillWaterTank: function (vehicle) {}
}

module.exports = Driver;
