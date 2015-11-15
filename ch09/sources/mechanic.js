'use strict';

function Mechanic () {
}

Mechanic.prototype = {
    constructor: Mechanic,

    prepare_trip: function (trip) {
        trip.bicycles.forEach(this.prepareBicycles.bind(this));
    },

    prepareBicycles: function (bicycles) {
        bicycles.forEach(this.prepareBicycle.bind(this));
    },

    prepareBicycle: function (bicycle) {}
}

module.exports = Mechanic;
